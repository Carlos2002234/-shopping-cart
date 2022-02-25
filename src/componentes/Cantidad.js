import React from "react";

const Cantidad = ({ compras }) => {
  let total = 0;
  const calcularTotal = () => {
    compras.forEach((element) => {
      total += element.cantidad;
    });
  };

  calcularTotal();

  return (
    <div className="cantidad">
      <p className="cantidad__p">{total >= 9 ? "9+" : total}</p>
    </div>
  );
};

export default Cantidad;
