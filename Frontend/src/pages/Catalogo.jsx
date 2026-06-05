import { useEffect, useState, useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { listarProdutos } from "../services/produtos";
import { CarrinhoContext } from "../context/CarrinhoContext";

import "./Catalogo.css";

export default function Catalogo() {

  const [produtos, setProdutos] = useState([]);

  const { adicionarProduto } =
    useContext(CarrinhoContext);

  useEffect(() => {

    async function carregarProdutos() {

      const dados = await listarProdutos();

      setProdutos(dados);
    }

    carregarProdutos();

  }, []);

  return (
    <>
      <Header />

      <div className="catalogo">

        <h1>Catálogo de Produtos</h1>

        <div className="produtos-grid">

          {produtos.map(produto => (

            <div
              className="card-produto"
              key={produto.id}
            >

              {produto.imagem ? (

                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="imagem-produto"
                />

              ) : (

                <div className="imagem-produto">
                  📦
                </div>

              )}

              <h3>{produto.nome}</h3>

              <p>{produto.descricao}</p>

              <span className="preco">
                R$ {produto.preco.toFixed(2)}
              </span>

              <button
                className="btn-adicionar"
                onClick={() =>
                  adicionarProduto(produto)
                }
              >
                Adicionar ao Carrinho
              </button>

            </div>

          ))}

        </div>

      </div>
      <Footer />
    </>
  );
}