from fastapi import HTTPException

from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from database.deps import get_db

from models.categoria import Categoria

from schemas.categoria import (
    CategoriaCreate,
    CategoriaResponse
)

router = APIRouter(
    prefix="/categorias",
    tags=["Categorias"]
)


# Criar categoria
@router.post("/", response_model=CategoriaResponse)
def criar_categoria(
    categoria: CategoriaCreate,
    db: Session = Depends(get_db)
):

    nova_categoria = Categoria(
        nome=categoria.nome
    )

    db.add(nova_categoria)

    db.commit()

    db.refresh(nova_categoria)

    return nova_categoria


# Listar categorias
@router.get("/", response_model=list[CategoriaResponse])
def listar_categorias(
    db: Session = Depends(get_db)
):

    categorias = db.query(Categoria).all()

    return categorias


# Buscar categoria por ID
@router.get("/{id}", response_model=CategoriaResponse)
def buscar_categoria(
    id: int,
    db: Session = Depends(get_db)
):

    categoria = (
        db.query(Categoria)
        .filter(Categoria.id == id)
        .first()
    )

    if not categoria:
        raise HTTPException(
            status_code=404,
            detail="Categoria não encontrada"
        )

    return categoria


# Atualizar categoria
@router.put("/{id}", response_model=CategoriaResponse)
def atualizar_categoria(
    id: int,
    categoria_data: CategoriaCreate,
    db: Session = Depends(get_db)
):

    categoria = (
        db.query(Categoria)
        .filter(Categoria.id == id)
        .first()
    )

    if not categoria:
        raise HTTPException(
            status_code=404,
            detail="Categoria não encontrada"
        )

    categoria.nome = categoria_data.nome

    db.commit()

    db.refresh(categoria)

    return categoria


# Excluir categoria
@router.delete("/{id}")
def excluir_categoria(
    id: int,
    db: Session = Depends(get_db)
):

    categoria = (
        db.query(Categoria)
        .filter(Categoria.id == id)
        .first()
    )

    if not categoria:
        raise HTTPException(
            status_code=404,
            detail="Categoria não encontrada"
        )

    db.delete(categoria)

    db.commit()

    return {
        "mensagem": "Categoria removida com sucesso"
    }