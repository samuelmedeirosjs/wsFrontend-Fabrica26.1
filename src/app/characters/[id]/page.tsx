import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getCharacterById, getEpisodesByUrls } from "@/services/api/characters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface CharacterDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const translateAPIStatus = (status: string) => {
  switch (status) {
    case "Alive":
      return "Vivo";
    case "Dead":
      return "Morto";
    case "unknown":
      return "Desconhecido";
    case "Human":
      return "Humano";
    case "Alien":
      return "Alienígena";
    case "Male":
      return "Masculino";
    case "Female":
      return "Feminino";
    default:
      return status;
  }
};

export default async function CharacterDetailsPage({
  params,
}: CharacterDetailsPageProps) {
  const { id } = await params;

  let character;

  try {
    character = await getCharacterById(Number(id));
  } catch {
    notFound();
  }

  const episodes = await getEpisodesByUrls(character.episode);
  const hiddenEpisodes = episodes.slice(5);
  const visibleEpisodes = episodes.slice(0, 5);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8 mb-50">
      <div className="mb-6">
        <Link
          href="/characters"
          className="inline-flex items-center gap-2 rounded-xl border bg-surface/70 px-4 py-2 text-sm font-medium transition hover:bg-surface"
        >
          <FontAwesomeIcon className="ml-2 h-4" icon={faArrowLeft} /> Voltar
        </Link>
      </div>
      <section className="grid gap-8 lg:grid-cols-[320px_1fr]">
        <div
          className={`bg-surface/70 border-b-4 rounded-2xl p-6 ${character.species === "Human" ? "border-primary" : "border-secondary"
            }`}
        >
          <div className="flex flex-col items-center text-center">
            <Image
              src={character.image || "https://placehold.co/400x400?text=No+Image"}
              alt={character.name || "Imagem do personagem"}
              width={400}
              height={400}
              className={`w-full max-w-72 h-auto rounded-2xl ${character.status === "Dead" ? "grayscale" : ""
                }`}
              priority
            />

            <div className="mt-5 space-y-1">
              <p className="text-sm text-muted-foreground">ID #{character.id}</p>
              <h1 className="text-3xl font-bold">{character.name}</h1>
              <p>{translateAPIStatus(character.status)}</p>
              <p>{translateAPIStatus(character.species)}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <section className="bg-surface/70 rounded-2xl border p-6">
            <h2 className="text-2xl font-semibold mb-4">Informações</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Origem</p>
                <p className="text-lg font-medium">
                  {translateAPIStatus(character.origin?.name) || "Desconhecida"}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Localização Atual</p>
                <p className="text-lg font-medium">
                  {translateAPIStatus(character.location?.name) || "Desconhecida"}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Gênero</p>
                <p className="text-lg font-medium">
                  {translateAPIStatus(character.gender)}
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="text-lg font-medium">
                  {translateAPIStatus(character.status)}
                </p>
              </div>
            </div>
          </section>

          <section className="bg-surface/70 rounded-2xl border p-6">
            <div className="flex items-center justify-between gap-3 flex-wrap mb-4">
              <h2 className="text-2xl font-semibold">Episódios</h2>
              <span className="text-sm text-muted-foreground">
                {episodes.length} episódio{episodes.length !== 1 ? "s" : ""}
              </span>
            </div>

            <ul className="space-y-3">
              {visibleEpisodes.map((episode) => (
                <li
                  key={episode.id}
                  className="rounded-xl border p-4 bg-background/60"
                >
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div>
                      <p className="font-medium">{episode.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {episode.episode}
                      </p>
                    </div>

                    <span className="text-sm text-muted-foreground">
                      {episode.air_date}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            {hiddenEpisodes.length > 0 && (
              <details className="mt-4 group">
                <summary className="cursor-pointer list-none inline-flex items-center gap-2 rounded-xl border bg-background/60 px-4 py-2 text-sm font-medium transition hover:bg-background">
                  <span className="group-open:hidden">Ver mais</span>
                  <span className="hidden group-open:inline">Ver menos</span>
                </summary>

                <ul className="mt-4 space-y-3">
                  {hiddenEpisodes.map((episode) => (
                    <li
                      key={episode.id}
                      className="rounded-xl border p-4 bg-background/60"
                    >
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <div>
                          <p className="font-medium">{episode.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {episode.episode}
                          </p>
                        </div>

                        <span className="text-sm text-muted-foreground">
                          {episode.air_date}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}