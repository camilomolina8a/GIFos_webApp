import React from "react";
import { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import Filter from "./components/Filter";
import TrendingGifs from "./components/TrendingGifs";

//import Loader from "./components/Loader";

//import { getData, trending_key} from "./services";

function App() {
    const [modo, actualizarModo] = useState(true);
    const [busqueda, actualizarBusqueda] = useState("");

    const manejarModo = () => {
        actualizarModo(!modo);
    };
    const manejarBusqueda = (e) => {
        actualizarBusqueda(e.target.value);
    };
    const cancelarBusqueda = () => {
        actualizarBusqueda("");
    };
    //############################################
    // useEffect(() => {

    //     const obtenerDataTrend = async (key) => {
    //         try {
    //             const data = await getData(key);
    //             actualizarDataTrend(data.data);

    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //     obtenerDataTrend(trending_key)

    // },[])
    //#########################################

    return (
        <div className={modo ? "App-container-light" : "App-container-dark"}>
            <Header modo={modo} manejarModo={manejarModo} />

            <Filter
                modo={modo}
                busqueda={busqueda}
                manejarBusqueda={manejarBusqueda}
                cancelarBusqueda={cancelarBusqueda}
            />

            <TrendingGifs modo={modo} />
        </div>
    );
}

export default App;
