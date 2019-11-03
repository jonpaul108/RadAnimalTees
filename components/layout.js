import Header from './header';
import Head from 'next/head'

const layoutStyle = {
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 1,
  justifyContent: 'space-evenly',
};

const Layout = props => (
  <div style={layoutStyle}>
  <Head>
    <meta charset="utf-8" />
    <meta name='author' content='Jonathan McNamara'/>
    <meta name='description' content='The Rad animal Website sees to distribute awesome t-shirts while supporting the rejuvenation of habitats and endangered species around the world.'/>
    <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
  </Head>
  <style jsx global>{`
    body {
      min-height: 100%;
      width:100%;
    }
    `}
    </style>
    <Header />
    {props.children}
  </div>
);

export default Layout;
