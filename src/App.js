import { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import Store from './Store';

function App() {

  const [gameActive, setGameActive ] = useState(false);
  const [time, setTime] = useState(0);


  return (
    <Store>
      <GameBoard gameActive={gameActive} setGameActive={setGameActive} time={time} setTime={setTime}/>
    </Store>
  );
}

export default App;
