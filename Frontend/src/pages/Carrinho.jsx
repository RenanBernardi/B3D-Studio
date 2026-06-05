import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { CarrinhoContext }
from "../context/CarrinhoContext";

import "./Carrinho.css";

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

  function enviarWhatsApp() {

    let mensagem =
      "Olá! Gostaria de solicitar:\n\n";

    itens.forEach(item => {

      mensagem +=
        `• ${item.nome}\n`;

      mensagem +=
        `Qtd: ${item.quantidade}\n`;

      mensagem +=
        `Valor: R$ ${item.preco}\n\n`;

    });

    mensagem +=
      `Total: R$ ${total.toFixed(2)}`;

    const telefone =
      "5541999999999";

    window.open(
      `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`,
      "_blank"
    );
  }

  return (
    <>
      <Header />

      <div className="carrinho-container">

        <h1>Meu Carrinho</h1>

        {itens.length === 0 ? (

          <div className="carrinho-vazio">
            Seu carrinho está vazio.
          </div>

        ) : (

          <>
            <div className="carrinho-grid">

              {itens.map(item => (

                <div
                  className="item-carrinho"
                  key={item.id}
                >
                  <div className="item-esquerda">
                    <img
                      src={item.imagem}
                      alt={item.nome}
                      className="imagem-item"
                    />
                  </div>
                  <div className="item-imagem-placeholder">
                    📦
                  </div>

                  <div className="item-info">

                    <h3>{item.nome}</h3>

                    <p>
                      Quantidade:
                      {" "}
                      {item.quantidade}
                    </p>

                    <span className="item-preco">
                      R$ {item.preco.toFixed(2)}
                    </span>

                  </div>

                  <button
                    className="btn-remover"
                    onClick={() =>
                      removerProduto(item.id)
                    }
                  >
                    Remover
                  </button>

                </div>

              ))}

            </div>

            <div className="total-box">

              <h2>
                Total:
                {" "}
                R$ {total.toFixed(2)}
              </h2>

              <button
                className="btn-whatsapp"
                onClick={enviarWhatsApp}
              >
                Finalizar via WhatsApp
              </button>

            </div>

          </>
        )}

      </div>
      <Footer />
      </>
  );
}