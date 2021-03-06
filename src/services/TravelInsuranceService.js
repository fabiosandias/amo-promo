import axios from 'axios';
import { API } from '../constants';


const options = {
    headers: { 
        'Access-Control-Allow-Origin': '*',
         'accept': 'application/json',
         'Content-Type': 'application/json'
        }
}   

class TravelInsuranceService {

    constructor() {
        axios.defaults.baseURL = API.URL;
        axios.defaults.headers.common['Authorization'] = API.HEADERS.AUTH;
    }

    getAllDestinations() {
        return axios.get(`${API.URL}/base/destinations`, options).then(response => response.data)
    }

    getProducts() {
        return axios.get(`${API.URL}/base/products`, options).then(response => response.data || [])
    }

    search(data) {
        return axios.post(`${API.URL}/quotation`, data, options).then(response => response)
    }
    
    purchase(data) {
        return axios.post(`${API.URL}/purchase`, data, options).then(response => response)
    }
}   

export default TravelInsuranceService;