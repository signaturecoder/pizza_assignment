import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import PizzaDetails from "./PizzaDetails";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useDispatch } from "react-redux";
import { checkoutPizza } from "../redux/actions/checkoutAction";
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    width: 345,
    marginTop: 40,
    boxShadow: " 5px 5px 15px 5px #888888",
  },
  media: {
    height: 200,
  },
  description: {
    color: "#686b78",
    fontSize: 12,
  },
  rating: {
    backgroundColor: "#48c479",
    color: "#fff",
    fontWeight: 500,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  removeLine: {
    textDecoration: "none",
    color: "white",
  },
  subContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  veg: {
    height: '250px',
    width: '250px',
    borderRadius: 50,
    backgroundColor: 'green',
    position: 'absolute',
    top: 0,
    right: 0
  }
});

const PizzaCard = ({
  name,
  description,
  price,
  rating,
  size,
  toppings,
  imgSrc,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState({});
  const [checkedToppings, setCheckedToppings] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [selectedRadioToppings, setSelectedRadioToppings] = useState("");
  const [selectedSizeOption, setSelectedSizeOption] = useState("Regular");

  const handleAdd = () => {
    setOpen(true);
    let updatedQuantity;
    if (quantity === 0) {
      updatedQuantity = quantity + 1;
      setQuantity(updatedQuantity);
    }

    const orderNewPizza = {
      name: name,
      description: description,
      price: price,
      rating: rating,
      size: size,
      orderSize:selectedSizeOption, 
      quantity: updatedQuantity,
      toppings: toppings,
      imgSrc: imgSrc,
    };
    setSelectedPizza(orderNewPizza);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      const updatedQuantity = quantity - 1;
      const newOrderPizza = { ...selectedPizza, quantity: updatedQuantity };
      setQuantity(updatedQuantity);
      setSelectedPizza(newOrderPizza);
    }
  };

  const handleIncrease = () => {
    const updatedQuantity = quantity + 1;
    const newOrderPizza = { ...selectedPizza, quantity: updatedQuantity };
    setQuantity(updatedQuantity);
    setSelectedPizza(newOrderPizza);
  };

  const handleToppingChange = (event) => {
    const updatedToppings = [];
    const topping = { name: event.target.value };
    updatedToppings.push(topping);
    const newOrderPizza = { ...selectedPizza, orderToppings: updatedToppings };
    setSelectedRadioToppings(event.target.value);
    setSelectedPizza(newOrderPizza);
  };

  const handleSizeChange = (event) => {
    const updatedPizzaSize = event.target.value;
    const newOrderPizza = { ...selectedPizza, orderSize: updatedPizzaSize };
    setSelectedSizeOption(updatedPizzaSize);
    setSelectedPizza(newOrderPizza);
  };

  const handleToppingToggle = (value) => () => {
    const currentIndex = checkedToppings.indexOf(value);
    const newChecked = [...checkedToppings];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedToppings(newChecked);
    const newOrderPizza = { ...selectedPizza, orderToppings: newChecked };
    setSelectedPizza(newOrderPizza);
  };

  const handleCheckout = () => {
    dispatch(checkoutPizza(selectedPizza));
    handleClose();
  };

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={imgSrc} title="pizza" />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
          <Box textAlign="left" className={classes.description}>
            {description}
          </Box>
        </Typography>
        <Typography
          className={classes.subContainer}
          variant="body2"
          gutterBottom
        >
          <Box component="span">&#x20B9; {price}</Box>
          <Box component="span" className={classes.rating}>
            <StarRateIcon />
            {rating}
          </Box>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={handleAdd}
          >
            Add{" "}
          </Button>
        </Typography>
      </CardContent>
      <PizzaDetails
        open={open}
        onClose={handleClose}
        size={size}
        toppings={toppings}
        quantity={quantity}
        checked={checkedToppings}
        selectedRadioOption={selectedRadioToppings}
        selectedSizeOption={selectedSizeOption}
        onToppingChange={handleToppingChange}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onToppingToggle={handleToppingToggle}
        onSizeChange={handleSizeChange}
        onCheckout={handleCheckout}
      />
    </Card>
  );
};

export default PizzaCard;
