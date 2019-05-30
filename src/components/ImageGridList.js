import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ImageRemoved from './image-removed.gif'

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "80%",
    height: "80%",
    overflowY: "auto"
  },
  gridListTile: {
    imgFullHeight: "true",
    imgFullWidth: "true"
  }
}));

function ImageGridList(props) {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList
        cellHeight={"150"}
        className={classes.gridList}
        cols={4}
        spacing={10}
      >
        {props.images.map(tile => (
          <GridListTile key={tile} cols={1} className={classes.gridListTile}>
            <img
              src={tile}
              alt=""
              onError={e => {
                e.target.src =
                  ImageRemoved; // some replacement image
              }}
            />
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
