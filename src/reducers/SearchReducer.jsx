let initialState = {
	value:"",
  suggestions:[]
}

export const SearchReducer = ( state= initialState, action) => {
  switch (action.type) {
  	case 'INPUT_VALUE' : {
  		return {
  			...state,
  			value:action.value,
  		}
  	}
    case 'CURRENT_SUGGESTIONS' : {
      return {
        ...state,
        suggestions:action.suggestions
      }
    }
  	default:
  	  return state
  }
}