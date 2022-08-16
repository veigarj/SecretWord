import "./Game.css";

const Game = ({ verifyLatter }) => {
  return (
    <div>
      <h1>Game 1</h1>
      <button onClick={verifyLatter}>Finalizar Jogo</button>
    </div>
  );
};

export default Game;
