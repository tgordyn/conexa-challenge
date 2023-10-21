import { getEpisodesForCharacter } from './getEpisodesForCharacter';

export const compareEpisodes = async (characterId1, characterId2) => {
    const character1Data = await getEpisodesForCharacter(characterId1);
    const character2Data = await getEpisodesForCharacter(characterId2);
  
    // Episodios en los que aparece solo characterId1
    const episodesWithCharacter1 = character1Data.episodes.filter((episode1) => {
      return (
        !character2Data.episodes.some((episode2) => episode2.id === episode1.id) 
      );
    });
  
    // Episodios en los que aparece solo characterId2
    const episodesWithCharacter2 = character2Data.episodes.filter((episode2) => {
      return (
        !character1Data.episodes.some((episode1) => episode1.id === episode2.id) 
      );
    });
  
    // Episodios en los que aparecen ambos personajes
    const episodesWithBothCharacters = character1Data.episodes.filter((episode1) => {
      return character2Data.episodes.some((episode2) => episode2.id === episode1.id); 
    });
  
    return {
      characterName1: character1Data.characterName,
      characterName2: character2Data.characterName,
      episodesWithCharacter1,
      episodesWithCharacter2,
      episodesWithBothCharacters,
    };
};