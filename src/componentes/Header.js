import React, { Fragment } from "react";
import Cantidad from "./Cantidad";
import ListarCompras from "./ListarCompras";

const Header = ({ compras, mostrarC, setMostrarC, setCompras }) => {
  const verCompras = () => {
    if (compras.length > 0) {
      setMostrarC(!mostrarC);
    }
    return;
  };

  return (
    <Fragment>
      <div className="headerC center ">
        <h1 className="headerC__title">UNIVERSIDAD</h1>
        <div className="compras">
          <i onClick={verCompras} className="icon fas fa-shopping-cart">
            <Cantidad compras={compras} />
          </i>

          {mostrarC ? (
            <ListarCompras setCompras={setCompras} compras={compras} />
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

export default Header;

/*
  {mostrarC ? <ListarCompras setCompras={setCompras} compras={compras} /> : null}
*/
