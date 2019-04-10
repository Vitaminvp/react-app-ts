
export interface Url {
    type: string;
    url: string;
}

export interface Thumbnail {
    path: string;
    extension: string;
}

export interface Item {
    resourceURI: string;
    name: string;
}

export interface Comics {
    available: string;
    returned: string;
    collectionURI: string;
    items: Item[];
}

export interface Item2 {
    resourceURI: string;
    name: string;
    type: string;
}

export interface Stories {
    available: string;
    returned: string;
    collectionURI: string;
    items: Item2[];
}

export interface Item3 {
    resourceURI: string;
    name: string;
}

export interface Events {
    available: string;
    returned: string;
    collectionURI: string;
    items: Item3[];
}

export interface Item4 {
    resourceURI: string;
    name: string;
}

export interface Series {
    available: string;
    returned: string;
    collectionURI: string;
    items: Item4[];
}

export interface Result {
    id: string;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: Url[];
    thumbnail: Thumbnail;
    comics: Comics;
    stories: Stories;
    events: Events;
    series: Series;
}

export interface Data {
    offset: string;
    limit: string;
    total: string;
    count: string;
    results: Result[];
}

export interface RootObject {
    code: string;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: Data;
    etag: string;
}


