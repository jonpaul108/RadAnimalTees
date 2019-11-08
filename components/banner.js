import Link from 'next/Link';
import { Hidden } from '@material-ui/core';



const Banner = ({bannerStyle, bannerImg}) => (
  <div className='banner' style={ bannerStyle }> 
        <img src={`/static/${bannerImg}.jpg`} alt='giraffeBanner'></img>
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
