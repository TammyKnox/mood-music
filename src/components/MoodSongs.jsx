import React, { useState } from 'react';

function MoodSongs({ songs }) {
  const [currentSong, setCurrentSong] = useState(null);

  const playSong = (mp3) => {
    if (currentSong && currentSong !== mp3) {
      document.getElementById(currentSong).pause();
    }
    setCurrentSong(mp3);
    const audio = document.getElementById(mp3);
    audio.play();
  };

  return (
   <div className="mood-songs">
  <h3>Recommended Songs</h3>
  {songs.map((song, index) => (
    <div key={index} className="song-card">
      <img src={`music-covers/${song.cover}`} alt={song.title} />
      <div className="song-info">
        <p><strong>{song.title}</strong> by {song.artist}</p>
        <div className="controls">
          <button onClick={() => playSong(song.mp3)}><i class="fa-solid fa-play"></i></button>
          <button onClick={() => document.getElementById(song.mp3).pause()}><i class="fa-solid fa-pause"></i></button>
        </div>
      </div>
      <audio id={song.mp3} src={`music/${song.mp3}`} />
    </div>
  ))}
</div>
  );
}

export default MoodSongs;