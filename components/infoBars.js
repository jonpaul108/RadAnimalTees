import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    alignItems: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    alignSelf: 'center',
    maxWidth: '90%',
  },
  root: {
    flexGrow: 1,
    minWidth: '75%',
    maxWidth: '75%',
    maxHeight: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: '3%',
  },
  typography: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '75%',
    maxWidth: '90%',
  }

}));

const Info = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid
      container
      spacing={3}
      direction='row'
      justify='center'
      alignItems='center'
      >

      <Grid item key='1' justify='center' alignItems='center'>
        <Paper className={classes.paper} >
          <Typography>This is the first text</Typography>
        </Paper>
      </Grid>
      <Grid item key='2' justify='center' alignItems='center'>
        <Paper className={classes.paper} >
          <Typography>This is the second text hahahahahahahaha </Typography>
        </Paper>
      </Grid>
      <Grid item key='3' justify='center' alignItems='center'>
        <Paper className={classes.paper} >
          <Typography className={classes.typography}>This is the third text</Typography>
        </Paper>
      </Grid>
      </Grid>
    </div>
  )
}

export default Info;