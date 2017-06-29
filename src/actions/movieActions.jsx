export const sendMovie = (movieObject) => {
	return {
		type:'SELECTED_MOVIE',
		selectedMovie:movieObject
	}
}

export const showContent = () => {
	return {
		type:'SHOW_CONTENT',
		contentAppear:true
	}
}

export const hideContent = () => {
	return {
		type:'HIDE_CONTENT',
		contentAppear:false
	}
}