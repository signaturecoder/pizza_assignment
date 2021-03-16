import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PizzaCard from '../components/PizzaCard';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import {loadPizzas} from '../redux/actions/pizzaAction'
const useStyles = makeStyles({
    cardList: {
     display: 'flex',
     flexWrap: 'wrap',
     justifyContent: 'space-around'
    },
  });

const PizzaList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const pizzaList = useSelector((state) => state.pizzas);
    // const [pizzaList, setPizzaList] = useState([])
    useEffect(() => {
        // axios.get('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68').then(res => {
        //     console.log(res);
        //     const pizzaListRes = res.data;
        //     setPizzaList(pizzaListRes);
        // })
        dispatch(loadPizzas())
    }, [])

    console.log('Pizzas', pizzaList);
    return (
        <div className={classes.cardList}>
            {pizzaList && pizzaList.map(pizza => {
               return  <PizzaCard 
               key={pizza.id}
               name={pizza.name} 
               description={pizza.description}
               imgSrc={pizza.img_url}
               price={pizza.price}
               rating={pizza.rating}
               size={pizza.size}
               toppings={pizza.toppings}
               />
            })}
        </div>
    )
}

export default PizzaList;
