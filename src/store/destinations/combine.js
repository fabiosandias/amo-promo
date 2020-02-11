import { combineReducers } from 'redux';
import  destinationsReducer from './reducers'


const rootReducer = combineReducers({
    destinationsList: destinationsReducer
})

export default rootReducer;