import TravelInsuranceService from '../../services/TravelInsuranceService'
const travelInsuranceService = new TravelInsuranceService()

export const search = (data) => {
   
    // const response = travelInsuranceService.search(data);
    // return {
    //     type: 'SEARCH',
    //     payload: response},
    //     getProducts()

    return dispatch => {
        travelInsuranceService.search(data)
        .then(resp => dispatch({type: 'SEARCH', payload: resp.data}))
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