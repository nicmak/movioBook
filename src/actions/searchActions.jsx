export const searchAction = (value) => {
	return {
		type:'INPUT_VALUE',
		value:value
	}
}

export const clearValue = () => {
	return {
		type:'INPUT_VALUE',
		value:""
	}
}

export const suggestionAction = (array) => {
	return {
		type:'CURRENT_SUGGESTIONS',
		suggestions:array
	}
}

export const clearSuggestionValues = () => {
	return {
		type:'CURRENT_SUGGESTIONS',
		suggestions:[]
	}
}
