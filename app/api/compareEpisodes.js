import { getEpisodesForCharacter } from './getEpisodesForCharacter';


export const compareEpisodes = async (characterId1, characterId2) => {
    const episodesForCharacter1 = await getEpisodesForCharacter(characterId1);
    const episodesForCharacter2 = await getEpisodesForCharacter(characterId2);
  
    // Episodios en los que aparece solo characterId1
    const episodesWithCharacter1 = episodesForCharacter1.filter((episode1) => {
      return (
        !episodesForCharacter2.some((episode2) => episode2.id === episode1.id) 
      );
    });
  
    // Episodios en los que aparece solo characterId2
    const episodesWithCharacter2 = episodesForCharacter2.filter((episode2) => {
      return (
        !episodesForCharacter1.some((episode1) => episode1.id === episode2.id) 
      );
    });
  
    // Episodios en los que aparecen ambos personajes
    const episodesWithBothCharacters = episodesForCharacter1.filter((episode1) => {
      return episodesForCharacter2.some((episode2) => episode2.id === episode1.id); 
    });
  
    return {
      episodesWithCharacter1,
      episodesWithCharacter2,
      episodesWithBothCharacters,
    };
  };