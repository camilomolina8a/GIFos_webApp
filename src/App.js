import React from "react";
import { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import Filter from "./components/Filter";
import TrendingGifs from "./components/TrendingGifs";
import ResultsBySearch from "./components/ResultsBySearch";

function App() {
    const [modo, actualizarModo] = useState(true);
    const [busqueda, actualizarBusqueda] = useState("");
    const [buscarBtn, actualizarBuscarBtn] = useState(false);
    const [palabraEnviada, actualizarPalabraEnviada] = useState("");

    const manejarModo = () => {
        actualizarModo(!modo);
    };
    const manejarBusqueda = (e) => {
        actualizarBusqueda(e.target.value);
    };
    const cancelarBusqueda = () => {
        actualizarBusqueda("");
    };
    const manejarBuscarBtn = (e) => {
        e.preventDefault();
        actualizarBuscarBtn(true);
        actualizarBusqueda("")
        actualizarPalabraEnviada(busqueda);
    }

    return (
        <div className={modo ? "App-container-light" : "App-container-dark"}>
            <Header modo={modo} manejarModo={manejarModo} />

            <Filter
                modo={modo}
                busqueda={busqueda}
                manejarBusqueda={manejarBusqueda}
                cancelarBusqueda={cancelarBusqueda}
                manejarBuscarBtn = {manejarBuscarBtn}
            />

            <TrendingGifs modo={modo} buscarBtn={buscarBtn} busqueda={busqueda} />

            <ResultsBySearch
                modo={modo}
                busqueda={busqueda}
                buscarBtn={buscarBtn}
                palabraEnviada={palabraEnviada}
                actualizarBuscarBtn={actualizarBuscarBtn}
            />
        </div>
    );
}

export default App;
