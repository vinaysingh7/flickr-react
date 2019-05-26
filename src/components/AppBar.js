import React from "react";
import { Route, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import flickrSVG from "./../Flickr_wordmark.svg";
import Card from './Card';
import searchImage from './../images/2734592986_f5bfb480cb.jpg'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#"
  },
  appBar: {
    backgroundColor: "#eff2f7",
    top: 0
    // alignItems: 'center',
  },
  typography: {
    paddingTop: "0px",
    color: "#000000",
    align: "right",
    alignItems: "center"
    // alignContent: "center",
    // alignItems: "center",
    // justify: "center",
  },
  button: {
    margin: theme.spacing(1),
    flex: 1,
    align: "right",
    alignItems: "right",
    alignContent: "right",
    alignItems: "right",
    justify: "right"
  },
  rightToolbar: {
    maxWidth: '80%',
    marginLeft: "auto",
    marginRight: "auto"
  },
  menuButton: {
    marginRight: 16,
    marginLeft: -12
  }
}));
function SimpleAppBar(props) {
  const classes = useStyles();
  const handleClick = () => {
    props.history.push("/");
  };
  return (
    <AppBar position="fixed" className={ classes.appBar }>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <Toolbar>
        <IconButton className={classes.menuButton} aria-label="Home">
          <img src={flickrSVG} width="70px" height="50px" />
        </IconButton>
        <Typography variant="h6" className={classes.rightToolbar}>
          {props.text}
        </Typography>
      </Toolbar>
      <Card image={searchImage} className={ classes.card } />
    </AppBar>
  );
}

SimpleAppBar.propTypes = {
  text: PropTypes.object.isRequired
};

export default withRouter(SimpleAppBar);
