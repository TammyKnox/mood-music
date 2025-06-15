import React from 'react';
import happy from '../assets/mood-images/happy.svg';
import sad from '../assets/mood-images/sad.svg';
import angry from '../assets/mood-images/angry.svg';
import indifferent from '../assets/mood-images/indifferent.svg';
import neutral from '../assets/mood-images/neutral.svg';

const moodImages = {
  happy,
  sad,
  angry,
  indifferent,
  neutral
};

function MoodDisplay({ selectedMood }) {
  const moodKey = selectedMood.toLowerCase();
  const image = moodImages[moodKey];

  return (
    <div className="mood-display">
      <h2>You're feeling: {selectedMood}</h2>
      <img src={image} alt={`${selectedMood} mood background`} />
    </div>
  );
}

export default MoodDisplay;