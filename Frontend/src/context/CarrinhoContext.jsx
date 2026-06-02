import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {

  const [itens, setItens] = useState([]);

  function adicionarProduto(produto) {

    const existe = itens.find(
      item => item.id === produto.id
    );

    if (existe) {

      setItens(
        itens.map(item =>
          item.id === produto.id
            ? {
                ...item,
                quantidade: item.quantidade + 1
              }
            : item
        )
      );

      return;
    }

    setItens([
      ...itens,
      {
        ...produto,
        quantidade: 1
      }
    ]);
  }

  function removerProduto(id) {

    setItens(
      itens.filter(item => item.id !== id)
    );
  }

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarProduto,
        removerProduto
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}