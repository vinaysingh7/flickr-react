import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import flickrSVG from "./Flickr_wordmark.svg";
import FetchButton from "./components/FetchButton";

const styles = theme => ({
  container: {
    paddingLeft: "0px",
    paddingRight: "0px"
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "50px",
    position: "relative",
    justify: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  toolbar: {
    backgroundColor: "#000000"
  },
  rightToolbar: {
    marginLeft: "28%",
    marginRight: "auto"
  },
  textField: {
    margin: "auto",
    align: "center"
  },
  menuButton: {
    marginLeft: theme.spacing(20)
  },
  snackbar: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    paddingLeft: "10px"
  },
  div: {
    paddingTop: "7%"
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
    this.handleSearchResult = this.handleSearchResult.bind(this);
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

  handleSearchResult(response) {
    this.props.history.push({
      pathname: "/results",
      state: {
        searchImage: response.searchImage,
        similarImagesList: response.similarImagesList
      }
    });
  }

  render() {
    const { classes } = this.props;

    console.log(classes);
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth className={classes.container}>
          <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
              <Toolbar className={classes.toolbar}>
                <IconButton className={classes.menuButton} aria-label="Home">
                  <img
                    src={flickrSVG}
                    alt="flickr_logo"
                    width="70px"
                    height="50px"
                  />
                </IconButton>
                <Typography variant="h6" className={classes.rightToolbar}>
                  Reverse Image Search
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
          <div className={classes.div} />

          <form className={classes.form} onSubmit={this.handleSearchClick}>
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
            <FetchButton
              url={"http://127.0.0.1:5000/results"}
              method={"POST"}
              body={this.state.formData}
              sendData={this.handleSearchResult}
            />
          </form>
        </Container>
        <Typography variant="h8" className={classes.snackbar}>
          * This website is for educational purpose only.
        </Typography>
      </React.Fragment>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
