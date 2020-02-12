const INITIAL_STATE = {
    result: [],
    products: [],
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {...state, result: action.payload}
        case 'GET_PRODUCTS':
            return {...state, products: action.payload}
        default:
            return state
    }
}

export default reducers;