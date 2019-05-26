import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";
import PaperSheet from "./components/PaperSheet";
import ImageGridList from './components/ImageGridList'
import Card from './components/Card'
import AppBar from './components/AppBar'
import searchImage from './images/2734592986_f5bfb480cb.jpg'
import PropTypes from "prop-types";


const styles = theme => ({
  container: {
    paddingLeft: "10px",
    paddingRight: "10px",
    // display: 'flex',
    // flexWrap: 'wrap',
    // padding: "10px",
    // marginBottom: "50px",
    // textAlign: 'center',
    // position: "relative",
    // justify: "center",
    // alignContent: "center",
    // alignItems: "center",
    // flexDirection: 'column',
  }, 
  card: {
    paddingTop: "550px"
  }, toolbar: theme.mixins.toolbar,
});
class Results extends Component {

  render() {
    const { classes } = this.props;
    console.log(this.props.location.state.similarImagesList);
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth className={ classes.container }>
          <AppBar text={"Results"} />
          <div className={classes.toolbar}>
          {/* <Card image={searchImage} className={ classes.card } /> */}
          <ImageGridList images={this.props.location.state.similarImagesList} />            
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



        {/* <Container>
        <div style={styles.root}>
          <GridList
            
            cellHeight={100}
            cols={10}
          >
          {images}
          </GridList>
        </div>
      </Container>  */}