export const divideCharacters = (characters)=> {
    const totalCharacters = characters.length;
    let charactersLeft, charactersRight;
  
    if (totalCharacters % 2 === 0) {
      const halfIndex = totalCharacters / 2;
      charactersLeft = characters.slice(0, halfIndex);
      charactersRight = characters.slice(halfIndex, totalCharacters);
    } else {
      const halfIndex = Math.floor(totalCharacters / 2);
      charactersLeft = characters.slice(0, halfIndex + 1);
      charactersRight = characters.slice(halfIndex + 1, totalCharacters);
    }
  
    return {
      charactersLeft,
      charactersRight,
    };
  }