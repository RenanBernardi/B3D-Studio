import { useContext } from "react";

import { CarrinhoContext }
from "../context/CarrinhoContext";

export default function Carrinho() {

  const {
    itens,
    removerProduto
  } = useContext(CarrinhoContext);

  const total = itens.reduce(
    (acc, item) =>
      acc + (item.preco * item.quantidade),
    0
  );

  return (

    <div style={{ padding: "30px" }}>

      <h1>Meu Carrinho</h1>

      {itens.map(item => (

        <div key={item.id}>

          <h3>{item.nome}</h3>

          <p>
            Quantidade:
            {item.quantidade}
          </p>

          <p>
            R$ {item.preco}
          </p>

          <button
            onClick={() =>
              removerProduto(item.id)
            }
          >
            Remover
          </button>

        </div>

      ))}

      <h2>
        Total:
        R$ {total.toFixed(2)}
      </h2>

    </div>

  );
}