import Link from "next/link";
import Image from "next/image";
import { Character } from "@/types/character";

interface CharacterCardProps {
  character: Character;
  view?: "grid" | "list";
}

export default function CharacterCard({
  character,
  view = "grid",
}: CharacterCardProps) {
  if (view === "list") {
    return (
      <Link
        href={`/characters/${character.id}`}
        className="border rounded-xl p-4 flex gap-4 hover:shadow-md transition"
      >
        <Image
          src={character.image}
          alt={character.name}
          width={120}
          height={120}
          className="rounded-lg"
        />

        <div className="space-y-1">
          <h2 className="text-xl font-semibold">{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/characters/${character.id}`}
      className="border rounded-xl p-4 hover:shadow-md transition"
    >
      <Image
        src={character.image}
        alt={character.name}
        width={400}
        height={400}
        className="w-full h-auto rounded-lg"
      />

      <div className="mt-3 space-y-1">
        <h2 className="text-xl font-semibold">{character.name}</h2>
        <p>{character.status}</p>
        <p>{character.species}</p>
      </div>
    </Link>
  );
}