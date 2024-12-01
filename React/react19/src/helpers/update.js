import axios from "axios";
const url = "http://localhost:5000/donors";

export const updateData = async (id, data) => {
    console.log(data);
    
    const response =await axios.patch(`${url}/${id}`, data)
    return response.data;
}