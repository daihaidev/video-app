import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#17addf" />
          <meta name="description" content="TechTee is a globally recognised digital agency and software house specialising in exceptional software research, design, and development." />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet" />
          <link rel="icon" type="image/x-icon" href="https://res.cloudinary.com/du9qcctlw/image/upload/v1617023200/techtee-website/techtee_cropped.png" />
          <link rel="manifest" href="/manifest.json" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          {/* <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "TechTee",
              "url": "https://techtee.co/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://techtee.co/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          }} /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}