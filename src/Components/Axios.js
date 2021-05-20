import axios from 'axios';

const baseURL = "52.188.22.187";

const axiosInstance = axios.create({
    baseURL : baseURL,
    timeout: 5000,
    headers : {
        Authorization : localStorage.getItem('access_token')
            ? 'JWT ' +   localStorage.getItem('access_token')
            : null,
        'Content-Type' : 'application/json',
        accept : 'application/json'
    },
});

export default axiosInstance;