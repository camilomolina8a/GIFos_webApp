import React from "react";
import { useState, useEffect } from "react";

import "./styles/AutocompleteGif.css";

import { by_search_key_Auto, parametersAuto, getData } from "../services";

import LupaLight from "../assets/icon-search.png";
import LupaDark from "../assets/icon-search-mod-noc.png";

function AutocompleteGif({
    modo,
    busqueda,
    actualizarBuscarBtn,
    actualizarBusqueda,
    actualizarPalabraEnviada,
}) {
    const [dataAuto, actualizarDataAuto] = useState([]);

    const url = by_search_key_Auto + busqueda + parametersAuto;

    useEffect(() => {
        if (busqueda !== "") {
            const getDataAuto = async (url) => {
                try {
                    const data = await getData(url);
                    if (data.data !== []) {
                        actualizarDataAuto(data.data);
                    } else {
                        return;
                    }
                } catch (error) {
                    console.error(error);
                }
            };
            getDataAuto(url);
            return () => {};
        }
    }, [url, busqueda]);

    const listCardsAuto = dataAuto.map((data) => {
        return (
            <CardAuto
                data={data}
                modo={modo}
                key={data.name}
                actualizarBuscarBtn={actualizarBuscarBtn}
                actualizarBusqueda={actualizarBusqueda}
                actualizarPalabraEnviada={actualizarPalabraEnviada}
            />
        );
    });

    if (busqueda !== "" && dataAuto.length > 0) {
        return (
            <div
                className={
                    modo
                        ? "AutocompleteGif-container light"
                        : "AutocompleteGif-container dark"
                }
            >
                {listCardsAuto}
            </div>
        );
    } else {
        return <div></div>;
    }
}

export default AutocompleteGif;

function CardAuto(props) {
    const manejarBuscarBtnAuto = () => {
        props.actualizarBuscarBtn(true);
        props.actualizarBusqueda("");
        props.actualizarPalabraEnviada(props.data.name);
    };

    return (
        <div
            className={
                props.modo ? "Card-container light" : "Card-container dark"
            }
            onClick={manejarBuscarBtnAuto}
        >
            <img
                src={props.modo ? LupaLight : LupaDark}
                alt="Logo de una lupa"
            />
            <p>{props.data.name}</p>
        </div>
    );
}
