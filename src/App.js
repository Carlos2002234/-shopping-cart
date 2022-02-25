import React, { Component, Fragment, useState } from "react";
import Header from "./componentes/Header";
import Cabecero from "./componentes/Cabecero";
import Cursos from "./componentes/Cursos";
import "./App.css";
import estilos from "./estilos.css";
import ListarCompras from "./componentes/ListarCompras";

const App = () => {
  //estados
  const [compras, setCompras] = useState([]);
  const [mostrarC, setMostrarC] = useState(false);

  const [cursos, setCursos] = useState([
    {
      name: "HTML,CSS3,Javascript para Principiantes",
      price: 15,
      img: "/imgs/img1.jpg",
    },

    {
      name: "Curso de Comida Vegetariana",
      price: 15,
      img: "/imgs/img2.jpg",
    },
    {
      name: "Guitarra para principiantes",
      price: 15,
      img: "/imgs/guitarra.jpg",
    },
    {
      name: "Huerto en tu casa",
      price: 15,
      img: "/imgs/img3.jpg",
    },
    {
      name: "Decoración con productos de tu hogar",
      price: 15,
      img: "/imgs/img4.jpg",
    },
    {
      name: "Diseño Web para Principiantes",
      price: 15,
      img: "/imgs/img1.jpg",
    },
    {
      name: "Comida Mexicana para principiantes",
      price: 15,
      img: "/imgs/img2.jpg",
    },
    {
      name: "Estudio Musical en tu casa",
      price: 15,
      img: "/imgs/guitarra.jpg",
    },
    {
      name: "Cosecha tus propias frutas y verduras",
      price: 15,
      img: "/imgs/img3.jpg",
    },
    {
      name: "Prepara galletas caseras",
      price: 15,
      img: "/imgs/img4.jpg",
    },
    {
      name: "JavaScript Moderno con ES6",
      price: 15,
      img: "/imgs/img1.jpg",
    },
    {
      name: "100 Recetas de Comida Natural",
      price: 15,
      img: "/imgs/img2.jpg",
    },
  ]);

  return (
    <Fragment>
      <Header
        mostrarC={mostrarC}
        setMostrarC={setMostrarC}
        compras={compras}
        setCompras={setCompras}
      />

      <Cabecero mostrarC={mostrarC} compras={compras} setCompras={setCompras} />

      <Cursos compras={compras} setCompras={setCompras} cursos={cursos} />
    </Fragment>
  );
};

export default App;
