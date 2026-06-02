from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Numeric
from sqlalchemy import Text
from sqlalchemy import Boolean
from sqlalchemy import ForeignKey

from database.base import Base


class Produto(Base):

    __tablename__ = "produtos"

    id = Column(Integer, primary_key=True)

    nome = Column(String(200), nullable=False)

    descricao = Column(Text)

    preco = Column(Numeric(10, 2))

    imagem = Column(String(500))

    categoria_id = Column(
        Integer,
        ForeignKey("categorias.id")
    )

    destaque = Column(Boolean, default=False)

    ativo = Column(Boolean, default=True)