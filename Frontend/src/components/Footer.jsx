import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-coluna">

          <h3>B3D Studio</h3>

          <p>
            Impressão 3D profissional,
            produtos personalizados e
            projetos exclusivos.
          </p>

        </div>

        <div className="footer-coluna">

          <h4>Navegação</h4>

          <a href="/">Home</a>
          <a href="/catalogo">Catálogo</a>
          <a href="/carrinho">Carrinho</a>

        </div>

        <div className="footer-coluna">

          <h4>Contato</h4>

          <p>📱 WhatsApp - (49) 99905-9509 </p>

          <p>📞 Instagram - @B3DStudio6</p>

          <p>📧 b3dstudio@gmail.com</p>

          <p>📍 Concórdia - SC</p>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 B3D Studio - Todos os direitos reservados

      </div>

    </footer>
  );
}