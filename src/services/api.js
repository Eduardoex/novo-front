import axios from "axios";

export const api = axios.create({
    //baseURL: "https://rocketnotes-api-ngxw.onrender.com"
    baseURL: "http://localhost:3333/"
});

