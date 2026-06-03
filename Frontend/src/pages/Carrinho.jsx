import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";

export default function Carrinho() {

  const {itens, removerProduto} = useContext(CarrinhoContext);
    console.log("Itens no carrinho:", itens);

  const total = itens.reduce(
    (acc, item) =>
      acc + (item.preco * item.quantidade),
    0
  );

  function enviarWhatsApp() {

    if (itens.length === 0) {
      alert("Seu carrinho está vazio.");
      return;
    }

    const numero = "5549999059509"; // ALTERE PARA O SEU NÚMERO

    let mensagem = "Olá B3D Studio!\n\n";

    mensagem += "Gostaria de solicitar:\n\n";

    itens.forEach(item => {

      mensagem +=
        `• ${item.nome} (${item.quantidade}x) - R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;

    });

    mensagem += "\n";

    mensagem += `Total: R$ ${total.toFixed(2)}`;

    const url =
      `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  }

  return (

    <div style={{ padding: "30px" }}>

      <h1>Meu Carrinho</h1>

      {itens.length === 0 ? (

        <p>Seu carrinho está vazio.</p>

      ) : (

        <>
          {itens.map(item => (

            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "8px"
              }}
            >

              <h3>{item.nome}</h3>

              <p>
                Quantidade: {item.quantidade}
              </p>

              <p>
                Preço Unitário: R$ {item.preco.toFixed(2)}
              </p>

              <p>
                Subtotal: R$ {(item.preco * item.quantidade).toFixed(2)}
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
            Total: R$ {total.toFixed(2)}
          </h2>

          <button
            onClick={enviarWhatsApp}
            style={{
              padding: "12px 20px",
              cursor: "pointer"
            }}
          >
            Finalizar Compra via WhatsApp
          </button>

        </>

      )}

    </div>

  );
}