import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useState, useRef } from "react";

import { Alert, Overlay } from "react-bootstrap";

import { withPublic } from "../../src/hook/route";

import { auth } from "../../src/config/firebase";

function AuthServiceResetPassword() {
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
    auth
      .verifyPasswordResetCode(oobCode)
      .then((email) => {
        var accountEmail = email;
        console.log(
          "🚀 ~ file: action.js ~ line 27 ~ auth.verifyPasswordResetCode ~ accountEmail",
          accountEmail
        );

        // TODO: Show the reset screen with the user's email and ask the user for
        // the new password.
        var newPassword = confirmPassword.value;

        // password not pass requirement
        if (!pwdCheck) {
          setError("Passwords not pass requirements\n");
        }

        // password check not match
        if (!confirmPasswordCheck) {
          setError("Confirm Passwords do not match\n");
        }

        if (pwdCheck && confirmPasswordCheck) {
          setNoti(`Updating password...`);
          // Save the new password.
          auth
            .confirmPasswordReset(oobCode, newPassword)
            .then((resp) => {
              console.log(
                "🚀 ~ file: action.js ~ line 35 ~ auth.confirmPasswordReset ~ resp",
                resp
              );
              // Password reset has been confirmed and new password updated.
              setNoti("Your new password was updated");

              // TODO: Display a link back to the app, or sign-in the user directly
              // if the page belongs to the same domain as the app:
              // auth.signInWithEmailAndPassword(accountEmail, newPassword);

              // TODO: If a continue URL is available, display a button which on
              // click redirects the user back to the app via continueUrl with
              // additional state determined from that URL's parameters.
            })
            .catch((error) => {
              // Error occurred during confirmation. The code might have expired or the
              // password is too weak.
              setError(error);
            });
        }
      })
      .catch((error) => {
        // Invalid or expired action code. Ask user to try to reset the password
        // again.
        setError(error);
      });

    setLoading(false);
  }

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const [password, setPassword] = useState("");
  const [confirmPasswordCheck, setConfirmPasswordCheck] = useState(false);

  const [pwdCheck, setPwdCheck] = useState(false);
  const [pwdCheckUpper, setPwdCheckUpper] = useState(false);
  const [pwdCheckLower, setPwdCheckLower] = useState(false);
  const [pwdCheckNumber, setPwdCheckNumber] = useState(false);
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

  function handlePasswordChange(e) {
    let pwd = e.target.value;
    setPassword(pwd);

    setPwdCheck(passwordRegex.test(pwd));
    setPwdCheckUpper(uppercaseRegex.test(pwd));
    setPwdCheckLower(lowercaseRegex.test(pwd));
    setPwdCheckNumber(numberRegex.test(pwd));
    setPwdCheckLength(lengthRegex.test(pwd));
  }

  function handleConfirmPassword(e) {
    let confirmPwd = e.target.value;
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
    <>
      <h1 className="mt-5">Recovery Password</h1>
      <form onSubmit={handleSubmit} className="w-100 mt-5">
        {noti && <Alert variant="success">{noti}</Alert>}
        {error && <Alert variant="danger">{JSON.stringify(error)}</Alert>}
        <div className="row mb-5" ref={target}>
          <div className="col">
            <input
              type="password"
              className="form-control"
              id="password"
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
        <div className="row mb-5" ref={target}>
          <div className="col">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
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
          placement="right"
          rootClose={true}
        >
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
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

        <div className="row mb-3">
          <div className="col">
            <button type="submit" className="mb-3">
              Save Password
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AuthServiceResetPassword;
