import Layout from '../components/layout';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles
} from '@material-ui/core/styles';

const typeContainer = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  maxWidth: '60%',
  minWidth: '200px',
}


const About = () => (
  <Layout>
    <div className='typeContainer' style={typeContainer}>
      <h2>Rad Animal</h2>
      <h3>About Us</h3>
      <Typography>Clothing to show off and save the world. The concept behind Rad Animal began in 2018 when designer Jonathan McNamara wanted a stylish, certified healthy for the body and the earth t-shirt that showed his love of being outdoors, animals, and the world. Appealing to those looking for modern touch in their outdoor clothing, our apparel is popular with men and women of all ages who share a belief in a healthy world for themselves and everyone.</Typography>
    </div>
  </Layout>
)

export default About
