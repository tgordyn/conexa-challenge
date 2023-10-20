import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard'


const CharacterList = ({characters, onCardClick, idLeft, idRight}) => {
  
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
      {characters && characters.map((character, index) => (
        <CharacterCard key={index} character={character} onCardClick={onCardClick} selected={idLeft == character.id || idRight == character.id}/>
      ))}
    </div>
  );
};

export default CharacterList;