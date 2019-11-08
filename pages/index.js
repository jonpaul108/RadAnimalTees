import Layout from '../components/layout';
import Banner from '../components/banner';
import PicGrid from '../components/picGrid';



  const root = {
    flexGrow: 1,
    maxWidth: '50%',
    maxHeight: '75%',
    display: 'flex',
    justifyContent: 'center',
  };


const rootStyle = {
  flexGrow: 1,
  maxWidth: '50%',
  maxHeight: '75%',
  display: 'flex',
  justifyContent: 'center',
  minWidth: '400px',
  marginTop: '1rem',
};

const pics = [
  ['bear'],
  ['bullDog', 'https://www.amazon.com/dp/B07X8MBYTZ'],
  ['cat', 'https: //www.amazon.com/dp/B07WQYQDKZ'],
  ['dogo', 'https://www.amazon.com/dp/B07WXV1WTH'],
  ['elephant', 'https://www.amazon.com/dp/B07WFY42WL'],
  ['tiger'],
  ['wolf', 'https://www.amazon.com/dp/B07WDRQFHR'],
];

const bannerStyle = {
  width: '100%',
  height:'75vh',
  minWidth: '100%',
  minHeight:'75%',
  marginTop: '3.5rem',
  overflow:'hidden',
}

const Index = () => (
  <Layout>
    <Banner bannerStyle={bannerStyle} />
    <PicGrid 
      root={root} 
      rootStyle={rootStyle}
      pics={pics} 
      spacing={3}
    />
  </Layout>
)

export default Index;
