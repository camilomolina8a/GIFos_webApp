import React from "react";
import "../components/styles/Header.css";

import GIFos_light from "../assets/logo-desktop.png";
import GIFos_dark from "../assets/logo-mobile-modo-noct.png";

function Header({ modo, manejarModo }) {
    return (
        <div className="Header-container">
            <div className="Header-logo-container">
                {modo ? (
                    <img src={GIFos_light} alt="logo GIFos" />
                ) : (
                    <img src={GIFos_dark} alt="logo GIFos" />
                )}
            </div>
            <div className="Header-button-container">
                {modo ? (
                    <button
                        onClick={manejarModo}
                        className="Header-button-light"
                    >
                        MODO DARK
                    </button>
                ) : (
                    <button
                        onClick={manejarModo}
                        className="Header-button-dark"
                    >
                        MODO LIGHT
                    </button>
                )}
            </div>
        </div>
    );
}

export default Header;
