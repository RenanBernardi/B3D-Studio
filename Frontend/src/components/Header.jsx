import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        B3D Studio
      </div>

      <nav>
        <a href="/">Home</a>
        <a href="/catalogo">Catálogo</a>
        <a href="/carrinho">Carrinho</a>
      </nav>
    </header>
  );
}