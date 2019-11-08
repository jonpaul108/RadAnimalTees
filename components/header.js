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
  flexGrow: 1,
  margin: 'auto',
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
  margin: 'auto',
  position: 'relative',
  right: '50%',
}

const menuContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  justifySelf:'center',
  margin: 'auto',
  flexGrow: 1,
}

const menuItems = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  margin: 'auto',
}

const socialMediaBox = {
  justifySelf:'end',
  flexGrow: 1,
  margin: 'auto',
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
        <div style={menuItems}>
        <Link href="/" >
          <a title="home">HOME</a>
        </Link>
        <Link href="/about">
          <a  title="about">ABOUT</a>
        </Link>
        <Link href="/shirts">
          <a>SHIRTS
          </a>
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
    </div>
    <div style={socialMediaBox}>
      <a><img></img></a>
      <a><img></img></a>
      <a><img></gim></a>
    </div>
  </div>
)

export default Header



