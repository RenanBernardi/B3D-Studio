from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

from database.base import Base


class Categoria(Base):

    __tablename__ = "categorias"

    id = Column(Integer, primary_key=True)

    nome = Column(String(100))