import { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import Store from './Store';
import Photo2 from './components/Photo2';

function App() {

  const [gameActive, setGameActive ] = useState(false);
  const [time, setTime] = useState(0);


  return (
    <Store>
      {/* <Photo /> */}
      <Photo2 />
      <GameBoard gameActive={gameActive} setGameActive={setGameActive} time={time} setTime={setTime}/>
    </Store>
  );
}

export default App;
