import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useState } from "react";

import { withPublic } from "../../src/hook/route";

function SignIn({ auth }) {
  const [loading, setLoading] = useState(false);
  const { user, loginWithEmailAndPassword, error } = auth;
  console.log("🚀 ~ file: index.js ~ line 10 ~ SignIn ~ user", user);
  const router = useRouter();
  async function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;

    await loginWithEmailAndPassword(email.value, password.value);
    console.log("logged in with user", user);

    setLoading(false);
    console.log('error', error);
  }

  function handleError(err) {
    switch (err) {
      case 'auth/invalid-email':
        return 'Invalid Email';
      case 'auth/user-disabled':
        return 'Your user was disabled';
      case 'auth/user-not-found':
        return 'User Not Found';
      case 'auth/wrong-password':
        return 'Wrong Password';
      default:
        return 'Something wrong, Try again';
    }
  }

  return (
    <div>
      <Head>
        <title>Super Authenticate - Sign In</title>
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
              <h1 className="mt-5">Sign In</h1>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {handleError(error)}
                </div>
              )}
              <form onSubmit={handleSubmit} className="w-100 mt-5">

                <div className="row mb-4">
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

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
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="keepMeSignedIn"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="keepMeSignedIn"
                      >
                        Keep me signed in
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <p className="forget-password-text text-end">
                      <Link href="/forget-password/">Forget Password</Link>
                    </p>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <button type="submit" className="mb-3">
                      Login
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
  );
}

export default withPublic(SignIn);
