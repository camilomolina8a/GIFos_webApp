import React from "react";

import "../components/styles/Filter.css";

import imgPersonas from "../assets/ilustra_header.png";
import lupa from "../assets/icon-search-mod-noc.png";
import cerrar_dark from "../assets/eliminar-dark.png";
import cerrar_light from "../assets/eliminar-light.png";

function Filter({ modo, busqueda, manejarBusqueda, cancelarBusqueda}) {
    return (
        <div className="Filter-container">
            <h1 className={modo ? "Filter-title-light" : "Filter-title-dark"}>
                ¡Inspírate y busca los mejores <span>GIFS</span>!
            </h1>

            <div className="Filter-imagen">
                <img src={imgPersonas} alt="ilustracion de personas" />
            </div>

            <form className="Filter-form">
                <div className="Filter-form-input-container">
                    <input
                        type="text"
                        name=""
                        id=""
                        className={
                            modo
                                ? "Filter-form-input light"
                                : "Filter-form-input dark"
                        }
                        placeholder="Buscar Gif"
                        onChange={manejarBusqueda}
                        value={busqueda}
                    />
                    {busqueda !== "" ? (
                        <img
                            src={modo ? cerrar_light : cerrar_dark}
                            onClick={cancelarBusqueda}
                            alt="Vaciar input"
                        />
                    ) : (
                        ""
                    )}
                </div>
                <button
                    className={
                        modo ? "Filter-button light" : "Filter-button dark"
                    }
                    onClick={""}
                >
                    <img src={lupa} alt="" />
                </button>
            </form>
        </div>
    );
}

export default Filter;
