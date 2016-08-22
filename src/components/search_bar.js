import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';

// const SearchBar = () => {
// 	return <input type="text"/>
// };

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			term: ""
		};
		console.log('reconstruct')
	}

	onInputChange(term) {
		this.setState({
			term
		});
		this.props.onSearchTermChange(term);
	}

	render() {
		return (
			<div className='search-bar'>
			    <input type="text" 
			    placeholder='Type something to search....'
			    value={this.state.term}
			    onChange={event=> this.onInputChange(event.target.value)}/><br/>
			</div>
		);
	}
}

export default SearchBar;