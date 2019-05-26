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
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#eff2f7",
    // alignItems: 'left',
    // align: 'center',
    // maxWidth: '90%',
    // marginLeft: "auto",
    // marginRight: "auto",
    // top: 0
    // alignItems: 'center',
  },
  toolbar: {
    backgroundColor: "#000000",
  },
  typography: {
    paddingTop: "0px",
    color: "#000000",
    align: "right",
    justify: "center"
    // alignContent: "center",
    // alignItems: "center",
    // justify: "center",
  },
  button: {
    marginLeft: theme.spacing(5),
    flex: 1,
    align: "right",
    alignItems: "right",
    alignContent: "right",
    alignItems: "right",
    justify: "right"
  },
  rightToolbar: {
    // maxWidth: '80%',
    marginLeft: "30%",
    marginRight: "auto"
  },
  menuButton: {
    marginLeft: theme.spacing(20),

  },
  div: {
    paddingTop: "10px",
  },
}));
function SimpleAppBar(props) {
  const classes = useStyles();
  const handleClick = () => {
    props.history.push("/");
  };
  return (
    <div className={classes.root}>
    <AppBar position="static" className={ classes.appBar }>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <Toolbar className={classes.toolbar}>
        <IconButton className={classes.menuButton} aria-label="Home" onClick={handleClick}>
          <img src={flickrSVG} width="70px" height="50px" />
        </IconButton>
        <Typography variant="h6" className={classes.rightToolbar}>
          {props.text}
        </Typography>
      </Toolbar>
      <div className={classes.div} / >
      <Card image={searchImage} className={ classes.menuButton } />
      <div className={classes.div} / >
    </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  text: PropTypes.object.isRequired
};

export default withRouter(SimpleAppBar);
