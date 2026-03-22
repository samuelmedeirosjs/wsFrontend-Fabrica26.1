import { CharacterResponse, Character } from "@/types/character";

interface GetCharactersParams {
  page?: number;
  name?: string;
  gender?: string;
  status?: "Alive" | "Dead" | "unknown";
  species?: string;
}

export const getCharacters = async ({
  page = 1,
  name,
  species,
  gender,
  status,
}: GetCharactersParams): Promise<CharacterResponse> => {
  const params = new URLSearchParams();
  params.set("page", page.toString());
  if (name) params.set("name", name);
  if (status) params.set("status", status);
  if (species) params.set("species", species);
  if (gender) params.set("gender", gender);

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?${params.toString()}`,
      { next: { revalidate: 60 } },
    );
    return response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Falha ao buscar os personagens");
  }
};

export const getCharacterById = async (id: number): Promise<Character> => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?id=${id}`,
      { next: { revalidate: 60 } },
    );
    return response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Falha ao buscar os personagem por ID");
  }
};
