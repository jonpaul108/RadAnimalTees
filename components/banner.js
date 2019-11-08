import Link from 'next/Link';
import { Hidden } from '@material-ui/core';



const Banner = ({bannerStyle}) => (
  <div className='banner' style={ bannerStyle }> 
        <img src='/static/giraffeBanner.jpg' alt='giraffeBanner'></img>
        <style jsx>{`
          img {
            width: 100%;
            height: auto;
            transform: ''
          }
        `}</style>
  </div>
);

export default Banner;
