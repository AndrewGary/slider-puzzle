import { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import Store from './Store';

function App() {

  const [gameActive, setGameActive ] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  const handleStart = () => {
    
  }

  return (
    <Store>
      <GameBoard gameActive={gameActive} setGameActive={setGameActive}/>
    </Store>
  );
}

export default App;
