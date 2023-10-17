"use client";
import React, { useState } from "react";
import SongContainer from "../components/SongContainer";

const Playlist = () => {
  const [playlistData, setPlaylistData] = useState({
    name: "My Cool Playlist",
    songs: [
      {
        name: "Song 1",
        artist: "Artist 1",
        albumImage: "url-to-image-1",
      },
      {
        name: "Song 2",
        artist: "Artist 2",
        albumImage: "url-to-image-2",
      },
    ],
  });

  const addSong = () => {
    const newSong = {
      name: "New Song",
      artist: "New Artist",
      albumImage: "url-to-new-image",
    };

    setPlaylistData({
      ...playlistData,
      songs: [...playlistData.songs, newSong],
    });
  };

  return (
    <div className="playlist">
      <h2>{playlistData.name}</h2>

      {/* Button to add a new song */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-mono py-2 px-4 mb-4 mt-4 rounded-md"
        onClick={addSong}
      >
        Add Song
      </button>

      <div className="song-list">
        {playlistData.songs.map((song, index) => (
          <SongContainer key={index} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
