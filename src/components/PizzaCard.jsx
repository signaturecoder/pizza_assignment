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
      height: 140,
    },
    removeLine: {
      textDecoration: 'none',
      color: 'white',
    },
  });

const PizzaCard = () => {

    const classes = useStyles();

    const handleBuy = () => {

    }
return (
    <Card className={classes.card}>
    <CardActionArea>
      <Typography gutterBottom variant="h5" component="h2">
       helo
      </Typography>
      {/* <CardMedia
        className={classes.media}
        image={props.data.cardImage}
        title="Contemplative Reptile"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        Pizza
        </Typography>
        <Typography variant="h6" component="h6">
          <Box textAlign="left">Category : </Box>
          <Box textAlign="left">Price :</Box>
          <Box textAlign="left">Discount : </Box>
          <Box textAlign="left">
            Rating :
            <Rating name="read-only" value={5} readOnly />
          </Box>
          <Box textAlign="left">Comments : </Box>
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>

      <Button label="Buy And Share" handleClick={handleBuy} />
    </CardActions>
  </Card>
)
}

export default PizzaCard;