import Document, { Html, Head, Main, NextScript } from "next/document";

// The default structure which the document will have if not overridden.
// If you wish to override it, you need to recreate it as shown below:

class MyDocument extends Document {
  render() {
    return (
      <>
        {/* add html component as wrapper */}
        <Html lang="en">
          <Head />
          <body>
            {/* The div below will be created outside the application. */}
            <div id="overlays" />
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    );
  }
}

export default MyDocument;
