import React from "react";

const CharacterCard = ({ character, onCardClick, selected }) => {
  const handleCharacterCardClick = () => {
    onCardClick(character.id);
  };
  const cardClassName = `bg-white rounded-lg md:p-3 p-2 shadow-lg m-2 flex text-Fern/green ${
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
        className="w-1/3 h-20 object-cover rounded-lg"
      />
      <div className="w-2/3 ml-4">
        <h3 className="text-xl font-semibold mb-2 truncate">
          {character.name}
        </h3>
        <p className="text-md truncate">
          <span className="font-semibold ">Status: </span>
          {character.status}
        </p>
        <p className="text-md truncate">
          <span className="font-semibold ">Species: </span>
          {character.species}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
