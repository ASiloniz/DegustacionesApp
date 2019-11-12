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

export function loginUserToApi(user) {
    /*
    for (var key of user.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }
    */
    return axios.post(`${BASE_URL}/login`, user)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log(err.response ? err.response.data:err)
        });
}

export function addUserToApi(user) {
    /*
    for (var key of user.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }
    */
    return axios.post(`${BASE_URL}/signup`, user)
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

export function eliminarDegustacion(id) {
    return axios.delete(`${BASE_URL}/degustaciones/${id}`)
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