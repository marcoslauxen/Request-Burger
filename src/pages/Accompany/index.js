import React, { useEffect, useState } from "react";
import Imagem from "../../assets/burger-accompany.png";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Accompany = () => {
  const [pedidos, setPedidos] = useState([]);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const existingPedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
    setPedidos(existingPedidos);
  }, []);

  const handleDeletePedido = (index) => {
    const updatedPedidos = [...pedidos];
    updatedPedidos.splice(index, 1);
    setPedidos(updatedPedidos);
    localStorage.setItem("pedidos", JSON.stringify(updatedPedidos));
    toast.success("Pedido deletado com sucesso!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="w-full max-w-md p-8 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">
        <ToastContainer />
        <img
          className="w-44 mx-auto mb-4 rounded-lg"
          src={Imagem}
          alt="burger accompany"
        />
        <h1 className="text-3xl font-bold text-center mt-6 mb-6">Pedidos</h1>
        <ul>
          {pedidos.map((pedido, index) => (
            <li
              className="flex justify-between items-center mb-4 bg-gray-700 bg-opacity-50 px-4 py-2 rounded-lg"
              key={index}
            >
              <div>
                {pedido.burger}
                <br />
                {pedido.name}
              </div>
              <FontAwesomeIcon
                icon={faTrash}
                className="cursor-pointer"
                onClick={() => handleDeletePedido(index)}
              />
            </li>
          ))}
        </ul>
        <Button text="Voltar" onClick={handleBack} />
      </div>
    </div>
  );
};

export default Accompany;
