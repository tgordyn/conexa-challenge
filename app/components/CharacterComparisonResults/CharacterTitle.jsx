import React from 'react'

const CharacterTitle = ({characterName, title})=> {
    return (
        <h2 className={`md:text-xl text-md font-semibold ${characterName ? 'text-Fern/green' : ''}`}>
          {characterName ? characterName : title}
        </h2>
      );
}

export default CharacterTitle