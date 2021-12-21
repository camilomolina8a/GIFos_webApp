import React from "react";
import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";

function App() {
    const [modo, actualizarModo] = useState(true);
    const [busqueda, actualizarBusqueda] = useState("");

    const manejarModo = () => {
        actualizarModo(!modo);
    };
    const manejarBusqueda = (e) => {
        actualizarBusqueda(e.target.value)
    }
    const cancelarBusqueda = () => {
        actualizarBusqueda("")
    }

    return (
        <div className={modo ? "App-container-light" : "App-container-dark"}>
            <Header modo={modo} manejarModo={manejarModo} />

            <Filter
                modo={modo}
                busqueda={busqueda}
                manejarBusqueda ={manejarBusqueda}
                cancelarBusqueda= {cancelarBusqueda}
            />
        </div>
    );
}

export default App;
