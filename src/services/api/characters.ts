import { CharacterResponse, Character } from "@/types/character";
import { Episode } from "@/types/episode";

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

  const response = await fetch(
    `https://rickandmortyapi.com/api/character?${params.toString()}`,
    { next: { revalidate: 60 } },
  );
    
  if (!response.ok) {
    throw new Error("Falha ao buscar os personagens");
  }
  
  return response.json();
};

export const getCharacterById = async (
  id: number
): Promise<Character> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
    { next: { revalidate: 60 } }
  );

  if (!response.ok) {
    throw new Error("Personagem não encontrado");
  }

  return response.json();
};


export async function getEpisodesByUrls(urls: string[]): Promise<Episode[]> {
  if (!urls?.length) return [];

  const episodeIds = urls.map((url) => url.split("/").pop()).filter(Boolean).join(",");

  const response = await fetch(`https://rickandmortyapi.com/api/episode/${episodeIds}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch episodes");
  }

  const data = await response.json();

  return Array.isArray(data) ? data : [data];
}