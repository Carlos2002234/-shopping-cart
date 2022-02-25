import React, { useState } from "react";

const Cards = ({ productos, compras, setCompras }) => {
  //funciones

  const agregarC = (producto) => {
    const buscar = compras.find((el) => el.name === producto.name);
    //const buscar = carro.find((el) => el.name === producto.name);

    if (buscar) {
      console.log("repetido !!");
      const newCarro = compras.map((el) =>
        el.name === producto.name ? { ...el, cantidad: el.cantidad + 1 } : el
      );
    
      /*return setCompras({compras:newCarro});*/
      return setCompras([...newCarro]);
    }

  
    setCompras(
      compras.concat({
        ...producto,
        cantidad: 1,
      })
    );


    //sumar cantidades

    //copia de producto y el atributo de cantidad
    //console.log(buscar)
  };


 

  return (
    <div className="flexC">
      {productos.map((x) => (
        <div key={x.name} className="card">
          <img alt={x.img} src={x.img}></img>
          <h2 className="name">{x.name}</h2>
          <h3 className="price">{x.price}</h3>
          <button onClick={() => agregarC(x)} className="btnC">
            Agregar
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
