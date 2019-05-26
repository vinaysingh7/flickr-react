import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
// import tileData from './tileData';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 1500,
    height: 1000,
    transform: 'translateZ(0)',
  },
  gridListTile: {
    imgFullHeight: "true",
    imgFullWidth: "true"
  }
}));

function ImageGridList(props) {
  const classes = useStyles();
  console.log(props.images);
  return (
    <div className={classes.root}>
      <GridList
        cellHeight={300}
        className={classes.gridList}
        cols={4}
        spacing={10}
      >
        {props.images.map(tile => (
          <GridListTile key={tile} cols={1} className={classes.gridListTile}>
            <img src={tile} alt="" />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ImageGridList.propTypes = {
  images: PropTypes.object.isRequired
};

export default ImageGridList;
