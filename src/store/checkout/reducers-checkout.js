const reducers = (state, action) => {
    switch (action.type) {
        case 'GET_SELECTED_PRODUCT':
            return { ...state, selectedProduct: action.payload }
        default:
            return state
    }
}

export default reducers;