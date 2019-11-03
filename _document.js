import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import 'styles/global-styles';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);

    return (
      <Html>
        <Head >
        <meta charset="utf-8" >
        <meta name='author' content='Jonathan McNamara'>
        <meta name='description' content='The Rad animal Website sees to distribute awesome t-shirts while supporting the rejuvenation of habitats and endangered species around the world.'>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Rad Animal T-shirt Commerce Page</title>

        </Head>
        <body style="width:100%;height:100%;">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
