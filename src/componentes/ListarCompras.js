import React from "react";

const ListarCompras = ({ compras, setCompras }) => {
  const vaciarCarro = () => {
    setCompras([]);
  };

  const eliminarCurso = (id) => {
    const filtrar = compras.filter((el) => el.id !== id);

    const confirmar = window.confirm("Desea eliminar este curso del carro ?");

    if (confirmar) {
      setCompras([...filtrar]);
      return;
    }
  };

  return (
    <ul className="containerCompras">
      {compras.map((el) => (
        <li className="comprasFlex" key={el.name}>
          <img className="compras__img" alt={el.name} src={el.img}></img>
          <h2 className="compras__title">{el.name}</h2>
          <h2 className="compras__price">{`$ ${el.price}`}</h2>
          <i
            onClick={() => eliminarCurso(el.id)}
            className="comprasBorrar fas fa-times"
          ></i>
        </li>
      ))}
      <button onClick={vaciarCarro} className="comprasVaciar">
        Vaciar Carro
      </button>
    </ul>
  );
};

export default ListarCompras;
