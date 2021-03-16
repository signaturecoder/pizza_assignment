import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import PizzaDetails from "./PizzaDetails";
import StarRateIcon from "@material-ui/icons/StarRate";
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
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const handleAdd = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
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
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        size={size}
        toppings={toppings}
      />
    </Card>
  );
};

export default PizzaCard;
