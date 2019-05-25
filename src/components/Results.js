import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Container } from 'semantic-ui-react';
import ImageGridList from './ImageGridList'

class Results extends Component {

  render() {
    console.log(this.props.location.state.similarImagesList);
    return (    
      < ImageGridList images={this.props.location.state.similarImagesList} />
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