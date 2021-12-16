import React from "react";
import { useState } from "react";

import "./App.css";
import Header from "./components/Header";

function App() {
    const [modo, actualizarModo] = useState(true);

    const manejarModo = () => {
        actualizarModo(!modo);
    };

    return (
        <div className={modo ? "App-container-light" : "App-container-dark"}>
            <Header modo={modo} manejarModo={manejarModo} />
        </div>
    );
}

export default App;
