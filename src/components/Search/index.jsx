import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { searchAction, suggestionAction } from '../../actions/searchActions'


const languages = [
  {
  	name:'C',
  	year:1972
  },
  {
  	name:'Elm',
  	year:2012
  }
];

//Teaching AutoSuggest to calculate suggestions for inputs
const getSuggestions = (value) => {
	//remove input of white spaces
	const inputValue = value.trim().toLowerCase();
	//measuring length of input value without the white spaces
	const inputLength = inputValue.length;
	// returns an array, if inputLength exists, we 
	//will get an array where suggestion values are equal to existing values
	return inputLength === 0 ? [] : languages.filter ((lang) => {
		return lang.name.toLowerCase().slice(0, inputLength) === inputValue
	})
};



// When suggestion is clicked, autoSuggest needs to populate
//the input based on the clicked suggestion. Teach AutoSuggest 
// how to calculate the input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

const mapStateToProps = (state) => {
	return {
		value:state.SearchReducer.value,
		suggestions:state.SearchReducer.suggestions
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
//  default value: "", suggestions:[]
class SearchIndex extends Component {

	onChange = (event) => {
    this.props.sendInput(event.target.value)
	}

//AutoSuggest will call this function every time you need to 
// update suggestions
	onSuggestionsFetchRequested = ({ value }) => {
		console.log('suggestionFetch')
    this.props.sendSuggestions(getSuggestions(value))
	}

//AutoSuggest will call this function every time you clear suggestions
  onSuggestionsClearRequested = () => {
  	console.log('suggestionCleared')
  	this.props.sendSuggestions([])
  }

	render() {
		const { value, suggestions } = this.props; 

		 const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange
    };

		return (
			<Autosuggest
			  suggestions = { suggestions }
			  onSuggestionsFetchRequested = {this.onSuggestionsFetchRequested}
			  onSuggestionsClearRequested = { this.onSuggestionsClearRequested }
			  getSuggestionValue = { getSuggestionValue }
			  renderSuggestion={ renderSuggestion }
			  inputProps = { inputProps }
			/>
		  
		)
	}
}

SearchIndex = connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
export default SearchIndex;
