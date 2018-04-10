import React from 'react';
import Button from 'material-ui/Button/';
import TextField from 'material-ui/TextField/';
import { withStyles } from 'material-ui/styles';
const styles = theme => ({
  textField: {
    display: 'flex',
    margin: theme.spacing.unit,
    width: '50%'
  },
  button: {
    margin: theme.spacing.unit
  }
});

const Form = props => {
  return (
    <form onSubmit={props.getWeather}>
      <TextField
        className={props.classes.textField}
        label="City Name"
        margin="normal"
        name="city"
        type="text"
        InputLabelProps={{ required: true }}
      />
      <TextField
        className={props.classes.textField}
        label="Country Code"
        name="country"
        margin="normal"
        type="text"
        InputLabelProps={{ required: true }}
      />
      <Button
        className={props.classes.button}
        color="primary"
        type="submit"
        variant="raised"
      >
        What is the weather?
      </Button>
    </form>
  );
};

export default withStyles(styles)(Form);
