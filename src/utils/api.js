import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const fetchAllProducts = () => axios.get(`${BASE_URL}/products`);

export const fetchProductById = (id) => axios.get(`${BASE_URL}/products/${id}`);
