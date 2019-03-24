import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function RegisterButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" href="#contained-buttons" className={classes.button}>
        Register
      </Button>
    </div>
  );
}

RegisterButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterButton);
