import React, { Component } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import PaperSheet from "./components/PaperSheet";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

// import logo from './logo.svg';
// import './App.css';
// import {BrowserRouter as Router, Route} from 'react-router-dom';

// require('dotenv').config();

const styles = theme => ({
  container: {
    padding: "10px",
    display: 'flex',
    // flexWrap: 'wrap',
    padding: "10px",
    marginBottom: "50px",
    // textAlign: 'center',
    position: "relative",
    justify: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: 'column',
  },
  textField: {
    margin: "auto",
    align: "center"
  },
  button: {
    margin: theme.spacing(3)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  flex: {
    background: "#6AB6D8",
    padding: "10px",
    marginBottom: "50px",
    border: "3px solid #2E86BB",
    color: "white",
    fontSize: "20px",
    textAlign: "center",
    position: "relative"
  }
});

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
    const { classes } = this.props;
    console.log(classes);
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <PaperSheet />
        <form className={classes.container} onSubmit={this.handleSearchClick}>
          <TextField
            id="standard-number"
            name="imagesCount"
            label="# of Similar Images"
            value={this.state.imagesCount}
            onChange={this.handleInputChanges}
            type="number"
            margin="normal"
            variant="outlined"
          />
          <br />
          <TextField
            className={classes.textField}
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
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            type="submit"
          >
            Search
            <Icon className={classes.rightIcon}>image_search</Icon>
          </Button>
        </form>
        </Container>
      </React.Fragment>    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
