export const trending_key =
    "https://api.giphy.com/v1/gifs/trending?api_key=GGRBVxsw3rsB59EvPkZllHb0uDtU9ZrO&limit=15&rating=g";

export const by_search_gif =
    "https://api.giphy.com/v1/gifs/search?api_key=GGRBVxsw3rsB59EvPkZllHb0uDtU9ZrO&q=&limit=15&offset=0&rating=g&lang=en";

export const getData = (key) => {
    return fetch(key)
        .then((response) => response.json())
        .then((json) => json);
};
