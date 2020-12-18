import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
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
    backgroundColor: colors.green[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.green[900]
  },
  differenceValue: {
    color: colors.green[900],
    marginRight: theme.spacing(1)
  }
}));

const TotalCustomers = ({ className, ...rest }) => {
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
              Today’s order amount-
            </Typography>
            <Typography
              color="black"
              gutterBottom
              variant="h6"
            >
              20000
            </Typography>
            <Typography
              color="black"
              gutterBottom
              variant="h6"
            >Current Week amount-
            </Typography>
            <Typography
              color="black"
              gutterBottom
              variant="h6"
            >
              45000
            </Typography>
          </Grid>
      </CardContent>
    </Card>
  );
};

TotalCustomers.propTypes = {
  className: PropTypes.string
};

export default TotalCustomers;
