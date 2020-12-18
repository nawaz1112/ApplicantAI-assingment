import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.orange[600],
    height: 56,
    width: 56
  }
}));

const TasksProgress = ({ className, ...rest }) => {
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
              MTD order
            </Typography>
            <Typography
              color="black"
              gutterBottom
              variant="h6"
            >
              400
            </Typography>
            <Typography
              color="black"
              gutterBottom
              variant="h6"
            >
              Last Month Order
            </Typography>
            <Typography
              color="black"
              gutterBottom
              variant="h6"
            >
              200
            </Typography>
          </Grid>

      </CardContent>
    </Card>
  );
};

TasksProgress.propTypes = {
  className: PropTypes.string
};

export default TasksProgress;
