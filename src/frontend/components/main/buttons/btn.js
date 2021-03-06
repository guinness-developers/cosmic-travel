import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  cssRoot: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    width: '100px',
    height: '60px',
    fontSize: 18,
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
  bootstrapRoot: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: '18px',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
});

function CosmicButton(props) {
  const { classes } = props;
  return (
      <Button variant="contained" href="#contained-buttons" className={classNames(classes.margin, classes.cssRoot)}>
        {props.buttonName}
      </Button>
  );
}

CosmicButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CosmicButton);
