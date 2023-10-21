import React from "react";
import EpisodeList from "../EpisodeList/EpisodeList";
import CharacterTitle from "./CharacterTitle";

const CharacterComparisonResults = ({ episodes }) => {
  return (
    <div className=" w-full p-4 flex flex-grow flex-col md:flex-row bg-Tea/green text-Gunmetal/2 text-center shadow-lg ">
      <div className="w-full md:w-1/3 p-4 ">
        <CharacterTitle
          characterName={episodes.characterName1}
          title="Character #1 - Only Episodes"
        />
        <EpisodeList episodes={episodes.episodesWithCharacter1} />
      </div>
      <div className="w-full md:w-1/3 p-4  ">
        <CharacterTitle
          characterName={null}
          title="Character #1 & #2 - Shared Episodes"
        />
        <EpisodeList episodes={episodes.episodesWithBothCharacters} />
      </div>
      <div className="w-full md:w-1/3 p-4">
        <CharacterTitle
          characterName={episodes.characterName2}
          title="Character #2 - Only Episodes"
        />
        <EpisodeList episodes={episodes.episodesWithCharacter2} />
      </div>
    </div>
  );
};

export default CharacterComparisonResults;
