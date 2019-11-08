import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GridItem from './gridItem';




// const pics = [
//   ['bear'],
//   ['bullDog', 'https://www.amazon.com/dp/B07X8MBYTZ'],
//   ['cat', 'https: //www.amazon.com/dp/B07WQYQDKZ'],
//   ['dogo', 'https://www.amazon.com/dp/B07WXV1WTH'],
//   ['elephant', 'https://www.amazon.com/dp/B07WFY42WL'],
//   ['tiger'],
//   ['wolf', 'https://www.amazon.com/dp/B07WDRQFHR'],
// ];

const GridLayout = ({rootStyle, spacing, pics, root}) => {

  const useStyles = makeStyles(theme => ({
    root: root,
  }));

  const classes = useStyles();

  return (
    <div className='rootStyle' style={rootStyle}>
  <Grid
    container
    spacing={spacing}
    direction="row"
    justify="center"
    alignItems="center"
    >
    {pics.map((image, index) => (
      <GridItem key={`${index}`} img={`${image[0]}.png`} lnk={image[1]}>
      </GridItem>
    ))}
  </Grid>
  </div>
  )
};

export default GridLayout;