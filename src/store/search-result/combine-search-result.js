import { combineReducers } from 'redux';
import  searchResultReducer  from './reduces-search-result'


const rootSearchResultReducer = combineReducers({
    searchResult: searchResultReducer
})

export default rootSearchResultReducer;