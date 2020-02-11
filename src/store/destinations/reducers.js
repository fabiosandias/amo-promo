const INITIAL_STATE = {
    destinations: [],
    loading: false,
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_ALL_DESTINATIONS_CHANGED':
            return {...state, destinations: action.payload}
        default:
            return state
    }
}

export default reducers;