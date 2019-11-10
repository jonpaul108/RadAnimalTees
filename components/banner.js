

const Banner = ({bannerStyle, bannerImg}) => (
  <div className='banner' style={ bannerStyle }> 
        <img src={`/static/${bannerImg}.jpg`} alt='giraffeBanner'></img>
        <style jsx>{`
          img {
            width: 100%;
            height: auto;
            transform: ''
          }

          div:after {
            background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), );
          }
        `}</style>
        
  </div>
);

export default Banner;
