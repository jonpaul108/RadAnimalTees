import Layout from '../components/layout';
import Banner from '../components/banner';
import PicGrid from '../components/picGrid';
import filter from '../utils/filter';
import pics from '../display/pics';

const root = {
  flexGrow: 1,
  maxWidth: '50%',
  maxHeight: '75%',
  display: 'flex',
  justifyContent: 'center',
};


const rootStyle = {
flexGrow: 1,
maxWidth: '75%',
maxHeight: '75%',
display: 'flex',
justifyContent: 'center',
minWidth: '400px',
marginTop: '1rem',
};

const bannerStyle = {
width: '100%',
height:'75vh',
minWidth: '100%',
minHeight:'75%',
marginTop: '3.5rem',
overflow:'hidden',
}

const Shirts = ({filterWord}) => {

  const picItems = filter(pics, 'mens');
  console.log(picItems);

  return (
    <Layout>
     <Banner bannerStyle={bannerStyle} bannerImg={'collage'} />
     <PicGrid 
        root={root}
        rootStyle={rootStyle} 
        spacing={1}
        pics={picItems}
        xs={3}
        />
    </Layout>
  );
};

export default Shirts;
