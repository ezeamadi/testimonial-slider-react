import React, { Component } from 'react';
import axios from "axios";
import ImageResults from "./imageResults"


class Search extends Component {
	constructor(props) {
			super(props);
			this.state = {
					images: [],
			}
	};

	componentDidMount() {
		this.searchHobbies();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.hobbies !== this.props.hobbies) {
			this.searchHobbies();
		}
	}
	
	searchHobbies = async () => {
		const { hobbies } = this.props;

		if(hobbies.length === 0) {
			this.setState({ images: []});

			return;
		}

		const hobbyList = hobbies.split(', ');

		const requests = hobbyList.map(hobby => {
			return new Promise((resolve, reject) => resolve(this.searchRequest(hobby)));
		})

		const response = await Promise.all(requests);
		const images = response.flatMap(res => res.slice(0, 5));
		this.setState({ images })
	}

	searchRequest = (hobby) => {
		return axios.get(`https://pixabay.com/api//?key=9259184-33e11f59eb5abd709817fb3fe&q=${hobby}&image_type=photo&per_page='5'&safesearch=true`)
									.then(response => response.data.hits)
									.catch(err => console.log(err))
	}

	render() {
		return (
			<div>
				{this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>) : null}
			</div>
		)
	}
}

export default Search;