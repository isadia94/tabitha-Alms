import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
  } from "next/document";
  
  class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head />
          <link
            rel="preload"
            href="/font/IvyMode-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/font/Poppins/Poppins-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/font/Magenda/Magenda.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
  
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;