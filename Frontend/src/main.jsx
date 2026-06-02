import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { CarrinhoProvider } from "./context/CarrinhoContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <CarrinhoProvider>

    <App />

  </CarrinhoProvider>

);