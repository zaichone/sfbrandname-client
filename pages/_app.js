import Script from "next/script";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/bootstrap.min.css";
import "../styles/globals.scss";
import Layout from "../components/layout/Layout";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false;

import "../src/config/firebase";
import { AuthProvider } from "../src/hook/auth";
import AuthStateChanged from "../src/layout/AuthStateChanged";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script id="ga-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
          `}
      </Script>
      <AuthProvider>
        <AuthStateChanged>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthStateChanged>
      </AuthProvider>
    </>
  );
}

export default MyApp;
