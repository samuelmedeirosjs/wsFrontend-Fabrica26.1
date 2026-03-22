import CharacterCard from "@/components/characters/character-card";
import Search from "@/components/shared/Search";
import ViewToggle from "@/components/shared/ViewToggle";
import CharactersPagination from "@/components/characters/CharactersPagination";
import { getCharacters } from "@/services/api/characters";

type ViewMode = "grid" | "list";

interface CharactersPageProps {
  searchParams: Promise<{
    page?: string;
    name?: string;
    view?: string;
    status?: string;
    species?: string;
    gender?: string;
  }>;
}

export default async function CharactersPage({
  searchParams,
}: CharactersPageProps) {
  const params = await searchParams;

  const page = Number(params.page) > 0 ? Number(params.page) : 1;
  const name = params.name?.trim() || "";
  const status = params.status?.trim() || "";
  const species = params.species?.trim() || "";
  const gender = params.gender?.trim() || "";
  const view: ViewMode = params.view === "list" ? "list" : "grid";

  const data = await getCharacters({
    page,
    name,
    status,
    species,
    gender,
  });

  const hasCharacters = data.results.length > 0;

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-8">
      <section className="mb-8 space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Personagens</h1>
          <p className="text-muted-foreground">
            Explore personagens do universo de Rick and Morty.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <Search defaultValue={name} />
          <ViewToggle currentView={view} />
        </div>
      </section>

      {!hasCharacters ? (
        <section className="rounded-2xl border border-dashed p-10 text-center">
          <h2 className="text-xl font-semibold">Nenhum personagem encontrado</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Tente buscar outro nome ou ajustar os filtros.
          </p>
        </section>
      ) : (
        <section
          className={
            view === "grid"
              ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              : "flex flex-col gap-4"
          }
        >
          {data.results.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              view={view}
            />
          ))}
        </section>
      )}

      {data.info.pages > 1 && (
        <section className="mt-10">
          <CharactersPagination
            currentPage={page}
            totalPages={data.info.pages}
          />
        </section>
      )}
    </main>
  );
}