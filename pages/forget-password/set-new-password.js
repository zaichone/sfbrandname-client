import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useState } from "react";

import { withPublic } from "../../src/hook/route";

function ResetPassword({ auth }) {

  //! pending function to be hook with auth send verification
  const { loginWithEmailAndPassword } = auth;
  const router = useRouter();
  async function handleSubmit(event) {
    event.preventDefault();
    const { email } = event.target.elements;

    // await loginWithEmailAndPassword(email.value);
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
            <div className="col-12 col-sm-4 px-xl-4 px-xxl-5 py-5 d-flex flex-column justify-content-evenly justify-content-sm-center --recovery-password-container">
              <h1 className="text-center text-sm-start">Set new password </h1>
              <form className="w-100 ">
                <div className="row my-5">
                  <div className="col">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                    />
                  </div>
                </div>

                <div className="row my-5 ">
                  <div className="col d-flex justify-content-center justify-content-sm-start">
                    <button type="submit" className="mb-3 ">
                      Submit
                    </button>
                  </div>
                </div>

              </form>
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

export default withPublic(ResetPassword);
