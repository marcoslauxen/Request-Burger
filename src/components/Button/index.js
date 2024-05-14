import React from "react";
import "./style.css";

function Button({ onClick }) {
  return (
    <div>
      <button className="btn" onClick={onClick}>NOVO PEDIDO</button>
    </div>
  );
}
export default Button;
