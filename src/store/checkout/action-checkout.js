export const getselectedProduct = (event) => {
    return {
        type: 'GET_SELECTED_PRODUCT',
        payload: event.payload
    }
}

