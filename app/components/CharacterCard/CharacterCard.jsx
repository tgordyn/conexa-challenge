import React from "react";
import 'animate.css/animate.min.css';

const CharacterCard = ({ character, onCardClick, selected }) => {
  const handleCharacterCardClick = () => {
    onCardClick(character.id);
  };
  const cardClassName = `animate__animated animate__fadeInUp bg-white rounded-lg md:p-2 p-2 shadow-lg m-1 flex text-Fern/green ${
    selected ? "border-4 border-Fern/green" : ""
  }`;

  return (
    <div
      className={cardClassName}
      onClick={handleCharacterCardClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src={character.image}
        alt={character.name}
        className="w-1/3 h-16 object-cover rounded-lg"
      />
      <div
        className="w-2/3 ml-4"
      >
        <h3 className="text-md font-semibold mb-1 truncate">
          {character.name}
        </h3>
        <p className="text-sm truncate">
          <span className="font-semibold ">Status: </span>
          <span>{character.status}</span>
        </p>
        <p className="text-sm truncate">
          <span className="font-semibold ">Species: </span>
          {character.species}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
