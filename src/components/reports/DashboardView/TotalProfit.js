import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.indigo[600],
    height: 56,
    width: 56
  }
}));

const TotalProfit = ({ className, ...rest }) => {
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
              MTD order amount -
            </Typography>
            <Typography
              color="black"
              gutterBottom
              variant="h6"
            >
              65000
            </Typography>
            <Typography
              color="black"
              gutterBottom
              variant="h6"
            >
              Last month amount -
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

TotalProfit.propTypes = {
  className: PropTypes.string
};

export default TotalProfit;
