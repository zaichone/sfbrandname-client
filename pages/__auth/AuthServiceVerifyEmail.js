import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import { auth as firebaseAuth } from "../../src/config/firebase";

import { withProtected } from "../../src/hook/route";

function AuthServiceVerifyEmail(props) {
  let actionCode = props.actionCode;
  const router = useRouter();
  const [notification, setNotification] = useState("");

  async function verifyEmail(actionCode) {
    await firebaseAuth
      .applyActionCode(actionCode)
      .then((resp) => {
        setNotification(`Verification success!`);
        console.log(resp);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    verifyEmail(actionCode);
  }, []);

  return (
    <>
      <h1 className="text-center text-sm-start">Verify Email</h1>
      <div className="w-100">
        <div className="row my-5">
          <div className="col">
            {notification && (
              <div className="alert alert-primary" role="alert">
                {notification}
              </div>
            )}
            <div>Your email has been verified! Thank you.</div>
          </div>
        </div>
      </div>
      <p className="register-text text-center text-sm-start">
        <Link href="/account/" className="btn btn-primary">
          Back to Account page.
        </Link>
      </p>
    </>
  );
}

export default AuthServiceVerifyEmail;
