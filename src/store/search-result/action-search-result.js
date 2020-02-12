import TravelInsuranceService from '../../services/TravelInsuranceService'
const travelInsuranceService = new TravelInsuranceService()

export const search = (data) => {

    return dispatch => {
        travelInsuranceService.search(data)
        .then(resp => dispatch(actionSearch(resp.data)))
        .then(resp => dispatch(getProducts()))
    }
}

export const getProducts = () => {
    const response = travelInsuranceService.getProducts();
    return {
        type: 'GET_PRODUCTS',
        payload: response
    }
}

export const actionSearch = (data) => {
    return {
        type: 'SEARCH',
        payload: data
    }
}

