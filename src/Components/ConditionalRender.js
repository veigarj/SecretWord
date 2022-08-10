import { useState } from "react";
import React from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Glauco");

  return (
    <div>
      <h3>Isso será exibido?</h3>
      {x && <p>Se x for true sim!</p>}
      {!x && <p>Agora x é Falso</p>}

      <h3>Render ternário:</h3>
      {name === "Joao" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
      <button onClick={() => setName("Joao")}>Clique aqui</button>
    </div>
  );
};

export default ConditionalRender;
