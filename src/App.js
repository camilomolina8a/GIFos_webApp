import React from "react";
import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";

function App() {
    const [modo, actualizarModo] = useState(true);
    // const [busqueda,actualizarBusqueda] = useState("");

    const manejarModo = () => {
        actualizarModo(!modo);
    };

    return (
        <div className={modo ? "App-container-light" : "App-container-dark"}>
            <Header modo={modo} manejarModo={manejarModo} />

            <Filter modo={modo}/>
        </div>
    );
}

export default App;
