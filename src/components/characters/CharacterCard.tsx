import Link from "next/link";
import Image from "next/image";
import { Character } from "@/types/character";
import StatusFlag from "../shared/StatusFlag";

interface CharacterCardProps {
  character: Character;
  view?: "grid" | "list";
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
    default:
      return status;
  }
};

export default function CharacterCard({
  character,
  view = "grid",
}: CharacterCardProps) {
  if (view === "list") {
    return (
      <Link
        href={`/characters/${character.id}`}
        className={`border-b-3 rounded-xl p-4 flex gap-4 bg-surface/70 max-w-150 ${character.species === "Human" ? "border-primary" : "border-secondary"} py-6 hover:shadow-md items-center hover:-translate-y-1 translate-y-0 transition duration-300`}
      >
        <Image
          src={character.image}
          alt={translateAPIStatus(character.name)}
          width={100}
          height={100}
          className={`rounded-2xl ${character.status === "Dead" ? "grayscale-100" : ""}`}
        />

        <div className="space-y-1">
          <h2 className="text-xl font-semibold">{character.name}</h2>
          <p>{translateAPIStatus(character.status)}</p>
          <p>{translateAPIStatus(character.species)}</p>
        </div>
        <StatusFlag status={character.status} />
      </Link>
    );
  }

  return (
    <Link
      href={`/characters/${character.id}`}
      className={`w-full relative bg-surface/70 hover:bg-surface border-b-3 max-w-80 ${character.species === "Human" ? "border-primary" : "border-secondary"} rounded-xl py-6 hover:shadow-md flex flex-col items-center hover:-translate-y-1 transition duration-300`}
    >
      <StatusFlag status={character.status} />
      <div className="max-w-50 overflow-hidden mt-2 rounded-2xl">
        <Image
          src={character.image}
          alt={translateAPIStatus(character.name)}
          width={400}
          height={400}
          className={`w-full max-w-60 h-auto rounded-2xl ${character.status === "Dead" ? "grayscale-100" : ""} hover:scale-120 duration-300`}
        />
      </div>

      <div className="mt-3 space-y-1 w-full text-center">
        <h2 className="text-xl font-semibold">{character.name}</h2>
        <p>{translateAPIStatus(character.species)}</p>
      </div>
    </Link>
  );
}