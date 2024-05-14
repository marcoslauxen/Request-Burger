import React, { useState } from "react";
import Imagem from "../../assets/burger-request.png";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Request = () => {
  const [burger, setBurger] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleValueBurger = (event) => {
    setBurger(event.target.value);
  };

  const handleValueName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    if (burger.trim() !== "" && name.trim() !== "") {
      event.preventDefault();
      const existingPedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
      const novoPedido = { burger, name };
      const updatedPedidos = [...existingPedidos, novoPedido];
      localStorage.setItem("pedidos", JSON.stringify(updatedPedidos));
      navigate("/acompanhar");
      setBurger("");
      setName("");
    } else {
      toast.error("Preencha todos os campos!");
      event.preventDefault();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="w-full max-w-md p-8 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">
        <ToastContainer />
        <img
          className="w-56 mx-auto mb-8 rounded-lg"
          src={Imagem}
          alt="burger request"
        />
        <h1 className="text-3xl font-bold text-center mb-6">Faça seu pedido</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block mb-2 text-lg font-semibold"
              htmlFor="pedido"
            >
              Pedido
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg text-lg bg-gray-700 bg-opacity-50 focus:outline-none focus:bg-opacity-75"
              type="text"
              id="pedido"
              placeholder="Ex: 1 Coca-Cola, 1 X-Salada"
              autoComplete="off"
              value={burger}
              onChange={handleValueBurger}
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-semibold" htmlFor="nome">
              Nome do cliente
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg text-lg bg-gray-700 bg-opacity-50 focus:outline-none focus:bg-opacity-75"
              type="text"
              id="nome"
              placeholder="Ex: Steve Jobs"
              autoComplete="off"
              value={name}
              onChange={handleValueName}
            />
          </div>
          <Button text="Enviar Pedido" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Request;
