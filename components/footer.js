const footerStyle = {
    backgroundColor: 'rgba(85, 25,139,0.8)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexGrow: 1,
    alignItems: 'center',
    textAlign: 'center',
    margin:'auto',
    width: '75%',
    minWidth:'400px',
    height: '40vh',
    minHeight: '5rem',
};

const itemContainer ={
    width: '100%',
    minWidth:'400px',
    margin: 'auto',
    flexGrow: 1,
};

const Footer = () => {

    return (
        <footer style={footerStyle}>
            <div style={itemContainer}>
                <a >CONTACT</a>
                <a ></a>
            </div>
        <style jsx> {`
        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Eczar&display=swap');
            a {
                color: #fff;
                font-family: 'Eczar', serif;
                font-size: 1.5em;
                margin: auto;
            }
        `}
         </style>
        </footer>
    );
};

export default Footer;