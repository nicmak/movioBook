import { combineReducers } from 'redux';
import { exampleReducer } from './exampleReducer';
import { SearchReducer } from './SearchReducer';
import { movieReducer } from './movieReducer';


export default combineReducers({
	exampleReducer,
	SearchReducer,
	movieReducer
})