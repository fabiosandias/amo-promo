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

export const saveSelectedProduct = (data) => {
    return {
        type: 'SAVE_SELECTED_PRODUCT',
        payload: data
    }
}

export const saveCombineProduct = (data) => {
    return {
        type: 'SAVE_COMBINE_PRODUCT',
        payload: data
    }
}

