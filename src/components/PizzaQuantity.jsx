import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles({
    quantityContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0 15px',
      
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        color: '#3f51b5',
    },
    pizzaQuantity:{
         padding: '0 10px'
    },
    quantity: {
        fontWeight: 700
    }
  });
const PizzaQuantity = ({quantity, onIncrease, onDecrease}) => {
    const classes = useStyles();
    return (
        <div className={classes.quantityContainer}>
             {/* <Box component="span" className={classes.quantity}>Quantity</Box>   */}
            <div className={classes.btnContainer}>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              onClick={onDecrease}
            >
              -
            </Button>
            <Box component="span" className={classes.pizzaQuantity}>{quantity}</Box>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              onClick={onIncrease}
            >
              +
            </Button>
            </div>
        </div>
    )
}

export default PizzaQuantity
