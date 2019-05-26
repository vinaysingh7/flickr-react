import React from "react";
import { Route , withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

function ImgMediaCard(props) {
  const classes = useStyles();
  const handleClick = () => {
    props.history.push("/");
 }
  
  return (
    <Card className={classes.card}>
    <CardMedia
        className={classes.cover}
        image={props.image}
        title="Query Image"
      />
      <div className={classes.details}>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          Search Again
        </Button>
      </CardActions>
      </div>
    </Card>    

  );
}

ImgMediaCard.propTypes = {
  image: PropTypes.object.isRequired,
  click: PropTypes.object.isRequired,
};

export default withRouter(ImgMediaCard);
    {/* 
    <Card className={classes.card} raised={true}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={props.image}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          Search Again
        </Button>
      </CardActions>
    </Card> 
    */}