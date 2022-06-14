import Head from 'next/head';
import '../styles/globals.css'   

function MyApp({ Component, pageProps }) {
  return (
      <>
      <Head>

        <meta charset="UTF-8"/>
        <meta name="keywords" content="Ogani, unica, creative, html"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>

        {/* Font */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap" rel="stylesheet"/>  */}
        {/* CSS */}
        {/* <link rel="stylesheet" href="lib/css/bootstrap.min.css" type="text/css"/>
        <link rel="stylesheet" href="lib/css/font-awesome.min.css" type="text/css"/>
        <link rel="stylesheet" href="lib/css/elegant-icons.css" type="text/css"/>
        <link rel="stylesheet" href="lib/css/nice-select.css" type="text/css"/>
        <link rel="stylesheet" href="lib/css/jquery-ui.min.css" type="text/css"/>
        <link rel="stylesheet" href="lib/css/owl.carousel.min.css" type="text/css"/>
        <link rel="stylesheet" href="lib/css/slicknav.min.css" type="text/css"/>
        <link rel="stylesheet" href="lib/css/style.css" type="text/css"/> */}

 
 
      </Head>
      <Component {...pageProps} />
      </>
   );
  }
  export default MyApp;