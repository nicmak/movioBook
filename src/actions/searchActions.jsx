export const searchAction = (value) => {
	return {
		type:'INPUT_VALUE',
		value:value
	}
}

export const suggestionAction = (array) => {
	return {
		type:'CURRENT_SUGGESTIONS',
		suggestions:array
	}
}