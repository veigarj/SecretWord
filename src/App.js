// Style / CSS
import "./styles.css";

// React
import { useCallback, useState, useEffect } from "react";

// Dados
import { wordsList } from "./data/words";

// Components
import StartScreen from "./component/StartScreen";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
];

export default function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen />}
      {gameStage === "game" && <StartScreen />}
      <StartScreen />
    </div>
  );
}
