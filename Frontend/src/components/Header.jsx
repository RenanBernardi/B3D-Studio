import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        B3D Studio
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/carrinho">Carrinho</Link>
      </nav>
    </header>
  );
}