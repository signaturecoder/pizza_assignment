import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListSubheader from "@material-ui/core/ListSubheader";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import PizzaQuantity from "./PizzaQuantity";
const useStyles = makeStyles({
  radioGroup: {
    margin: 10,
  },
});

const PizzaDetails = React.memo((props) => {
  const classes = useStyles();

  const {
    onClose,
    selectedValue,
    open,
    size,
    toppings,
    quantity,
    checked,
    selectedRadioOption,
    selectedSizeOption,
    onRadioChange,
    onIncrease,
    onDecrease,
    onToggle,
    onSizeChange
  } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  // console.log("Checked", checked);
  // console.log("selectedValue", selectedValue);
  return (
    <div className={classes.dialogBox}>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="simple-dialog-title">
          Choose Addons and Toppings{" "}
        </DialogTitle>
        <PizzaQuantity
          quantity={quantity}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {toppings[0].isRadio ? (
              <FormControl component="fieldset" className={classes.radioGroup}>
                <FormLabel component="legend">{toppings[0].title}</FormLabel>
                <RadioGroup
                  aria-label="toppings"
                  name="toppings"
                  value={selectedRadioOption}
                  onChange={onRadioChange}
                >
                  {toppings[0].items.map((topping) => (
                    <FormControlLabel
                      key={topping.name}
                      value={topping.name}
                      control={<Radio />}
                      label={topping.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            ) : (
              <List
                className={classes.root}
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    {toppings[0].title}
                  </ListSubheader>
                }
              >
                {toppings[0].items.map((value) => {
                  const labelId = `checkbox-list-label-${value.name}`;
                  return (
                    <ListItem
                      key={labelId}
                      dense
                      button
                      onClick={onToggle(value)}
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={checked.indexOf(value) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ "aria-labelledby": labelId }}
                          color="primary"
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={value.name} />
                    </ListItem>
                  );
                })}
              </List>
            )}
          </Grid>
          <Grid item xs={6}>
              <FormControl component="fieldset" className={classes.radioGroup}>
                  <FormLabel component="legend">{size[0].title}</FormLabel>
                  <RadioGroup
                    aria-label="size"
                    name="size"
                    value={selectedSizeOption}
                    onChange={onSizeChange}
                  >
                    {size[0].items.map((value) => (
                      <FormControlLabel
                        key={value.size}
                        value={value.size}
                        control={<Radio />}
                        label={value.size}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
});

export default PizzaDetails;
