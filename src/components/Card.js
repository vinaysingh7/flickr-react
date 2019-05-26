import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    maxHeight: 400,
    maxWidth: 250,
    marginTop: "100px",
    marginBottom: "50px",
    alignContent: "center",
    alignItems: "center",
    justify: "center",
    
  }
});

function ImgMediaCard(props) {
  const classes = useStyles();
  
  return (
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
        <Button size="small" color="primary" >
          Search Again
        </Button>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  image: PropTypes.object.isRequired,
  click: PropTypes.object.isRequired,
};

export default ImgMediaCard;
