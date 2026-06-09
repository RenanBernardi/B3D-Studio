import { useEffect, useState } from "react";
import { listarProdutos } from "../services/produtos";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import {useContext} from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";
import "./Home.css";

export default function Home() {

  const [produtos, setProdutos] = useState([]);
  const [categoriaSelecionada,setCategoriaSelecionada] = useState("null");
  const { adicionarProduto } = useContext(CarrinhoContext);

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

      <Banner />
<section className="categorias-home">

  <h2>Categorias</h2>

  <div className="categorias-grid">

    <div className="categoria-card"
      onclick={() => setCategoriaSelecionada(1)}
      >
      🎮
      <span>Games</span>
    </div>

    <div className="categoria-card"
      onclick={() => setCategoriaSelecionada(2)}
      >
      🏠
      <span>Decoração</span>
    </div>

    <div className="categoria-card"
      onclick={() => setCategoriaSelecionada(3)}
      >
      🧰
      <span>Organização</span>
    </div>

    <div className="categoria-card"
      onclick={() => setCategoriaSelecionada(4)}
      >
      ✨
      <span>Personalizados</span>
    </div>
    

  </div>

</section>
      <div className="home">

        <h2>Produtos em Destaque</h2>

        <div className="produtos-grid">

          {produtos.filter(produto => {
            if (categoriaSelecionada === null) {
              return true;
            }
            return produto.categoriaId === categoriaSelecionada;
          }).map(produto => (

            <div className="card-produto" key={produto.id}>
                <button
                  className="btn-adicionar"
                  onClick={() => adicionarProduto(produto)}
                >
                  Adicionar ao Carrinho
                </button>
                {produto.imagem ? (
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="imagem-produto"
              />
                ):(
                  <div className="imagem-produto">
                    📦
                  </div>
                )}
              <h3>{produto.nome}</h3>

              <p>{produto.descricao}</p>

              <span className="preco">
                R$ {produto.preco.toFixed(2)}
              </span>

            </div>

          ))}

        </div>

      </div>
      <Footer />
    </>
  );
}