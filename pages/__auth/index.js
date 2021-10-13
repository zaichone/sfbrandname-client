import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useState } from "react";

import { auth as firebaseAuth } from "../../src/config/firebase";

import { withProtected } from "../../src/hook/route";

import AuthServiceVerifyEmail from "./AuthServiceVerifyEmail";

function AuthService({ auth }) {
  const { user } = auth;
  const router = useRouter();
  const { mode, oobCode } = router.query;
  const [buttonLock, setButtonLock] = useState(false);
  const [notification, setNotification] = useState("");
  // console.log(`email: `, user.email, `emailVerified: `, user.emailVerified);

  function renderAuthService(mode) {
    // Handle the user management action.
    switch (mode) {
      case "resetPassword":
        // Display reset password handler and UI.
        return <>pending function</>;
      case "recoverEmail":
        // Display email recovery handler and UI.
        return <>pending function</>;
      case "verifyEmail":
        // Display email verification handler and UI.
        return <AuthServiceVerifyEmail actionCode={oobCode} />;
      default:
        return <>pending empty mode?</>;
    }
  }

  return (
    <div>
      <Head>
        <title>Super Authenticate - Verify</title>
        <meta
          name="description"
          content="มองหาร้านแบรนด์เนมมือสองที่ให้ราคาดี ของแท้ คุณภาพสวย ต้องที่ SF Brandname เท่านั้น เราให้บริการแบบครบวงจร ตั้งแต่ขายสินค้า รับซื้อ และทำสปากระเป๋า"
        />
        <meta
          name="keyword"
          content="ร้านแบรนด์เนมมือสอง ราคาดี, ร้านรับซื้อขายของแบรนด์เนมมือสอง, ร้านรับซื้อกระเป๋าแบรนด์เนมมือสอง, ร้านรับซื้อฝากขายแบรนด์เนมแท้, ร้านรับซื้อและฝากขายแบรนด์เนม, ร้านรับซื้อและฝากขายแบรนด์เนม มือสอง, ร้านรับซื้อ-ฝากขายกระเป๋าแบรนด์เนม, ร้านฝากขายกระเป๋าแบรนด์เนม, ร้านขายสินค้าแบรนด์เนมมือสอง ให้ราคาสูง, ร้านจำนำกระเป๋าแบรนด์เนม
"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-4 px-xl-4 px-xxl-5 py-5 d-flex flex-column justify-content-evenly justify-content-sm-center --recovery-password-container">
              {renderAuthService(mode)}
            </div>
            <div className=" d-none d-sm-inline col-sm-8 p-0">
              <div className="register-cover"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default withProtected(AuthService);
