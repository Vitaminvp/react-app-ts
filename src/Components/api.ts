import {URL} from "./constants";

export const getComicsList = async (value:number) => {
    const offset = value>0 ? `&limit=${value}` : '';
    const results = await fetch(`${URL}${offset}`);
    const comics = await results.json();
    return comics.data;
};

