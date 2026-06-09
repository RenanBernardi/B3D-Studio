import { useEffect, useState } from "react";

export default function NovoProduto() {

const [categorias, setCategorias] = useState([]);

const [nome, setNome] = useState("");
const [descricao, setDescricao] = useState("");
const [preco, setPreco] = useState("");
const [categoriaId, setCategoriaId] = useState("");

useEffect(() => {


async function carregarCategorias() {

  const response = await fetch(
    "http://localhost:8000/categorias"
  );

  const data = await response.json();

  setCategorias(data);

  if (data.length > 0) {
    setCategoriaId(data[0].id);
  }

}

carregarCategorias();


}, []);

async function salvarProduto() {


const produto = {
  nome,
  descricao,
  preco: parseFloat(preco),
  imagem: "",
  categoria_id: parseInt(categoriaId),
  destaque: true,
  ativo: true
};

const response = await fetch(
  "http://localhost:8000/produtos",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(produto)
  }
);

if (response.ok) {
  alert("Produto cadastrado com sucesso!");
} else {
  alert("Erro ao cadastrar produto.");
}


}

return (


<div style={{ padding: "40px" }}>

  <h1>Novo Produto</h1>

  <input
    placeholder="Nome"
    value={nome}
    onChange={(e) => setNome(e.target.value)}
  />

  <br /><br />

  <textarea
    placeholder="Descrição"
    value={descricao}
    onChange={(e) => setDescricao(e.target.value)}
  />

  <br /><br />

  <input
    placeholder="Preço"
    value={preco}
    onChange={(e) => setPreco(e.target.value)}
  />

  <br /><br />

  <select
    value={categoriaId}
    onChange={(e) => setCategoriaId(e.target.value)}
  >
    {categorias.map(cat => (
      <option
        key={cat.id}
        value={cat.id}
      >
        {cat.nome}
      </option>
    ))}
  </select>

  <br /><br />

  <button onClick={salvarProduto}>
    Salvar Produto
  </button>

</div>


);
}
