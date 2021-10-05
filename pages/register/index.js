import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Alert } from "react-bootstrap";

//import { auth } from "../../src/config/firebase";
import { withPublic } from "../../src/hook/route";

function Register({ auth }) {
  const [loading, setLoading] = useState(false);
  const { signUp, error, setError } = auth;
  async function handleSubmit(e) {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      keepMeSignedIn,
    } = e.target.elements;
    e.preventDefault();
    console.log("submitting");

    // password check not match
    if (password.value !== confirmPassword.value) {
      return setError("Passwords do not match");
    }
    // T&C is accepted?
    if (keepMeSignedIn.checked) {
      signUp(email.value, password.value, firstName.value, lastName.value);
    } else {
      return setError("You have to accept Terms & Conditions to sign up.");
    }

    setLoading(false);
  }
  return (
    <div>
      <Head>
        <title>Super Authenticate - Create Account</title>
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
              <h1 className="mt-5">CREATE ACCOUNT</h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <form className="w-100 mt-3" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    placeholder="Last Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control "
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control "
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="mb-5">
                  <div className="row">
                    <div className="form-check col-6">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="keepMeSignedIn"
                        id="keepMeSignedIn"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="keepMeSignedIn"
                      >
                        I Agree To Platform
                      </label>
                    </div>

                    <div className="col-6">
                      <p className="forget-password-text ">
                        <Link href="/terms-conditions/">
                          Terms & Conditions
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-3 text-center">
                  <button type="submit" className="mb-3" disabled={loading}>
                    Create Account
                  </button>
                </div>
              </form>
              <p className="register-text text-center">
                Already have an account?<Link href="/sign-in/">Login</Link>
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

export default withPublic(Register);
