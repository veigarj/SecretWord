import "./game.css";

const Game = ({
  verifyLetter,
  pickedWords,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score
}) => {
  return (
    <div clasName="game">
      <p className="point">
        <span>Pontuação: {score} </span>
      </p>
      <h1>Adivinhe a Palavra:</h1>
      <h3 clasName="tip">
        Dica da Palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Voce ainda tem {guesses} tentativa(s).</p>
      <div clasName="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} clasName="letter">
              {letter}
            </span>
          ) : (
            <span key={i} clasName="blankSquare"></span>
          )
        )}
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
