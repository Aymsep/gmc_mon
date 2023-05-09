import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:3005',
    headers: {
        'Content-Type': 'application/json',
    }
})


export function one_person_id(){
    return api.get('/oneid')
}

export function grtage(){
    return api.get('/grtage')
}

export function smlage(){
    return api.get(`/filter`)
}

export function delete_smlfive(){
    return api.delete(`/delete`)
}

export function getalluser(){
    return api.get('allusers')
}

export function get_All_email(){
    return api.get('/email')
}



export default api;