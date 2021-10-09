import { useState } from "react";

export default function Pai() {
  const [qtd, setQtd] = useState(0);

  function contar() {
    setQtd(qtd + 0);
  }

  function resetar(x) {
    setQtd(x);
  }

  return (
      <div className="container">
        <h1> Contador </h1>
        <div> {qtd} </div>
        <button onClick={contar}> Contar </button>

        <Filho onReset={resetar} />
      </div>
  );
}

function Filho(props) {
  function resetar() {
    props.onReset(0);
  }

  return (
    <div className="container">
      <button onClick={resetar}> Resetar </button>
    </div>
  );
}
