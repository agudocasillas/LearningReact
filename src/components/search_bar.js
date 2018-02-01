import React, {Component} from "react"; // instead of using extends React.Component

/*
const SearchBar = () => { // functional component
	return <input />;
}
*/

class SearchBar extends Component { // class component
	constructor(props){
		super(props);

		this.state = {term:''};
	}

	render() {
		return (
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		)
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

}


export default SearchBar;