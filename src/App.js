import logo from './logo.svg';
import './App.css';
import GameBoard from './components/GameBoard';
import Store from './Store';
import StopWatch from './components/Timer';

function App() {

  return (
    <Store>

      <StopWatch />
      <GameBoard />


    </Store>
  );
}

export default App;
