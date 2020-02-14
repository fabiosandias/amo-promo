import TravelInsuranceService from '../../services/TravelInsuranceService'
import * as _ from '../../constants'
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
        type: _.ACTION.SAVE_SEARCH_FORM,
        payload: data
    }
}

export const getProducts = () => {
    const response = travelInsuranceService.getProducts();
    return {
        type: _.ACTION.GET_PRODUCTS,
        payload: response
    }
}


export const actionSearch = (data) => {
    return {
        type: _.ACTION.SEARCH,
        payload: data
    }
}

export const saveSelectedProduct = (data) => {
    return {
        type: _.ACTION.SAVE_SELECTED_PRODUCT,
        payload: data
    }
}

export const saveCombineProduct = (data) => {
    return {
        type: _.ACTION.SAVE_COMBINE_PRODUCT,
        payload: data
    }
}

export const getselectedProduct = (data) => {
    return {
        type: _.ACTION.GET_SELECTED_PRODUCT,
        payload: data
    }
}

