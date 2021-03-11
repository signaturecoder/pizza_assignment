import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      marginTop: 40,
      boxShadow: ' 5px 5px 15px 5px #888888',
    },
    media: {
      height: 200,
    },
    removeLine: {
      textDecoration: 'none',
      color: 'white',
    },
  });

const PizzaCard = ({name, description, price, rating, size, toppings, imgSrc}) => {

    const classes = useStyles();

    const handleBuy = () => {

    }
return (
    <Card className={classes.card}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={imgSrc}
        title="pizza"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {name}
        </Typography>
        <Typography variant="h6" component="h6">
          <Box textAlign="left">Desciption : {description}</Box>
          <Box textAlign="left">Price : Rs { price}</Box>
          <Box textAlign="left">
            Rating : <Rating name="read-only" value={rating} readOnly />
          </Box>
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
    <Button variant="contained" color="primary" onClick={handleBuy}>Add </Button>
    </CardActions>
  </Card>
)
}

export default PizzaCard;