import React, { useEffect, useState } from "react";
import axios from "axios";
import PizzaCard from "../components/PizzaCard";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import { useDispatch, useSelector } from "react-redux";
import { loadPizzas } from "../redux/actions/pizzaAction";
const useStyles = makeStyles((theme) => ({
  cardList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  menu: {
    display: "flex",
    justifyContent: "space-around",
    background: "#ccc",
    width: "100%",
    height: "25%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const PizzaList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pizzaList = useSelector((state) => state.pizzas);
  const [isVeg, setIsVeg] = useState(false);
  const [order, setOrder] = useState("asc");
  const [ratingOrder, setRatingOrder] = useState("low");
  // const [filteredPizzaList, setFilteredPizzaList] = useState(pizzaList);
  const handleChange = (event) => {
    setIsVeg(event.target.checked);
    const filteredList = pizzaList.filter((pizza) => pizza.isVeg);
    console.log("filterd", filteredList);
    // setFilteredPizzaList(filteredList);
  };

  useEffect(() => {
    dispatch(loadPizzas());
  }, []);

  //   console.log("Pizzas", filteredPizzaList);
  return (
    <div>
      <div className={classes.menu}>
        <FormControlLabel
          control={
            <Switch
              checked={isVeg}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Veg"
          labelPlacement="start"
        />

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Sort By Price
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={order}
            onChange={handleChange}
            label="Sort By"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"asc"}>Price: Low to High</MenuItem>
            <MenuItem value={"desc"}>Price: High to Low</MenuItem>
          </Select>
        </FormControl>
        <FormControl  className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Sort By Rating
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={ratingOrder}
            onChange={handleChange}
            label="Sort By"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"low"}>Rating: Low to High</MenuItem>
            <MenuItem value={"high"}>Rating: High to Low</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.cardList}>
        {pizzaList &&
          pizzaList.map((pizza) => {
            return (
              <PizzaCard
                key={pizza.id}
                name={pizza.name}
                description={pizza.description}
                imgSrc={pizza.img_url}
                price={pizza.price}
                rating={pizza.rating}
                size={pizza.size}
                toppings={pizza.toppings}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PizzaList;
