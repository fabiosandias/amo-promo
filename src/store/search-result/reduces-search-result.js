const INITIAL_STATE = {
    result: [],
    products: [],
    selectedProduct: [],
    combineProducts: []
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SEARCH':
            return { ...state, result: action.payload }
        case 'GET_PRODUCTS':
            return { ...state, products: action.payload }
        case 'SAVE_SELECTED_PRODUCT':
            return { ...state, selectedProduct: action.payload }
        case 'SAVE_COMBINE_PRODUCT':
            return { ...state, combineProducts: action.payload }
        default:
            return state
    }
}

export default reducers;