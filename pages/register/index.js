import Head from "next/head";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { useRouter } from "next/router";

//import { auth } from "../../src/config/firebase";

import useAuth from "../../src/hooks/auth";
import { withPublic } from "../../src/hook/route";

import { Overlay, OverlayTrigger } from "react-bootstrap";
import { Alert } from "react-bootstrap";

function Register({ auth }) {
  const [loading, setLoading] = useState(false);
  const { signUp } = auth;
  const [error, setError] = useState("");

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [confirmPasswordCheck, setConfirmPasswordCheck] = useState(false);

  const [pwdCheck, setPwdCheck] = useState(false);
  const [pwdCheckUpper, setPwdCheckUpper] = useState(false);
  const [pwdCheckLower, setPwdCheckLower] = useState(false);
  const [pwdCheckNumber, setPwdCheckNumber] = useState(false);
  const [pwdCheckSpecial, setPwdCheckSpecial] = useState(false);
  const [pwdCheckLength, setPwdCheckLength] = useState(false);

  // master checker that allow signup
  const passwordRegex = new RegExp(
    /^(?=[^A-Z\s]*[A-Z])(?=[^a-z\s]*[a-z])(?=[^\d\s]*\d)\S{8,}$/gm
  );

  // just condition display
  const uppercaseRegex = new RegExp(/^(?=[^A-Z\s]*[A-Z])\S{0,}$/gm);
  const lowercaseRegex = new RegExp(/^(?=[^a-z\s]*[a-z])\S{0,}$/gm);
  const numberRegex = new RegExp(/^(?=[^\d\s]*\d)\S{0,}$/gm);
  const lengthRegex = new RegExp(/^.{8,}$/gm);

  async function handleSubmit(e) {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      keepMeSignedIn,
    } = e.target.elements;
    console.log("submitting");

    setPwdCheck(passwordRegex.test(password));
    // password not pass requirement
    if (!pwdCheck) {
      setError("Passwords not pass requirements\n");
    }

    setConfirmPasswordCheck(password === confirmPassword);
    // password check not match
    if (!confirmPasswordCheck) {
      return setError("Confirm Passwords do not match\n");
    }

    // T&C is accepted?
    if (!keepMeSignedIn.checked) {
      return setError("You have to accept Terms & Conditions to sign up.\n");
    }

    if (pwdCheck && confirmPasswordCheck && keepMeSignedIn.checked) {
      // window.alert(`calling signup`);
      signUp(email.value, password.value, firstName.value, lastName.value);
    }

    setLoading(false);
  }

  function handlePasswordChange(e) {
    let pwd = e.target.value;
    setPassword(pwd);

    setPwdCheck(passwordRegex.test(pwd));
    setPwdCheckUpper(uppercaseRegex.test(pwd));
    setPwdCheckLower(lowercaseRegex.test(pwd));
    setPwdCheckNumber(numberRegex.test(pwd));
    setPwdCheckLength(lengthRegex.test(pwd));
    setConfirmPasswordCheck(pwd === passwordConfirm);
  }

  function handleConfirmPassword(e) {
    let confirmPwd = e.target.value;
    setPasswordConfirm(confirmPwd);

    setConfirmPasswordCheck(password === confirmPwd);
  }

  const PasswordRequirementsPop = (props) => (
    <>
      <div className="row p-3 bg-light" {...props}>
        <div className="col">
          <p>Password requirements:</p>
          <p>
            {pwdCheckLength ? (
              <span className="text-black">
                &#10003; At least 8 characters long
              </span>
            ) : (
              <span className="text-danger">
                &#8226; At least 8 characters long
              </span>
            )}
          </p>
          <p>
            {pwdCheckUpper ? (
              <span className="text-black">
                &#10003; At least 1 uppercase character
              </span>
            ) : (
              <span className="text-danger">
                &#8226; At least 1 uppercase character
              </span>
            )}
          </p>
          <p>
            {pwdCheckLower ? (
              <span className="text-black">
                &#10003; At least 1 lowercase character
              </span>
            ) : (
              <span className="text-danger">
                &#8226; At least 1 lowercase character
              </span>
            )}
          </p>
          <p>
            {pwdCheckNumber ? (
              <span className="text-black">&#10003; At least 1 number</span>
            ) : (
              <span className="text-danger">&#8226; At least 1 number</span>
            )}
          </p>
          <p>
            {confirmPasswordCheck ? (
              <span className="text-black">
                &#10003; Confirm password is match
              </span>
            ) : (
              <span className="text-danger">
                &#8226; Confirm password is match
              </span>
            )}
          </p>
        </div>
      </div>
    </>
  );

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
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      placeholder="First Name"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3" ref={target}>
                  <div className="col">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      onChange={handlePasswordChange}
                      onFocus={() => {
                        setShow(true);
                      }}
                      onBlur={() => {
                        setShow(false);
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3" ref={target}>
                  <div className="col">
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      onChange={handleConfirmPassword}
                      onFocus={() => {
                        setShow(true);
                      }}
                      onBlur={() => {
                        setShow(false);
                      }}
                      required
                    />
                  </div>
                </div>

                <Overlay
                  target={target.current}
                  show={show}
                  placement={"right"}
                  rootClose={true}
                >
                  {({
                    placement,
                    arrowProps,
                    show: _show,
                    popper,
                    ...props
                  }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                      }}
                    >
                      <PasswordRequirementsPop />
                    </div>
                  )}
                </Overlay>

                <div className="row my-5">
                  <div className="col">
                    <div className="form-check">
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
                  </div>
                  <div className="col">
                    <p className="forget-password-text">
                      <Link href="/terms-conditions/">Terms & Conditions</Link>
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col text-center">
                    <button
                      type="submit"
                      className="btn btn-primary mb-3"
                      disabled={loading}
                    >
                      Create Account
                    </button>
                  </div>
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
