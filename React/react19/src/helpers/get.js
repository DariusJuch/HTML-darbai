import axios from "axios";
const url = "http://localhost:5000/donors";

export const getAllData = async () => {
    const response = await axios.get(url);  //grazina objekta masiva 
    return response.data;
};

export const getOne = async (id) => {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
}