import "./Game.css";

const Game = ({ verifyLetter }) => {
  return (
    <div>
      <h1>Game 1</h1>
      <button onClick={verifyLetter}>Finalizar Jogo</button>
    </div>
  );
};

export default Game;
