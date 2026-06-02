from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from api.categorias import router as categorias_router
from api.produto import router as produtos_router

app = FastAPI(
    title="B3D Studio API"
)

app.mount(
    "/uploads",
    StaticFiles(directory="uploads"),
    name="uploads"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(categorias_router)
app.include_router(produtos_router)

@app.get("/")
def home():
    return {
        "empresa": "B3D Studio",
        "status": "online"
    }