export const getMoreCharacters = async (page) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  
      if (!response.ok) {
        throw new Error("No se pudo cargar más personajes.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error; 
    }
  };