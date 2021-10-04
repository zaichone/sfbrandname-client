import { useState, useEffect } from "react";

import Head from "next/head";
import Script from "next/script";
import PagtTitle from "../../../components/layout/PageTitle";
import cover from "../../../assets/account/cover.png";
import Three from "../../../assets/3.png";

import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

const categories = ["Watches", "Bag", "Clothing", "Jewelry", "Shoes"];

function AlmostDone() {
  const router = useRouter();
  const { taskId } = router.query;

  const [chargeInfo, setChargeInfo] = useState({});

  const createCharge = (e) => {
    const options = {
      method: "POST",
      url: "http://localhost:3000/api/charge",
      headers: { "user-agent": "vscode-restclient" },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setChargeInfo(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // useEffect(async () => {
  //   const options = {
  //     method: "GET",
  //     url: "http://localhost:3000/api/charges/chrg_test_5pe1gqpyxrmasyupx32",
  //     headers: { "user-agent": "vscode-restclient" },
  //   };

  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //     setOrderInfo(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  const handleOmise = (e) => {
    Omise.setPublicKey(process.env.NEXT_PUBLIC_OMISE_PUBLIC_KEY);

    var button = document.querySelector("#checkoutButton");
    var form = document.querySelector("#checkoutForm");

    button.addEventListener("click", (event) => {
      window.alert(`calling createcharge`);
      createCharge();
    });
  };

  function nextPage() {
    router.push({
      pathname: "/authentication/thank-you",
      query: { taskId },
    });
  }

  return (
    <div>
      {/* SEO head */}
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
      {/* Omise script */}
      <Script
        src="https://cdn.omise.co/omise.js"
        id="omise"
        onLoad={() => {
          handleOmise();
        }}
      />
      {/* Main page content */}
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
                  {JSON.stringify(chargeInfo) || "Loading..."}
                  <h2>omise promptpay</h2>
                  <p>
                    Please note: customer privacy is our top piority, these
                    informations will be kept in secret.
                  </p>


                  {JSON.stringify(
                    chargeInfo.source.scannable_code.image.download_uri
                  ) || "Loading..."}

                  
                  <form id="checkoutForm" method="POST">
                    {/* <form id="checkoutForm" method="POST" action="/api/charge"> */}
                    <input type="hidden" name="omiseToken" />
                    <input type="hidden" name="omiseSource" />
                    <input type="hidden" name="taskId" />
                  </form>
                  <button onClick={handleOmise} id="checkoutButton">
                    Checkout with Omise
                  </button>
                  <div className="col-12 mb-3 mt-5 d-flex justify-content-center justify-content-sm-start">
                    <button onClick={nextPage}>
                      skip to Next page for testing
                    </button>
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
