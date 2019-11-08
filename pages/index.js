import Layout from '../components/layout';
import Banner from '../components/banner';
import PicGrid from '../components/picGrid';
import pics from '../display/pics';



  const root = {
    flexGrow: 1,
    maxWidth: '90%',
    maxHeight: '75%',
    display: 'flex',
    justifyContent: 'center',
  };


const rootStyle = {
  flexGrow: 1,
  maxWidth: '90%',
  maxHeight: '90%',
  display: 'flex',
  justifyContent: 'center',
  minWidth: '400px',
  marginTop: '1rem',
  paddingBottom: '10px'
};

const bannerStyle = {
  width: '100%',
  height:'75vh',
  minWidth: '100%',
  minHeight:'75%',
  marginTop: '3.5rem',
  overflow:'hidden',
};

const mainStyle = {
  backgroundColor: '#fff',
  width:'75%',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '10px',
  minWidth:'400px',
};

const Index = () => (
  <Layout>
    <Banner bannerStyle={bannerStyle} bannerImg={'giraffeBanner'} />
  <main style={mainStyle}>
   <PicGrid 
      root={root} 
      rootStyle={rootStyle}
      pics={pics} 
      spacing={3}
      xs={4}
    />
  </main>
  
  </Layout>
)

export default Index;
