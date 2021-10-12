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

import CookieConsent from "react-cookie-consent";

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
            <CookieConsent
              debug={true}
              location="bottom"
              buttonText="Accept"
              disableButtonStyles={true}
              buttonClasses={"btn btn-outline-light mx-5 my-3"}
              containerClasses={"bg-primary"}
            >
              This website uses cookies. We use cookies to ensure that we give
              you the best experience on our website to personalise content and
              adverts and to analyse our traffic using Google Analytics.{" "}
            </CookieConsent>
          </Layout>
        </AuthStateChanged>
      </AuthProvider>
    </>
  );
}

export default MyApp;
