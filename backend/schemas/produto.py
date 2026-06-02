from pydantic import BaseModel


class ProdutoCreate(BaseModel):
    nome: str
    descricao: str
    preco: float
    imagem: str
    categoria_id: int
    destaque: bool = False
    ativo: bool = True


class ProdutoResponse(BaseModel):
    id: int
    nome: str
    descricao: str
    preco: float
    imagem: str
    categoria_id: int
    destaque: bool
    ativo: bool

    class Config:
        from_attributes = True