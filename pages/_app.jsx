import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <link rel="shortcut icon" href="weatherIcon.png"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
