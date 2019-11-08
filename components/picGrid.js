import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridItem from './gridItem';


const GridLayout = ({rootStyle, spacing, pics, root, xs}) => {

  const useStyles = makeStyles(theme => ({
    root: root,
  }));


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
      <GridItem key={`${index}`} img={`${image[0]}.png`} lnk={image[1]} xs={xs}>
      </GridItem>
    ))}
  </Grid>
  </div>
  )
};

export default GridLayout;