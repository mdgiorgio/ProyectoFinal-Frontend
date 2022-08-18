import axios from "axios";


export const userLogin = async ({data}) => {
    const response = axios
        .post("http://localhost:8080/auth/login", data)
        .then((res) => res.data)
        .catch((err) => err.response.data);
    return response
};

export const userRegister = async ({data}) => {
    const response = axios
        .post("http://localhost:8000/auth/register", data)
        .then((res) => res.data)
        .catch((err) => err.response.data);
    return response
};


export const getAllUser = async ({setUser}) => {
    const response = axios
        .get("http://localhost:8000/api/user",{
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                'Content-Type': 'application/json'
            }
        })
        .then((res) =>setUser (res.data))
        .catch((err) => err.response.data);
    return response
};

export const putEditProfile = async ({data,userId }) => {
    const response = axios
        .put(`http:localhost:8000/api/user/${userId}`,data,{
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                'Content-Type': 'application/json'
            }
        })
        .then((res) =>res.data)
        .catch((err) => err.response.data);
    return response
};

export const getUserById = async ({ setUser, userId }) => {
    const response = axios
        .get(`http:localhost:8000/api/user/${userId}`,{
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                'Content-Type': 'application/json'
            }
        })
        .then((res) => setUser(res.data))
        .catch((err) => err.response.data);
    return response
};


export const deleteMyProfile= async ({userId }) => {
    const response = axios
        .delete(`http:localhost:8000/api/user/${userId}`,{
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                'Content-Type': 'application/json'
            }
        })
        .then((res) =>res.data)
        .catch((err) => err.response.data);
    return response
};

export const getAllPublications = async ({setPublications}) => {
    const response = axios
        .get("http://localhost:8000/api/publication",{
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                'Content-Type': 'application/json'
            }
        })
        .then((res) =>setPublications (res.data))
        .catch((err) => err.response.data);
    return response
};


export const postPublications = async ({data}) => {
    const response = axios
        .post("http://localhost:8000/api/publication",data,{
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                'Content-Type': 'application/json'
            }
        })
        .then((res) =>res.data)
        .catch((err) => err.response.data);
    return response
};


export const getPublicationById = async ({ setPublication, publicationId}) => {
    const response = axios
        .get(`http:localhost:8000/api/publication/${publicationId}`,{
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                'Content-Type': 'application/json'
            }
        })
        .then((res) => setPublication(res.data))
        .catch((err) => err.response.data);
    return response
};

export const putPublicationById = async ({data, putPublicationId}) => {
    const response = axios
        .put(`http:localhost:8000/api/publication/${putPublicationId}`,data,{
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                'Content-Type': 'application/json'
            }
        })
        .then((res) =>res.data)
        .catch((err) => err.response.data);
    return response
};

export const deletePublicationById = async ({ deletePublicationId}) => {
    const response = axios
        .delete(`http:localhost:8000/api/publication/${deletePublicationId}`,{
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                'Content-Type': 'application/json'
            }
        })
        .then((res) =>res.data)
        .catch((err) => err.response.data);
    return response
};

/*
importar: import {getUserById} from axios.js(ruta)
usar func.: 
useEffect (()=>{
const userId= JSON.parse(localStorage.getItem("User"))._id
getUserById({setUser,userId})

})

ej. post:
const handleClick= ()=>{
    postPublication({data})
}
*/