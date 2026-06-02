from database.base import Base
from database.database import engine

from models.categoria import Categoria
from models.produto import Produto


def create_tables():
    Base.metadata.create_all(bind=engine)


if __name__ == "__main__":
    create_tables()
    print("Tabelas criadas com sucesso.")