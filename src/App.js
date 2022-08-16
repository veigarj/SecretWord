// Style / CSS
import "./styles.css";

// React
import { useCallback, useState, useEffect } from "react";

// Dados
import { wordsList } from "./data/words";

// Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
];

export default function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  // Start the Secret Words
  const startGame = () => {
    setGameStage(stages[1].name);
  };

  // process the latter input
  const verifyLatter = () => {
    setGameStage(stages[2].name);
  };

  // restarts the Game
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLatter={verifyLatter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}
