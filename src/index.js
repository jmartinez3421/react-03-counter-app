import React from "react";
import ReactDOM from "react-dom";
//import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";

import './index.css';

const divRoot = document.getElementById("root");

// const saludo = <h1>Hola Mundo</h1>;

//Al usar el método render el primer parámetro será lo que queremos renderizar, y el segundo la referencia de donde lo queremos hacer
// ReactDOM.render(saludo, divRoot);

//Para mandar un valor numérico como una propiedad debemos indicarlo entre {}
// ReactDOM.render(<PrimeraApp saludo='Hola, soy Goku' />, divRoot);
ReactDOM.render(<CounterApp value={5} />, divRoot);