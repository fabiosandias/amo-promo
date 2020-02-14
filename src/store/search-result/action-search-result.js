import TravelInsuranceService from '../../services/TravelInsuranceService'
const travelInsuranceService = new TravelInsuranceService()

export const search = (data) => {

    return dispatch => {
        travelInsuranceService.search(data)
        .then(resp => dispatch(actionSearch(resp.data)))
        .then(resp => dispatch(getProducts(data)))
        .then(resp => dispatch(saveSearchForm(data)))
    }
}

export const saveSearchForm = (data) => {
    return {
        type: 'SAVE_SEARCH_FORM',
        payload: data
        
    }
}

export const getProducts = () => {
    const response = travelInsuranceService.getProducts();
    return {
        type: 'GET_PRODUCTS',
        payload: response
    }
}

export const purchase = (data) => {
    const response = travelInsuranceService.purchase(data);
    return {
        type: 'PURCHASE',
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

export const getselectedProduct = (data) => {
    return {
        type: 'GET_SELECTED_PRODUCT',
        payload: data
    }
}

