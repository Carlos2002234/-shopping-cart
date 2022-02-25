import React, { Fragment } from "react";

const Cabecero = () => {
  return (
    <Fragment>
      <div className="cabecero ">
        <h2 className="cabecero__title ">Aprende algo nuevo</h2>
        <h6 className="cabecero__title2 ">Todos los cursos a $15</h6>
        <input
          placeholder="¿Que te gustaria aprender?"
          className="cabecero__input "
        ></input>
      </div>

      <div className="cabecero2">
        <p className="cabecero2__p">
          20,000 Cursos en línea <br />
          Explora los temas más recientes
        </p>

        <p className="cabecero2__p">
          Instructores expertos <br />
          Aprende con distintos estilos
        </p>

        <p className="cabecero2__p">
          Acceso de por vida <br />
          Aprende a tu ritmo
        </p>
      </div>
    </Fragment>
  );
};

export default Cabecero;
