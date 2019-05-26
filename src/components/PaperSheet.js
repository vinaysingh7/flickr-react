import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  div: {
    width: "100%",
    height: "30px",
    margin: "auto",
    // transform: "translate(-50%, -50%)",
    // display: "inline-block",
    "margin-top": "10px",
    "margin-bottom": "80px",
  },
  paper: {
    backgroundColor: "#eff2f7",
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    "margin-bottom": "80px",
  }
});

function PaperSheet(props) {
  // const { classes, data1 } = props;
  const { classes } = props;
  return (
    <div className={classes.div}>
      <Paper className={classes.paper} elevation={1}>
        <Typography variant="h5" component="h3">
          Flickr Reverse Image Search
        </Typography>
        <Typography component="p">
          Search from 600k Flickr open dataset.
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
  // data1: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);