import React from "react";
import { useState,useEffect } from "react";

import "../components/styles/ResultsBySearch.css";

import { by_search_key, parameters, getData } from "../services";

import Loader from "./Loader";

function ResultsBySearch({modo,palabraEnviada,buscarBtn, actualizarBuscarBtn}) {

    const [dataBusqueda, actualizarDataBusqueda] = useState([]);

    const urlAPI = by_search_key + palabraEnviada + parameters

    useEffect(() => {
        if (buscarBtn) {

        const getDataSearch = async (url) => {
            try {
                const data = await getData(url);
                actualizarDataBusqueda(data.data);
                console.log("Efectos");
            
            } catch (error) {
                console.error(error)
            }
        }

        getDataSearch(urlAPI)

        return () => {}
    }}, [urlAPI,buscarBtn])

    return (
        <>
            {dataBusqueda.length > 0  && palabraEnviada !== "" && buscarBtn && (
                <div className="ResultsBySearch-container">
                    <h1 className={modo ? "ResultsBySearch-text light" : "ResultsBySearch-text dark"}>Resultados de tu Búsqueda</h1>
                    <div className={modo ? "ResultsBySearch-results-container light" : "ResultsBySearch-results-container dark" }>
                        {dataBusqueda.map((data) => {
                            return (
                                <>
                                    <a
                                        href={data.bitly_gif_url}
                                        target="_blank"
                                        rel="noreferrer" 
                                    >
                                        <img
                                            className={modo ? "card light" : "card dark"}
                                            src={data.images.downsized.url}
                                            alt={data.title}
                                            key={data.id}
                                        />
                                    </a>
                                </>
                            );
                        })}
                    </div>
                </div>
            ) }
        </>
    );
}

export default ResultsBySearch;

