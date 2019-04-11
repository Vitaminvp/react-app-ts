const PUBLIC_KEY = '483b9a0b2a9e830a25e97a0a43078a2b';
const PRIVATE_KEY = '48124755ba08aa4f7330ebae16a655c48c8e906c';
const BASE_URL = `http://gateway.marvel.com/v1/public/comics`;

const crypto = require('crypto');
const timestamp = new Date().getTime();//'1554920938285';//
const HASH = crypto.createHash('md5').update(timestamp + PRIVATE_KEY + PUBLIC_KEY).digest('hex'); //'9eca3aaed2a62aa0d5b86596442d2256';


export const URL = `${BASE_URL}?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${HASH}`;



