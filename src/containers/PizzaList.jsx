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
import Checkbox from "@material-ui/core/Checkbox";
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
  const [allChecked, setAllChecked] = useState(true);
  const [order, setOrder] = useState("");
  const [ratingOrder, setRatingOrder] = useState("");
  const [filteredPizzaList, setFilteredPizzaList] = useState([]);

  const handlePriceChange = (event) => { 
    const selectedValue = event.target.value;
    const previousList = JSON.parse(JSON.stringify(filteredPizzaList));
    setOrder(selectedValue);
    if(selectedValue === 'none'){
      setFilteredPizzaList(pizzaList);
    } else if( selectedValue === 'asc'){
      const sortedList = previousList.sort((a, b) => (a.price > b.price) ? 1 : -1);
      setFilteredPizzaList(sortedList);
    } else if(selectedValue === 'desc') {
      const sortedList = previousList.sort((a, b) => (a.price < b.price) ? 1 : -1);
      setFilteredPizzaList(sortedList);
    }
   
  };

  const handleRatingChange = (event) => {
    const selectedValue = event.target.value;
    const previousList = JSON.parse(JSON.stringify(filteredPizzaList));
    setRatingOrder(selectedValue);
    if(selectedValue === 'none') {
      setFilteredPizzaList(pizzaList);
    } else if(selectedValue === 'low') {
      const sortedList = previousList.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
      setFilteredPizzaList(sortedList);
    } else if(selectedValue === 'high') {
      const sortedList = previousList.sort((a, b) => (a.rating < b.rating) ? 1 : -1);
      setFilteredPizzaList(sortedList);
    }
  }

  const handleToggleChange = (event) => {
    const toggleChecked = event.target.checked;
    setIsVeg(toggleChecked);
    setAllChecked(false);
    setFilteredPizzaList(() =>
    pizzaList.filter((pizza) => pizza.isVeg === toggleChecked)
    );
  }

  const handleCheckboxChange = (event) => {
    setAllChecked(event.target.checked);
    setFilteredPizzaList(pizzaList);
  };

  useEffect(() => {
    dispatch(loadPizzas());
    setFilteredPizzaList(pizzaList);
  }, []);

  useEffect(() => {
    setFilteredPizzaList(pizzaList);
  }, [pizzaList]);

  if (filteredPizzaList.length === 0) return <p>Loading...</p>;

  return (
    <div>
      <div className={classes.menu}>
        <FormControlLabel
          control={
            <Checkbox
              checked={allChecked}
              color="primary"
              onChange={handleCheckboxChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          }
          label="All"
        />
        <FormControlLabel
          disabled={allChecked}
          control={
            <Switch
              checked={isVeg}
              onChange={handleToggleChange}
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
            onChange={handlePriceChange}
            label="Sort By"
          >
            <MenuItem value={"none"}>
              None
            </MenuItem>
            <MenuItem value={"asc"}>Price: Low to High</MenuItem>
            <MenuItem value={"desc"}>Price: High to Low</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Sort By Rating
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={ratingOrder}
            onChange={handleRatingChange}
            label="Sort By"
          >
            <MenuItem value={"none"}>
              None
            </MenuItem>
            <MenuItem value={"low"}>Rating: Low to High</MenuItem>
            <MenuItem value={"high"}>Rating: High to Low</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.cardList}>
        {filteredPizzaList &&
          filteredPizzaList.map((pizza) => {
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
