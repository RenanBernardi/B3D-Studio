import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";
import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {

  const { itens } = useContext(CarrinhoContext);

  const quantidadeItens = itens.reduce(
    (acc, item) => acc + item.quantidade,
    0
  );

  return (
    <header className="header">

      <div className="logo">
        <img src={logo} alt="B3D Studio" />
      </div>

      <nav>
        <Link to="/">Home</Link>

        <Link to="/catalogo">
          Catálogo
        </Link>

        <Link to="/carrinho" className="carrinho-link">

          🛒 Carrinho

          {quantidadeItens > 0 && (
            <span className="badge-carrinho">
              {quantidadeItens}
            </span>
          )}

        </Link>

      </nav>

    </header>
  );
}