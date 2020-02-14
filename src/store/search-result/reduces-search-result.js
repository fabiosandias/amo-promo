import * as _ from '../../constants'

const INITIAL_STATE = {
    result: [],
    products: [],
    selectedProduct: [],
    combineProducts: [],
    searchForm: {}
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case _.ACTION.SEARCH:
            return { ...state, result: action.payload }
        case _.ACTION.GET_PRODUCTS:
            return { ...state, products: action.payload }
        case _.ACTION.SAVE_SELECTED_PRODUCT:
            return { ...state, selectedProduct: action.payload }
        case _.ACTION.SAVE_COMBINE_PRODUCT:
            return { ...state, combineProducts: action.payload }
        case _.ACTION.SAVE_SEARCH_FORM:
            return { ...state, searchForm: action.payload }
        default:
            return state
    }
}

export default reducers;