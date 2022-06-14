import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap" rel="stylesheet"/> 
      <link rel="stylesheet" href="/lib/css/bootstrap.min.css" type="text/css"/>
      <link rel="stylesheet" href="/lib/css/font-awesome.min.css" type="text/css"/>
      <link rel="stylesheet" href="/lib/css/elegant-icons.css" type="text/css"/>
      <link rel="stylesheet" href="/lib/css/nice-select.css" type="text/css"/>
      <link rel="stylesheet" href="/lib/css/jquery-ui.min.css" type="text/css"/>
      <link rel="stylesheet" href="/lib/css/owl.carousel.min.css" type="text/css"/>
      <link rel="stylesheet" href="/lib/css/slicknav.min.css" type="text/css"/>
      <link rel="stylesheet" href="/lib/css/style.css" type="text/css"/>

      <script type="text/javascript" src="/lib/js/jquery-3.3.1.min.js"></script>
      <script type="text/javascript" src="/lib/js/bootstrap.min.js"></script>
      <script type="text/javascript" src="/lib/js/jquery.nice-select.min.js"></script>
      <script type="text/javascript" src="/lib/js/jquery-ui.min.js"></script>
      <script type="text/javascript" src="/lib/js/jquery.slicknav.js"></script>
      <script type="text/javascript" src="/lib/js/mixitup.min.js"></script>
      <script type="text/javascript" src="/lib/js/owl.carousel.min.js"></script>
      <script type="text/javascript" src="/lib/js/mainW.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
         {/* Site Tag
            <Script src="lib/js/jquery-3.3.1.min.js" strategy="beforeInteractive"/>
            <Script src="lib/js/bootstrap.min.js" strategy="beforeInteractive"/>
            <Script src="lib/js/jquery.nice-select.min.js" strategy="beforeInteractive"/>
            <Script src="lib/js/jquery-ui.min.js" strategy="beforeInteractive"/>
            <Script src="lib/js/jquery.slicknav.js" strategy="beforeInteractive"/>
            <Script src="lib/js/mixitup.min.js" strategy="beforeInteractive"/>
            <Script src="lib/js/owl.carousel.min.js" strategy="beforeInteractive"/>
            <Script src="lib/js/main.js" strategy="beforeInteractive" /> */}
      </body>
    </Html>
  );
}