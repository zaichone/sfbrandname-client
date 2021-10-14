import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useState } from "react";

import { withProtected } from "../../src/hook/route";

function VerifyEmail({ auth }) {
  const { user } = auth;
  const router = useRouter();
  const [buttonLock, setButtonLock] = useState(false);
  const [notification, setNotification] = useState("");
  // console.log(`email: `, user.email, `emailVerified: `, user.emailVerified);

  async function handleSendVerifyEmail(e) {
    e.preventDefault();
    setButtonLock(true);
    // window.alert(`mail sent`)
    await user
      .sendEmailVerification()
      .then(function () {
        // Verification email sent.
        setNotification("Verification Email has been sent! Check your inbox.");
      })
      .catch(function (error) {
        // Error occurred. Inspect error.code.
        setNotification("An error happened. Please contact staff.");
        console.error(error);
      });
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
              <h1 className="text-center text-sm-start">Verify email </h1>
              <div className="w-100 ">
                <div className="row my-5">
                  <div className="col">
                    {notification && (
                      <div className="alert alert-primary" role="alert">
                        {notification}
                      </div>
                    )}
                    {user.emailVerified ? (
                      <div>{user.email} is verified! Thank you.</div>
                    ) : (
                      <div>
                        {user.email} is not verified. click the button to send
                        verification email
                        <div className="row my-5 ">
                          <div className="col d-flex justify-content-center justify-content-sm-start">
                            <button
                              type="submit"
                              className="btn btn-primary mb-3 "
                              disabled={buttonLock}
                              onClick={handleSendVerifyEmail}
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <p className="register-text text-center text-sm-start">
                <Link href="/account/" className="btn btn-primary">
                  Back to Account
                </Link>
              </p>
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

export default withProtected(VerifyEmail);
