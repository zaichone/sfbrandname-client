import Head from "next/head";
import Link from "next/link";
import PagtTitle from "../../../components/layout/PageTitle";
import cover from "../../../assets/account/cover.png";
import Three from "../../../assets/3.png";
import InfoIcon from "@material-ui/icons/Info";

import SymmetricalDiv from "../../../components/layout/SymmetricalDiv";

import { useRouter } from "next/router";
import { useState } from "react";

import { auth, firestore } from "../../../src/config/firebase";
import useAuth from "../../../src/hooks/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard, faCcVisa } from "@fortawesome/free-brands-svg-icons";

const categories = ["Watches", "Bag", "Clothing", "Jewelry", "Shoes"];

function AlmostDone() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>SF Brandname - Authentication - Upload Pictures</title>
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
      <main className="page-authenticate">
        <PagtTitle title="Authentications" bg={cover} />
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-3 col-md-3 col-xxl-2 gx-0">
                <div className="sidebar --step-3 px-5 px-sm-0">
                  <div className="card">
                    <h2>Almost Done !</h2>
                    <p>This is the last process. </p>
                    <img
                      src={Three.src}
                      className="img-fluid d-none d-sm-block"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-9 col-md-9 col-xxl-10">
                <div className="details">
                  <p>
                    Please note: customer privacy is our top piority, these
                    informations will be kept in secret.
                  </p>

                  <form>
                    <div className="row">
                      <div className="col mb-3">
                        <h3>Card Number</h3>
                        <input
                          type="text"
                          className="form-control mb-3"
                          name="name"
                        />
                        <FontAwesomeIcon
                          icon={faCcVisa}
                          style={{ fontSize: "2rem", marginRight: "1rem" }}
                        />
                        <FontAwesomeIcon
                          icon={faCcMastercard}
                          style={{ fontSize: "2rem" }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <label
                        className="col-3 col-form-label"
                        htmlFor="ccExpired"
                      >
                        Expired
                      </label>
                      <div className="col-3 gx-0">
                        <input
                          type="text"
                          className="form-control"
                          name="ccExpired"
                          id="ccExpired"
                        />
                      </div>

                      <label className="col-2 col-form-label" htmlFor="ccCode">
                        CCV
                      </label>

                      <div className="col-4 ">
                        <input
                          type="text"
                          className="form-control"
                          name="ccCode"
                          id="ccCode"
                        />
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className=" col my-3">
                        <h3>Card Holder Name</h3>
                        <input
                          type="text"
                          className="form-control"
                          name="clientName"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="ccRemember"
                          />
                          <label className="form-check-label" htmlFor="ccRemember">
                            Save as main payment option
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div className="row">
                  <div className="col-12 mb-3 mt-5 d-flex justify-content-center justify-content-sm-start">
                      <button>Process</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AlmostDone;
