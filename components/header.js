import Link from 'next/link';


const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  height:'3em',
  minHeight:'20px',
  alignItems:'center',
  width: '100%',
  minWidth: '400px',
  position: 'fixed',
  top: 0,
  backgroundColor: 'white',
};

const logoContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems:'center',
  justifySelf: 'start',
  width:'33%',
}

const logoA = {
  display: 'flex',
  flexDirection: 'row',
  width: '33%',
  minWidth:'30px',
  minHeight:'30px',
  paddingLeft: '30px',
}

const logoImgStyle= {
  alignSelf: 'flex-start',
  maxHeight: '30px',
  maxWidth: '30px',
  paddingLeft: '20%',
}



const menuContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '150px',
  justifySelf:'center',
  width:'33%',
}

const menuItems = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-evenly',
  alignItems: 'center',
}

const socialMediaBox = {
  justifySelf:'end',
  width:'33%',
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
          <a>SHIRTS</a>
        </Link>
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');

          a {
            font-family: 'Oswald', sans-serif;
            text-decoration: none;
          }
          `}
         
        </style>
        </div>
    </div>
    <div style={socialMediaBox}></div>
  </div>
)

export default Header



