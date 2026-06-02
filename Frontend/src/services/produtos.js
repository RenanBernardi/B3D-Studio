import { api } from "./api";

export async function listarProdutos() {
    const response = await api.get("/produtos");
    return response.data;
}