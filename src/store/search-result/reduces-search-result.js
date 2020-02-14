const INITIAL_STATE = {
    result: [],
    products: [],
    purchaseResult: {},
    selectedProduct: [],
    combineProducts: [],
    searchForm: {}
}

const reducers = (state = INITIAL_STATE, action) => {
    debugger
    switch (action.type) {
        case 'SEARCH':
            return { ...state, result: action.payload }
        case 'PURCHASE':
            debugger
            return { ...state, purchaseResult: action.payload }
        case 'GET_PRODUCTS':
            return { ...state, products: action.payload }
        case 'SAVE_SELECTED_PRODUCT':
            return { ...state, selectedProduct: action.payload }
        case 'SAVE_COMBINE_PRODUCT':
            return { ...state, combineProducts: action.payload }
        case 'SAVE_SEARCH_FORM':
            return { ...state, searchForm: action.payload }
        default:
            return state
    }
}

export default reducers;