import axios from 'axios';

// API base URL
const apiUrl = import.meta.env.VITE_BASE_URL;

// API function to fetch all categories
export const fetchAllCategories = async () => {
    try {
        const response = await axios.get(`${apiUrl}/products/categories`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// API function to fetch all products
export const fetchAllProducts = async () => {
    try {
        const response = await axios.get(`${apiUrl}/products`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// API function to fetch a specific category by name
export const fetchSpecificCategory = async (category) => {
    try {
        const response = await axios.get(`${apiUrl}/products/category/${category}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

// API function to fetch a specific product by ID
export const fetchSpecificProduct = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/products/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};
