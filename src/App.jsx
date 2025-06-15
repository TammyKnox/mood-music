import { useState } from 'react'
import MoodSelection from './components/MoodSelection';
import MoodDisplay from './components/MoodDisplay';
import MoodSongs from './components/MoodSongs';
import songData from './data/songData.json';
import './App.css'

function App() {
  const [selectedMood, setMood] = useState(null);
  const songsForMood = songData[selectedMood];


  return (
    <>
      <div className={`container ${selectedMood ? selectedMood.toLowerCase() : 'neutral'}`}>
        {
          !selectedMood ? (
            <MoodSelection setMood={setMood}></MoodSelection>
          ):(
            <>
              <MoodDisplay selectedMood={selectedMood}></MoodDisplay>
              <MoodSongs songs={songsForMood}></MoodSongs>
              <button onClick={() => setMood(null)}>Change My Mood</button>
            </>
          )
        }
      </div>
    </>
  );
}

export default App
