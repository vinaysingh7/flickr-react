import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    paddingTop: "20px"
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative"
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  }
}));

function FetchButton(props) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  function handleButtonClick() {
    setSuccess(false);
    setLoading(true);
    if (!loading) {
      fetch(props.url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: props.method,
        body: JSON.stringify(props.body)
      })
        .then(response => response.json())
        .then(response => {
          setSuccess(true);
          setLoading(false);
          timer.current = setTimeout(() => {
            props.sendData(response);
          }, 500);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  return (
    <div className={classes.root}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="default"
          className={buttonClassname}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Search
          <Icon className={classes.rightIcon}>image_search</Icon>
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    </div>
  );
}

FetchButton.propTypes = {
  url: PropTypes.object.isRequired,
  method: PropTypes.object.isRequired,
  body: PropTypes.object.isRequired
};

export default FetchButton;
