import axios from 'axios';

const api = axios.create({
    baseurl: 'http://localhost:3333',
})

export default api;