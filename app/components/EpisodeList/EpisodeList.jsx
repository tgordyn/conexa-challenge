import React from 'react'

const EpisodeList = ({ episodes })=> {
    return (
      <div className='pt-6 font-quicksand'>
        {episodes && episodes.length > 0 ? (
          episodes.map((episode, index) => (
            <div key={index}>
              <span className='font-semibold'>{episode.id}</span> - {episode.name} - {episode.air_date}
            </div>
          ))
        ) : (
          <div className='italic'>No coincidences found!</div>
        )}
      </div>
    );
  }
  
  export default EpisodeList;