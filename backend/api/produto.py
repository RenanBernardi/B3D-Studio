from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from database.deps import get_db

from models.produto import Produto

from schemas.produto import (
    ProdutoCreate,
    ProdutoResponse
)

router = APIRouter(
    prefix="/produtos",
    tags=["Produtos"]
)


# Criar produto
@router.post("/", response_model=ProdutoResponse)
def criar_produto(
    produto: ProdutoCreate,
    db: Session = Depends(get_db)
):

    novo_produto = Produto(
        nome=produto.nome,
        descricao=produto.descricao,
        preco=produto.preco,
        imagem=produto.imagem,
        categoria_id=produto.categoria_id,
        destaque=produto.destaque,
        ativo=produto.ativo
    )

    db.add(novo_produto)

    db.commit()

    db.refresh(novo_produto)

    return novo_produto


# Listar produtos
@router.get("/", response_model=list[ProdutoResponse])
def listar_produtos(
    db: Session = Depends(get_db)
):

    return db.query(Produto).all()


# Buscar produto por ID
@router.get("/{id}", response_model=ProdutoResponse)
def buscar_produto(
    id: int,
    db: Session = Depends(get_db)
):

    produto = (
        db.query(Produto)
        .filter(Produto.id == id)
        .first()
    )

    if not produto:
        raise HTTPException(
            status_code=404,
            detail="Produto não encontrado"
        )

    return produto


# Atualizar produto
@router.put("/{id}", response_model=ProdutoResponse)
def atualizar_produto(
    id: int,
    produto_data: ProdutoCreate,
    db: Session = Depends(get_db)
):

    produto = (
        db.query(Produto)
        .filter(Produto.id == id)
        .first()
    )

    if not produto:
        raise HTTPException(
            status_code=404,
            detail="Produto não encontrado"
        )

    produto.nome = produto_data.nome
    produto.descricao = produto_data.descricao
    produto.preco = produto_data.preco
    produto.imagem = produto_data.imagem
    produto.categoria_id = produto_data.categoria_id
    produto.destaque = produto_data.destaque
    produto.ativo = produto_data.ativo

    db.commit()

    db.refresh(produto)

    return produto


# Excluir produto
@router.delete("/{id}")
def excluir_produto(
    id: int,
    db: Session = Depends(get_db)
):

    produto = (
        db.query(Produto)
        .filter(Produto.id == id)
        .first()
    )

    if not produto:
        raise HTTPException(
            status_code=404,
            detail="Produto não encontrado"
        )

    db.delete(produto)

    db.commit()

    return {
        "mensagem": "Produto removido com sucesso"
    }