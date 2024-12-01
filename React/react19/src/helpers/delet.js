import axios from "axios";
import {getOne} from "./get"
const url = "http://localhost:5000/donors";

export const deleteData = async (id) => {
    const {email} = await getOne(id);
    const comfirmed = window.confirm(
        `Ar tikrai norite ištrinti vartotoją ${email}`
    );

    if (!comfirmed) return;

    const response = await axios.delete(`${url}/${id}`);
    return response.data;
};