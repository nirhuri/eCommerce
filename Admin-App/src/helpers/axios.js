import axios from 'axios';

const token = window.localStorage.getItem('token');

const axiosInstance = axios.create({
    baseURL: 'http://localhost:2000/api',
    header: {
        'Authorization': token ? `Bearer ${token}`
    }
})

export default axiosInstance;