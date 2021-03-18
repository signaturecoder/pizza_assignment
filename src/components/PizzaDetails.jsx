import React from "react";
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
const useStyles = makeStyles({
  dialogBox: {
    flexGrow: 1,

  },
});

const PizzaDetails = React.memo((props) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const { onClose, selectedValue, open, size, toppings } = props;
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  console.log("Size", size);
  console.log("toppings", toppings[0]);
  return (
    <div className={classes.dialogBox}>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="simple-dialog-title">
          Select Addons and Toppings{" "}
        </DialogTitle>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {toppings[0].isRadio ? (
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  {toppings[0].title.toUpperCase()}
                </FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={value}
                  onChange={handleChange}
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
                    {toppings[0].title.toUpperCase()}
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
                      onClick={handleToggle(value)}
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={checked.indexOf(value) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ "aria-labelledby": labelId }}
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
            <List
              className={classes.root}
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  {size[0].title.toUpperCase()}
                </ListSubheader>
              }
            >
              {size[0].items.map((value) => {
                const labelId = `checkbox-list-label-${value.size}`;
                return (
                  <ListItem
                    key={labelId}
                    dense
                    button
                    onClick={handleToggle(value)}
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={value.size} />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
});

export default PizzaDetails;
