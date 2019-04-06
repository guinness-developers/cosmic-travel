import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class OutlinedTextFields extends React.Component {
  state = {
    firstName: 'First Name',
    lastName: 'Last Name',
    age: '',
  };

  handleChange = name => event => {
    this.setState({
      [firstName]: event.target.value,
    });
  };


  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('firstName')}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('lastName')}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />

        <TextField
          required
          id="outlined-required"
          label="Username"
          defaultValue="username"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />

      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
