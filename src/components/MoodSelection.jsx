import React from 'react';
import neutral from '../assets/mood-images/neutral.svg';

function MoodSelection({ setMood }) {
  const moods = ['Happy', 'Sad', 'Angry', 'Indifferent'];

  return (
    <div className="mood-selection">
      <h1>How are you feeling today?</h1>
      <p>Get some great music recommendations based on your mood by selecting your mood below!</p>
      <img src={neutral} className="neutral-mood"/>

      <div className="mood-tags">
        {moods.map((tag) => (
          <button key={tag} onClick={() => setMood(tag)}>
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoodSelection;