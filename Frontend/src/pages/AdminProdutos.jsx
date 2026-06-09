import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AdminProdutos() {
const [produtos, setProdutos] = useState([]);
const navigate = useNavigate();

async function carregarProdutos() {
const response = await fetch(
"http://localhost:8000/produtos"
);


const data = await response.json();

setProdutos(data);


}

async function excluirProduto(id) {
const confirmar = window.confirm(
"Deseja realmente excluir este produto?"
);

if (!confirmar) {
  return;
}

await fetch(
  `http://localhost:8000/produtos/${id}`,
  {
    method: "DELETE",
  }
);

carregarProdutos();


}

useEffect(() => {
  const carregar = async () => {
    const response = await fetch(
      "http://localhost:8000/produtos"
    );

    const data = await response.json();

    setProdutos(data);
  };

  carregar();
}, []);

return ( <div className="admin-produtos"> <div className="topo-admin"> <h1>Produtos</h1>


    
    <button
  onClick={() =>
    navigate("/admin/produtos/novo")
  }
>
  Novo Produto
</button>
  </div>

  {produtos.map((produto) => (
    <div
      className="produto-admin"
      key={produto.id}
    >
      <div>
        <h3>{produto.nome}</h3>

        <p>{produto.descricao}</p>

        <strong>
          R$ {produto.preco}
        </strong>
      </div>

      <div>
        <button>
          Editar
        </button>

        <button
          onClick={() =>
            excluirProduto(produto.id)
          }
        >
          Excluir
        </button>
      </div>
    </div>
  ))}
</div>

);
}
