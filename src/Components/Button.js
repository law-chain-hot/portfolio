import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import driver from '../JS/driverContent'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));




export default function TextButtons() {
  const classes = useStyles();
  const timeDriver = function () {
    setTimeout(function () {
      driver()
    }, 500)
  }
  // const timeDriver = driver();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="secondary" onClick={timeDriver}>
        Intro
      </Button>
    </div>
  );
}
