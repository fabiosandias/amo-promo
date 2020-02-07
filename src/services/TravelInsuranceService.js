import axios from 'axios';
import API from '../constants';


const options = {
    headers: { authorization: API.HEADERS.AUTH, }
}

class TravelInsuranceService {

    constructor() {
        axios.defaults.baseURL = API.URL;
        axios.defaults.headers.common['Authorization'] = API.HEADERS.AUTH;
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    async getAllDestinations() {
        return await axios.get(`${API.URL}/destinations`).then(response => response)
    }
}

export default TravelInsuranceService;