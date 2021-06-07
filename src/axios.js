import axios from "axios";

const instance = axios.create({
    baseURL: "https://tiktok-backend-r.herokuapp.com"
});
export default instance;