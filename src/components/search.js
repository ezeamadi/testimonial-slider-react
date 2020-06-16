import React, { Component } from 'react';
import TextField from "material-ui/TextField";
import axios from "axios";
import ImageResults from "./imageResults"


class Search extends Component {
    state = {
        searchText: "",
        amount: 5,
        apiUrl: "https://pixabay.com/api/",
        apiKey: "9259184-33e11f59eb5abd709817fb3fe",
        images: [],
    }

    onTextChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value }, () => {

            if (value === "") {
                this.setState({
                    images: [],
                })
            } else {
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                    .then(response => this.setState({ images: response.data.hits }))
                    .catch(err => console.log(err))
            }
        })
    };

    render() {
        console.log(this.state.images)
        return (
            <div>
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    fullWidth={false}
                />

                <br />

                {this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>) : null}
                
            </div>
        )
    }
}

export default Search;