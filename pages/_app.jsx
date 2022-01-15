import "../styles/layout.scss";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Next.js</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" />
            </Head>
            <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"/>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"/>

            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
