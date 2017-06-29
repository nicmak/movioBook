let initialState = {
  selectedMovie:{},
  contentAppear:false
}

export const movieReducer = ( state= initialState, action) => {
  switch (action.type) {
  	case 'SELECTED_MOVIE' : {
  		return {
  			...state,
  			selectedMovie:action.selectedMovie,
  		}
  	}
    case 'SHOW_CONTENT' : {
      return {
        ...state,
        contentAppear:action.contentAppear
      }
    }
    case 'HIDE_CONTENT' : {
      return {
        ...state,
        contentAppear:action.contentAppear
      }
    }
  	default:
  	  return state
  }
}