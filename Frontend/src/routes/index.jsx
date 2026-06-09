import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Catalogo from "../pages/Catalogo";
import Produto from "../pages/Produto";
import Carrinho from "../pages/Carrinho";
import AdminProdutos from "../pages/AdminProdutos";
import NovoProduto from "../pages/NovoProduto";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/produto/:id" element={<Produto />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/admin/produtos" element={<AdminProdutos />} />
      <Route path="/admin/produtos/novo" element={<NovoProduto />} />
    </Routes>
  );
}