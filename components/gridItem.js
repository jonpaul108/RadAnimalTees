import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    alignItems: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
  },
}));

const GridItem = ({
  img,
  lnk,
  xs,
}) => {
  const classes = useStyles();
  return (
    <Grid key={`${img}`} item xs={xs} >
        <Paper className={classes.paper}>
          <a href={lnk}>
            <img src={`/static/${img}`}/>
          </a>
        <style jsx>{`
            img {
              max-height: 100%;
              max-width: 100%;
            }
            `} </style>
    </Paper>
    </Grid>
  )
};

export default GridItem;