import Layout from '../components/layout';
import ShirtPost from '../components/shirtPost';
import picGrid from '../components/picGrid';

const pics = {
  
}

const gridStyles={

}

const Shirts = () => (
  <Layout>
    <ul>
      <ShirtPost title='shirt1'/>
      <ShirtPost title='shirt2'/>
      <ShirtPost title='shirt3'/>
    </ul>
  </Layout>
)

export default Shirts;
