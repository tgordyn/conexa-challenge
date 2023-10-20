import React from 'react';
import EpisodeList from "../../components/EpisodeList/EpisodeList";

const CharacterComparisonResults = ({episodes})=> {
  return (
    <div className=" w-full p-4 flex flex-grow flex-col md:flex-row bg-Tea/green text-Gunmetal/2 text-center shadow-lg ">
        <div className="w-full md:w-1/3 p-4 ">
          <h2 className="md:text-xl text-md font-semibold ">
            Character #1 - Only Episodes
          </h2>
          <EpisodeList episodes={episodes.episodesWithCharacter1} />
        </div>
        <div className="w-full md:w-1/3 p-4  ">
          <h2 className="md:text-xl text-md font-semibold">
            Character #1 & #2 - Shared Episodes
          </h2>
          <EpisodeList episodes={episodes.episodesWithBothCharacters} />
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h2 className="md:text-xl text-md font-semibold">
            Character #2 - Only Episodes
          </h2>
          <EpisodeList episodes={episodes.episodesWithCharacter2} />
        </div>
      </div>
  )
}

export default CharacterComparisonResults