import React from "react";
import { useState, useEffect } from "react";

import "./styles/AutocompleteGif.css";

import { by_search_key_Auto, parametersAuto, getData } from "../services";

import LupaLight from "../assets/icon-search.png";
import LupaDark from "../assets/icon-search-mod-noc.png";

function AutocompleteGif({ modo ,busqueda, manejarBuscarBtn}) {
    
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

    if (busqueda !== "" && dataAuto.length > 0) {
        return (
            <div className={modo ? "AutocompleteGif-container light" : "AutocompleteGif-container dark"} >
                <CardList dataAuto={dataAuto} manejarBuscarBtn={manejarBuscarBtn} modo={modo}/>
            </div>
        );
    } else {
        return <div></div>;
    }
}

function CardList({ modo, dataAuto, manejarBuscarBtn}) {
    const cards = dataAuto.map((data) => {
        return (
            <div className={modo ? "Card-container light" : "Card-container dark" } key={data.id} onClick={manejarBuscarBtn}>
                    <img src={modo ? LupaLight : LupaDark} alt="Logo de una lupa" />
                    <p>{data.name}</p>
            </div>
        );
    });
    return <ul>{cards}</ul>;
}

export default AutocompleteGif;
