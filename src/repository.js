import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export function getProducts() {
    return axios.get(`${BASE_URL}/api/products`)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log(err.response ? err.response.data:err)
        })
}

export function addUserToApi(user) {
    return axios.post(`${BASE_URL}/api/users`, user)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log(err.response ? err.response.data:err)
        });
}

export function getDegustaciones() {
    return axios.get(`${BASE_URL}/degustaciones`)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log(err.response ? err.response.data:err)
        })
}

export function addDegustacion(degustacion) {
    console.log(`ADDING:`);
    console.log(degustacion);
    return axios.post(
        `${BASE_URL}/degustaciones`,
        degustacion,
        {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log(err.response ? err.response.data:err)
        });
}