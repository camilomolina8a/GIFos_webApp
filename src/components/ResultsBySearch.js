import React from "react";
import { useState, useEffect } from "react";

import "../components/styles/ResultsBySearch.css";

import { by_search_key, parameters, getData } from "../services";

import Loader from "./Loader";
import NoResultsFound from "./NoResultsFound";

function ResultsBySearch({ modo, palabraEnviada, buscarBtn }) {
    const [dataBusqueda, actualizarDataBusqueda] = useState([]);
    const [sinResultados, actualizarSinResultados] = useState(false);

    const urlAPI = by_search_key + palabraEnviada + parameters;

    useEffect(() => {
        if (buscarBtn) {
            const getDataSearch = async (url) => {
                try {
                    const data = await getData(url);
                    if (data.data.length === 0) {
                        actualizarSinResultados(true);
                    } else {
                        actualizarDataBusqueda(data.data);
                        actualizarSinResultados(false);
                    }
                } catch (error) {
                    console.error(error);
                }
            };

            getDataSearch(urlAPI);

            return () => {};
        }
    }, [urlAPI, buscarBtn]);

    const listaCardbusqueda = dataBusqueda.map((data) => {
        return <CardBusqueda modo={modo} data={data} key={data.id} />;
    });

    return (
        <>
            {buscarBtn && sinResultados === false
                ? [
                    dataBusqueda.length > 0 ? (
                        <div
                            className="ResultsBySearch-container"
                            key={"ResultsBySearch"}
                        >
                            <h1
                                className={
                                    modo
                                        ? "ResultsBySearch-text light"
                                        : "ResultsBySearch-text dark"
                                }
                            >
                                Resultados de tu Búsqueda
                            </h1>
                            <div
                                className={
                                    modo
                                        ? "ResultsBySearch-results-container light"
                                        : "ResultsBySearch-results-container dark"
                                }
                            >
                                {listaCardbusqueda}
                            </div>
                        </div>
                    ) : (
                        <Loader key={"2"} />
                    ),
                ]
                : [
                    sinResultados && buscarBtn && (
                        <NoResultsFound key={"NoResultsFound"} />
                    ),
                ]}
        </>
    );
}

export default ResultsBySearch;

function CardBusqueda(props) {
    return (
        <div>
            <a href={props.data.bitly_gif_url} target="_blank" rel="noreferrer">
                <img
                    className={props.modo ? "card light" : "card dark"}
                    src={props.data.images.downsized.url}
                    alt={props.data.title}
                />
            </a>
        </div>
    );
}
