import "./Banner.css";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="banner">

      <div className="banner-conteudo">

        <span className="banner-tag">
          🚀 Impressão 3D Profissional
        </span>

        <h1>
          Transformamos ideias em
          <br />
          objetos reais
        </h1>

        <p>
          Produtos exclusivos, decoração, acessórios gamers,
          peças personalizadas e projetos sob medida.
        </p>

        <Link
          to="/catalogo"
          className="btn-banner"
        >
          Ver Catálogo
        </Link>

      </div>

    </section>
  );
}