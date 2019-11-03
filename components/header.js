import Link from 'next/link';


const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  minHeight:'3em',
  alignItems:'center',
  minWidth: '100%',
  position: 'fixed',
  top: 0,
  backgroundColor: 'white',
};

const logoStyle= {
  alignSelf: 'flex-start',
  maxHeight: '8%',
  maxWidth: '8%',
  paddingLeft: '20%',
}


const logoContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems:'center',
}

const logoA = {
  display: 'flex',
  flexDirection: 'row',
  minWidth: '33%',
  paddingLeft: '5%',
}

const menuContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  minWidth: '33%',
}

const ghostDiv = {
  minWidth: '33%',
}
const Header = () => (
  <div className='container' style={containerStyle}>
    <div style={logoContainerStyle}>
      <Link href="/" >
        <a className="logo" style={logoA}>
          <img src="./static/radALogo.png" alt="logo" style={logoStyle} />
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
    <div style={ghostDiv}></div>
  </div>
)

export default Header
