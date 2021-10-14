import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useState } from "react";

import { Alert } from "react-bootstrap";

import { withPublic } from "../../src/hook/route";

import { auth } from "../../src/config/firebase";

function Action() {
    const router = useRouter();
    const { mode, oobCode, apiKey } = router.query;
    const [loading, setLoading] = useState(false);
    const [noti, setNoti] = useState();
    const [error, setError] = useState();
    async function handleSubmit(event) {
        event.preventDefault();
        const { password, confirmPassword } = event.target.elements;
        

        //await sendPasswordResetEmail(email.value);
        console.log("reseting password");
        auth.verifyPasswordResetCode(oobCode).then((email) => {
            var accountEmail = email;
            console.log("🚀 ~ file: action.js ~ line 27 ~ auth.verifyPasswordResetCode ~ accountEmail", accountEmail)
        
            // TODO: Show the reset screen with the user's email and ask the user for
            // the new password.
            var newPassword = confirmPassword.value;
        
            // Save the new password.
            auth.confirmPasswordReset(oobCode, newPassword).then((resp) => {
              console.log("🚀 ~ file: action.js ~ line 35 ~ auth.confirmPasswordReset ~ resp", resp)
              // Password reset has been confirmed and new password updated.
        
              // TODO: Display a link back to the app, or sign-in the user directly
              // if the page belongs to the same domain as the app:
              // auth.signInWithEmailAndPassword(accountEmail, newPassword);
        
              // TODO: If a continue URL is available, display a button which on
              // click redirects the user back to the app via continueUrl with
              // additional state determined from that URL's parameters.
            }).catch((error) => {
              // Error occurred during confirmation. The code might have expired or the
              // password is too weak.
              setError(error);
            });
          }).catch((error) => {
            // Invalid or expired action code. Ask user to try to reset the password
            // again.
            setError(error);
          });
        setNoti('Your new password was updated')
        setLoading(false);
    }
    return (
        <div>
            <Head>
                <title>Super Authenticate - Actions</title>
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
                        <div className="col-12 col-sm-4 px-xl-4 px-xxl-5 py-5 d-flex flex-column justify-content-around">
                            <h1 className="mt-5">Recovery Password</h1>
                            <form onSubmit={handleSubmit} className="w-100 mt-5">
                                {noti && <Alert variant="success">{noti}</Alert>}
                                <div className="row mb-5">
                                    <div className="col">
                                        <input
                                            type="password"
                                            className="form-control "
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col">
                                        <input
                                            type="password"
                                            className="form-control "
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            placeholder="Confirm Password"
                                        />
                                    </div>
                                </div>


                                <div className="row mb-3">
                                    <div className="col">
                                        <button type="submit" className="mb-3">
                                            Save Password
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <p className="register-text text-center">
                                <Link href="/register/">
                                    Don’t have account? Register here.
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
    )
}

export default Action
