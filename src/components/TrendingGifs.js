import React from "react";
import { useState, useEffect } from "react";

import "../components/styles/TrendingGifs.css";

import { trending_key, getData } from "../services";

import Loader from "./Loader";

function TrendingGifs({modo, palabraEnviada, buscarBtn}) {
    const [dataTrend, actualizarDataTrend] = useState([]);

    useEffect(() => {
        const obtenerDataTrend = async (key) => {
            try {
                const data = await getData(key);
                actualizarDataTrend(data.data);
            } catch (error) {
                console.error(error);
            }
        };
        obtenerDataTrend(trending_key);
    }, []);
    return (
        <>
            {dataTrend.length > 0 && buscarBtn === false && (
                <div className="TrendingGifs-container">
                    <h1 className={modo ? "TrendingGifs-text light" : "TrendingGifs-text dark"}>Gifs en Tendencia</h1>
                    <div className={modo ? "Trendings-results-container light" : "Trendings-results-container dark" }>
                        {dataTrend.map((data) => {
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

export default TrendingGifs;

