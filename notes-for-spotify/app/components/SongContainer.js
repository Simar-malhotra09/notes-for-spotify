import React from "react";

const SongContainer = ({ song }) => {
  return (
    <div className="song-container">
      <img src={song.albumImage} alt={song.name} className="album-cover" />
      <div className="song-details">
        <h3>{song.name}</h3>
        <p>{song.artist}</p>
      </div>
      <div className="notes">
        <textarea placeholder="Add notes..." />
      </div>
    </div>
  );
};

export default SongContainer;
