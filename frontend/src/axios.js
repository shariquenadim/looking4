import axios from "axios";

// axios.defaults.withCredentials = true
// axios.defaults.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000';
// axios.defaults.headers['Accept'] = '*/*';
// axios.defaults.headers['Accept-Language'] = 'en';
// axios.defaults.headers['Content-Language'] = 'en-US';
// axios.defaults.headers['Access-Control-Allow-Credentials'] = true;
// axios.defaults.headers['Content-Type'] = 'text/plain';

const instance = axios.create({
    baseURL: 'https://api.wellity.in',
    headers: {
        crossorigin: true,
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': 'https://api.wellity.in',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    withCredentials: true,
})

export default instance;