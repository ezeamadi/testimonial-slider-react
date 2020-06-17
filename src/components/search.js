import React, { Component } from 'react';
import ImageResults from "./imageResults"
import { searchRequest } from '../apiRequests';

class Search extends Component {
	constructor(props) {
			super(props);
			this.state = {
					images: [],
			}
	};

	componentDidMount() {
		this.searchHobbies();
	};

	componentDidUpdate(prevProps) {
		if (prevProps.hobbies !== this.props.hobbies) {
			this.searchHobbies();
		}
	};
	
	searchHobbies = async () => {
		const { hobbies } = this.props;

		if(hobbies.length === 0) {
			this.setState({ images: []});

			return;
		}

		const hobbyList = hobbies.split(', ');

		const requests = hobbyList.map(hobby => {
			return new Promise((resolve, reject) => resolve(searchRequest(hobby)));
		})

		const response = await Promise.all(requests);
		const images = response.flatMap(res => res.slice(0, 5));
		this.setState({ images })
	};

	render() {
		return (
			<div>
				{this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>) : null}
			</div>
		)
	};
}

export default Search;