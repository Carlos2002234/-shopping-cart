import React, { Fragment } from "react";
import Footer from "./Footer";

const Cursos = ({ cursos, compras, setCompras }) => {
  const agregarCarro = (cursoActual) => {
    //calcular el total

    //validamos si ya esta el objeto
    const buscar = compras.find((el) => el.name === cursoActual.name);

    if (buscar) {
      return;
    }

    setCompras(
      compras.concat({
        ...cursoActual,
        cantidad: 1,
        id: Date.now(),
      })
    );
  };

  return (
    <Fragment>
      <section className="sectionC">
        <h2 className="titleCursos">Cursos En Línea</h2>

        <div className="cardsC center">
          {cursos.map((x) => (
            <div key={x.name} className="card">
              <img className="card__img" alt="curso" src={x.img} />
              <h2 className="card__title">{x.name}</h2>
              <h3 className="card__autor">Juan pablo</h3>

              <img
                className="card__img2"
                alt="curso"
                src="/imgs/estrellas.jpg"
              ></img>

              <h3 className="card__precio">{`$ ${x.price}`}</h3>

              <button onClick={() => agregarCarro(x)} className="card__btn">
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Cursos;
