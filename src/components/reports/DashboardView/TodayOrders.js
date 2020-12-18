import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

const Budget = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        
          <Grid item>
            <Typography
              color="black"
              gutterBottom
              variant="h6"
            >
              Today's Orders -
            </Typography>
            <Typography
              color="black"
              gutterBottom
              variant="h6"
            >
              200
            </Typography>
            <Typography
              color="black"
              gutterBottom
              variant="h6"
            >
              
              Current week order-
            </Typography>
            <Typography
              color="black"
              gutterBottom
              variant="h6"
            >
              450
            </Typography>
          </Grid>
        
      </CardContent>
    </Card>
  );
};

Budget.propTypes = {
  className: PropTypes.string
};

export default Budget;
