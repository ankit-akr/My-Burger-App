import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-app-ac234-default-rtdb.firebaseio.com/'
});

export default instance;