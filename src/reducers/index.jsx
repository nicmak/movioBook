import { combineReducers } from 'redux';
import { exampleReducer } from './exampleReducer';
import { SearchReducer } from './SearchReducer';


export default combineReducers({
	exampleReducer,
	SearchReducer
})