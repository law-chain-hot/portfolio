import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import driver from '../JS/driverContent'
import mkGuide from '../JS/testMkGuide'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  btn: {
    textTransform: 'none'
  }
}));




export default function TextButtons() {
  const classes = useStyles();
  const timeDriver = function () {
    setTimeout(function () {
      driver()
    }, 500)
  }
  const timeMKGuide = function () {
    setTimeout(function () {
      mkGuide()
    }, 500)
  }

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="secondary" className={classes.btn} onClick={timeDriver}>
        Bug Display: Driver.js
      </Button>
      <Button variant="outlined" color="secondary" className={classes.btn} onClick={timeMKGuide}>
        Bug Free: MK-Guide.js
      </Button>
    </div>
  );
}
