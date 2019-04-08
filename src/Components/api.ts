import {URL} from "./constants";

export const getComicsList = async () => {

    const results = await fetch(URL);
    const comics = await results.json();
    return comics.data;
};

