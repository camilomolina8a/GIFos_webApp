import React from "react";

import "../components/styles/Filter.css";
import imgPersonas from "../assets/ilustra_header.png"
import lupa from "../assets/icon-search-mod-noc.png"

function Filter({modo}) {
    return (
        <div className="Filter-container">
            <h1 className={ modo ? "Filter-title-light" : "Filter-title-dark"}>
                ¡Inspírate y busca los mejores <span>GIFS</span>!
            </h1>

            <div className="Filter-imagen">
                <img src={imgPersonas} alt="ilustracion de personas" />
            </div>

            <form className="Filter-form">
                <div>
                    <input type="text" name="" id="" className={modo ? "Filter-form-input light" : "Filter-form-input dark"} placeholder="Buscar Gif"/>
                    <div></div>
                </div>
                <button className={modo ? "Filter-button light" : "Filter-button dark"}  onClick={""}>
                    <img src={lupa} alt="" />
                </button>
            </form> 

        </div>
    );
}

export default Filter;
