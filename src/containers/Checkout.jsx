import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import PizzaQuantity from "../components/PizzaQuantity";
import Chip from "@material-ui/core/Chip";
import { increaseQuantity } from "../redux/actions/checkoutAction";
import Notification from "../components/Notification";



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  cover: {
    width: 250,
  },
  chip: {
    margin: 5,
  },
  subtitle: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  price: {
    color: "green",
    fontWeight: 600,
  },
  controls: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  }
}));
const Checkout = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const checkoutList = useSelector((state) => state.checkoutList);
  const [open, setOpen] = React.useState(false);

  const handleOrder = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleIncrease = () => {
    // const updatedQuantity = checkoutList[0].quantity;
    // dispatch(increaseQuantity(updatedQuantity));
  };

  const handleDecrease = () => {};
  console.log("Checkout", checkoutList);
  if (checkoutList.length === 0)
    return <p>No Items Available, Please Add Some...</p>;
  return (
    <div>
      <Typography component="h5" variant="h5">
        Checkout
      </Typography>
      <List className={classes.root}>
        {checkoutList.map((value) => {
          const labelId = `checkbox-list-label-${value.name}`;

          return (
            <Card className={classes.card} key={labelId}>
              <CardMedia
                className={classes.cover}
                image={value.imgSrc}
                title="Live from space album cover"
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {value.name}
                  </Typography>
                  <div className={classes.subtitle}>
                    <Typography variant="subtitle1" className={classes.price}>
                      <Box component="span">
                        &#x20B9; {value.price * value.quantity}
                      </Box>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      <Chip size="small" label={value.orderSize} />
                    </Typography>
                  </div>
                  <div className={classes.chip}>
                    {value.orderToppings &&
                      value.orderToppings.map((topping) => (
                        <Chip
                          size="small"
                          label={topping.name}
                          key={topping.name}
                        />
                      ))}
                  </div>
                </CardContent>
                <div className={classes.controls}>
                  <PizzaQuantity
                    quantity={value.quantity}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                  />
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    onClick={handleOrder}
                  >
                    Order Now
                  </Button>
                  <Notification onClose={handleClose} open={open}>Order Placed</Notification>
                </div>
              </div>
            </Card>
          );
        })}
      </List>
    </div>
  );
};

export default Checkout;
