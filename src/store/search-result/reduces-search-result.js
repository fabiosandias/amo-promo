const INITIAL_STATE = {
    dataSearch = {
        destination: undefined,
        coverage_begin: undefined,
        coverage_end: undefined,
    },
    searchResult: [],
    products: []
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {...state, searchResult: action.payload}
        case 'GET_PRODUCTS':
            return {...state, products: action.payload}
        default:
            return state
    }
}

export default reducers;