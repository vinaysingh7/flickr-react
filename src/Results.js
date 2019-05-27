import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import ImageGridList from "./components/ImageGridList";
import AppBar from "./components/AppBar";
import PropTypes from "prop-types";

const styles = theme => ({
  container: {
    paddingLeft: "0px",
    paddingRight: "0px"
  },
  card: {
    paddingTop: "550px"
  },
  toolbar: {
    paddingTop: "20px"
  },
  divPadding: {
    paddingTop: "10%"
  }
});
class Results extends Component {
  render() {
    const { classes } = this.props;
    console.log(this.props.location.state.similarImagesList);
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth className={classes.container}>
          <AppBar text={"Similar Images"} />
          <div className={classes.toolbar}>
            <div className={classes.divPadding} />
            <ImageGridList
              images={this.props.location.state.similarImagesList}
            />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

Results.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Results);
