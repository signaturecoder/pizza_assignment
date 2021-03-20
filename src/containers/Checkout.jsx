import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import PizzaQuantity from "../components/PizzaQuantity";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
const Checkout = (props) => {
  const classes = useStyles();
  const checkoutList = useSelector((state) => state.checkoutList);

  return (
    <div>
      i am checkout page
      <List className={classes.root}>
        {checkoutList.map((value) => {
          const labelId = `checkbox-list-label-${value.name}`;

          return (
            <ListItem alignItems="flex-start" key={labelId}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={value.imgSrc} />
              </ListItemAvatar>
              <ListItemText primary={value.name} />
              <Chip size="small" label={value.orderSize} />
              {value.orderToppings.map((topping) => (
                <ListItemText key={topping.name}>{topping.name}</ListItemText>
              ))}
              <ListItemSecondaryAction>
                <PizzaQuantity quantity={value.quantity} />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Checkout;
