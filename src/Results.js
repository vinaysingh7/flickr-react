import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import PaperSheet from "./components/PaperSheet";
import ImageGridList from './components/ImageGridList'
import Card from './components/Card'
import searchImage from './images/2734592986_f5bfb480cb.jpg'

class Results extends Component {

  render() {
    console.log(this.props.location.state.similarImagesList);
    return (
      <React.Fragment>
        <CssBaseline />
        <Container >
          <PaperSheet />
          <Card image={searchImage} />
          < ImageGridList images={this.props.location.state.similarImagesList} />
        </Container>
      </React.Fragment>
    );
    }
  }
  
  export default Results;


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