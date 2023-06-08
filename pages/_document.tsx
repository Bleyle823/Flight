import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Flight 🐱‍🏍</title>
          <meta
            name="description"
            content="Lorem ipsum."
          />
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="Flight" />
          <meta
            name="og:description"
            property="og:description"
            content="Lorem ipsum."
          />
          <meta
            property="og:site_name"
            content="Flight Personal Portfolio"
          />

          <meta name="twitter:card" content="It is my personal portfolio" />
          <meta name="twitter:title" content="Flight" />
          <meta
            name="twitter:description"
            content="Lorem ipsum."
          />
          <meta name="twitter:site" content="@propernoun" />
          <meta name="twitter:creator" content="@propernounco" />

          <meta
            property="og:image"
            content=""
          />
          <meta
            name="twitter:image"
            content=""
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content=""
          />
          <meta property="og:title" content="Flight" />
          <meta
            property="og:description"
            content="Lorem ipsum."
          />
          <meta
            property="og:image"
            content=""
          />
          <meta property="og:site_name" content="Flight" />
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content=""
          />
          <meta property="twitter:title" content="Flight" />
          <meta
            property="twitter:description"
            content="Lorem ipsum."
          />
          <meta
            property="twitter:image"
            content=""
          />
          <meta name="robots" content="Index" />
          <link rel="manifest" href="/manifest.json" />

          <meta charSet="utf-8" />
        </Head>
        <body className=" bg-white dark:bg-gradient-to-r dark:from-[#1F2937]  dark:to-[#111827] min-h-screen w-full relative text-gray-600 dark:text-white ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
