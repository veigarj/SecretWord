import "./Game.css";

const Game = ({ verifyLetter }) => {
  return (
    <div clasName="game">
      <p className="point">
        <span>Pontuação: 000</span>
      </p>
      <h1>Adivinhe a Palavra:</h1>
      <h3 clasName="tip">
        Dica da Palavra: <span>Dica...</span>
      </h3>
      <div clasName="wordcontainer">
        <span clasName="letter">A</span>
        <span clasName="blankSquare"></span>
      </div>
      <div clasName="letterContainer">
        <p>Tente adivinhar uma letra da Palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar!</button>
        </form>
      </div>
      <div clasName="wrongLettersContainer">
        <p>Letras ja itilizadas:</p>
        <span>a, </span>
        <span>b, </span>
      </div>
      {/* <button onClick={verifyLetter}>Finalizar Jogo</button> */}
    </div>
  );
};

export default Game;
