import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
link: {
  textDecoration: 'none',
  color: '#fff'
}

}));

export default function Header() {
  const classes = useStyles();
  return (
    <div >
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <Typography variant="h6" >
            <Link to="/" className={classes.link}>Pizza</Link>
          </Typography>
          <Link to="/checkout" className={classes.link}><ShoppingCartIcon /></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
