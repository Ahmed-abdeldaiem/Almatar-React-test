import axios from "axios";

const API_URL ='http://localhost:9000';

export const getAllCustomer=()=>{
   
    return axios.get(`${API_URL}/customers`);
}