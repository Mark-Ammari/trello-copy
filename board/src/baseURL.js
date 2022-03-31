import axios from 'axios'

const BASE_URL = process.env === 'production' ? 'https://trellocopycat.herokuapp.com/' : 'http://localhost:3000/';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    }
});

export default instance;