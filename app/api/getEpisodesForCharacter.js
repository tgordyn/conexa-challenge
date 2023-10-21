export const getEpisodesForCharacter = async (characterId) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
    if (!response.ok) {
      throw new Error(`No se pudo obtener los episodios para el personaje ${characterId}`);
    }
    const characterData = await response.json();

    // Obtiene detalles de episodios a partir de las URL de episodios
    const episodesData = await Promise.all(
      characterData.episode.map(async (episodeUrl) => {
        const episodeResponse = await fetch(episodeUrl);
        if (episodeResponse.ok) {
          return episodeResponse.json();
        }
        return null;
      })
    );

    // Filtra los episodios válidos (elimina nulos)
    const validEpisodes = episodesData.filter((episode) => episode);

    return {
      characterName: characterData.name,
      episodes: validEpisodes,
    };
  } catch (error) {
    console.error('Error al obtener episodios para el personaje', error);
    return {
      characterName: '',
      episodes: [],
    };
  }
};