import React, { Component  } from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends Component  {
	constructor(props) {
		super()

		this.state = { term : "" };
	}

	

	render() {

		return (
			<div className="searchbar">
				<input 
					className="form-control" placeholder="Enter SearchKey"
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);

	}

	onInputChange(term) {
		
		this.setState({term});
		this.props.onSearchTermChange(term);
		
	}
	
}

export default SearchBar;