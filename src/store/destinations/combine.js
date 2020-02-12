import { combineReducers } from 'redux';
import  destinationsReducer from './reducers'
import  searchReducer from '../search-result/reduces-search-result'


const rootReducer = combineReducers({
    destinationsList: destinationsReducer,
    searchResult: searchReducer
})

export default rootReducer;