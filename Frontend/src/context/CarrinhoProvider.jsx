import { useState } from "react";
import { CarrinhoContext } from "./CarrinhoContext";

export default function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);

function adicionarProduto(produto) {
  console.log("Adicionando produto:", produto);
    const existe = itens.find(item => item.id === produto.id);

   

    if (existe) {
      setItens(itens.map(item =>
        item.id === produto.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      ));
    } else {
      setItens([...itens, { ...produto, quantidade: 1 }]);
    }
  }
function removerProduto(id) {

  const produto = itens.find(
    item => item.id === id
  );

  if (!produto) return;

  if (produto.quantidade > 1) {

    setItens(
      itens.map(item =>
        item.id === id
          ? {
              ...item,
              quantidade: item.quantidade - 1
            }
          : item
      )
    );

  } else {

    setItens(
      itens.filter(item => item.id !== id)
    );

  }
}  
  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        setItens,
        adicionarProduto,
        removerProduto
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}