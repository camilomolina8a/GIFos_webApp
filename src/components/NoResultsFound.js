import React from "react";

import "./styles/NoResultsFound.css";
import imgConfusion from "../assets/confusion.png";

function NoResultsFound() {
    return (
        <div className="NoResultsFound-container">
            <div className="NoResultsFound-elements">
                <img src={imgConfusion} alt="Persona confundida" />
                <h1>Lo sentimos no encontramos lo que buscas</h1>
                <h2>¡Inténtalo de nuevo!</h2>
            </div>
        </div>
    );
}

export default NoResultsFound;
