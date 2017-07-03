import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { searchAction, suggestionAction } from '../../actions/searchActions'
import _ from 'underscore';
import theme from './theme.css'

const mapStateToProps = (state) => {
	return {
		value : state.SearchReducer.value,
		suggestions : state.SearchReducer.suggestions,
		contentAppear : state.movieReducer.contentAppear
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		sendInput : (value) => {
			dispatch(searchAction(value))
		},
		sendSuggestions : (suggestionArray) => {
			dispatch(suggestionAction(suggestionArray))
		}
	}
}

class SearchIndex extends Component {

// ---------------------------------------------
// Function is fired, when a suggestion is clicked on, it will
// return an input value to the input box 
	getSuggestionValue = suggestion => {
		this.props.getMovieDetails(suggestion.id) 
		return (
			`${suggestion.original_title}`
		)
	}
//-----------------------------------------------
	// Use your imagination to render suggestions.
	// basically how you want to display your suggestions/content
	renderSuggestion = suggestion => (
	  <div>
	    {`${suggestion.original_title}`}
	  </div>
	);
//--------------------------------------------------

	getSuggestions = (value) => {
	  console.log(value,'getSuggestions')
	  const inputValue = value.trim().toLowerCase();
	  const inputLength = inputValue.length;
	  return []
  };
// ----------------------------------------------------

//  onChange function, will only call the API for searching movies
//  when the input in the search is more than two characters and also when
// the last character value is not a blank space, this will reduce the number of
// api calls 

	onChange = async (event, { newValue }) => {
		const { sendInput, queryMovie, sendSuggestions } = this.props;
	  sendInput(newValue)
	  if (newValue.length >= 2 && newValue.slice(-1) !== " ") {
	    let results = await queryMovie(newValue)
	    let topSix = _.sortBy(results.results,'popularity').reverse().slice(0,6)
	    sendSuggestions(topSix)
	  }
	}
// --------------------------------------------------------

//AutoSuggest will call this function every time you need to update suggestions
	onSuggestionsFetchRequested = ({ value }) => {
		console.log('suggestionFetch')
    this.props.sendSuggestions(this.getSuggestions(value))
	}

//AutoSuggest will call this function every time you clear suggestions
  onSuggestionsClearRequested = () => {
  	console.log('suggestionCleared')
  	this.props.sendSuggestions([])
  }

	render() {
		const { value, suggestions, contentAppear } = this.props; 
		const inputProps = {
	    placeholder: 'Search For A Movie',
	    value,
	    disabled: contentAppear,
	    onChange: this.onChange,
	  };
		return (
			<Autosuggest
			  suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
			/>
		)
	}
}

SearchIndex = connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
export default SearchIndex;
