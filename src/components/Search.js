import React, { Component } from "react";
import PaperSheet from "./PaperSheet";
import TextField from "@material-ui/core/TextField";

// import logo from './logo.svg';
// import './App.css';
// import {BrowserRouter as Router, Route} from 'react-router-dom';

// require('dotenv').config();

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {
        imagesCount: null,
        imageURL: null
      },
      result: null
    };

    this.handleInputChanges = this.handleInputChanges.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleInputChanges(event) {
    const target = event.target;
    const name = target.name;
    var formData = this.state.formData;
    formData[name] = target.value;
    this.setState({
      formData
    });
    console.log(this.state);
  }

  handleSearchClick(event) {
    const formData = this.state.formData;
    this.setState({ isLoading: true });
    console.log("here");
    fetch("http://127.0.0.1:5000/results", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(response => {
        this.props.history.push({
          pathname: "/results",
          state: {
            searchImage: response.searchImage,
            similarImagesList: response.similarImagesList
          }
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <PaperSheet />
        {/* <form onSubmit={this.handleSearchClick}> */}
        <form onSubmit={this.handleSearchClick}>
          <label>
            Number of similar images:
            <input
              name="imagesCount"
              type="number"
              value={this.state.imagesCount}
              onChange={this.handleInputChanges}
            />
          </label>
          <br />
          {/* <label>
            Image URL:
            <input
              name="imageURL"
              type="url"
              value={this.state.imageURL}
              onChange={this.handleInputChanges}
            />
          </label> */}
          <TextField 
            id="outlined-with-placeholder"
            label="Image URL" 
            placeholder="Image URL" 
            name="imageURL"
            type="url"
            margin="normal"
            variant="outlined"
            onChange={this.handleInputChanges}
            value={this.state.imageURL}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Search;