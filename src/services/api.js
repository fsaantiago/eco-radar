import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_OPENWEATHER_BASE_URL,
});

api.interceptors.request.use(config => {
    if (!config.params) config.params = {};
    config.params['appid'] = process.env.REACT_APP_OPENWEATHER_API_KEY;
    return config;
});

export default api;