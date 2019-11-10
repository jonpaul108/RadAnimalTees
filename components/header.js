import Link from 'next/link';


const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  minHeight:'4rem',
  alignItems:'center',
  width: '100%',
  minWidth: '400px',
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: 'white',
};

const logoContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems:'center',
  flex: 1,
  marginRight: 'auto',
}

const logoA = {
  display: 'flex',
  flexDirection: 'row',
  width: '33%',
  minWidth:'30px',
  minHeight:'30px',
  margin: 'auto',
}

const logoImgStyle= {
  alignSelf: 'flex-start',
  maxHeight: '30px',
  maxWidth: '30px',
  position: 'relative',
  right: '50%',
}

const menuContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  margin:'auto',
  left: '10px',
  position:'relative',
}

const menuItems = {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
}

const socialMediaBox = {
  justifySelf:'end',
  flex: 1,
  display: 'flex',
  margin: 'auto',
  justifyContent: 'center',
}

const socialIcon = {
margin: '10px',
}

const iconImg = {
  maxHeight: '2rem',
}
const Header = () => (
  <div className='container' style={containerStyle}>
    <div style={logoContainerStyle}>
      <Link href="/" >
        <a className="logo" style={logoA}>
          <img src="./static/radALogo.png" alt="logo" style={logoImgStyle} />
        </a>
      </Link>
    </div>
      <div style={menuContainer}>
      
        <Link href="/" >
          <a title="home">HOME</a>
        </Link>
        <Link href="/about">
          <a  title="about">ABOUT</a>
        </Link>
        <Link href="/shirts">
          <a title="shirts">SHIRTS
          </a>
        </Link>
        <Link href="/contact">
          <a title="contact">CONTACT</a>
        </Link>
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');

          a {
            font-family: 'Oswald', sans-serif;
            text-decoration: none;
            margin: auto
          }
          `}
         
        </style>

    </div>
    <div style={socialMediaBox} className='socialMediaBox'>
        <a href='https://www.facebook.com/radanimalapparel/' className='socialIcon' style={socialIcon}><img className='iconImg' style={iconImg} src='./static/facebookIconforWeb.png' alt='facebookIcon' ></img></a>
        <a href='https://www.pinterest.it/radanimalapparel/' className='socialIcon' style={socialIcon}><img className='iconImg' style={iconImg} src='./static/pinterestIconforWeb.png' alt='pinterestIcon' ></img></a>
        <a href='https://www.instagram.com/rad_animal_apparel/' className='socialIcon' style={socialIcon}><img className='iconImg'style={iconImg} src='./static/instagramIconForWeb.png' alt='instagramIcon' ></img></a>
    </div>
  </div>
)

export default Header



