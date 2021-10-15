import React from "react";
import Head from "next/head";
import PagtTitle from "../../../components/layout/PageTitle";
import cover from "../../../assets/cover/Authentic.jpg";
import Three from "../../../assets/3.png";


import { useRouter } from "next/router";


function ThankYouPayment() {
  const router = useRouter();
  const { taskId } = router.query;
  function nextPage() {
    /*
    router.push({
      pathname: "/orders/[taskId]",
      query: { taskId },
    }); */
    router.push('/orders/')
  }
  return (
    <div>
      <Head>
        <title>Super Authenticate - Authentication - Thank You</title>
        <meta
          name="description"
          content="มองหาร้านแบรนด์เนมมือสองที่ให้ราคาดี ของแท้ คุณภาพสวย ต้องที่ SF Brandname เท่านั้น เราให้บริการแบบครบวงจร ตั้งแต่ขายสินค้า รับซื้อ และทำสปากระเป๋า"
        />
        <meta
          name="keyword"
          content="ร้านแบรนด์เนมมือสอง ราคาดี, ร้านรับซื้อขายของแบรนด์เนมมือสอง, ร้านรับซื้อกระเป๋าแบรนด์เนมมือสอง, ร้านรับซื้อฝากขายแบรนด์เนมแท้, ร้านรับซื้อและฝากขายแบรนด์เนม, ร้านรับซื้อและฝากขายแบรนด์เนม มือสอง, ร้านรับซื้อ-ฝากขายกระเป๋าแบรนด์เนม, ร้านฝากขายกระเป๋าแบรนด์เนม, ร้านขายสินค้าแบรนด์เนมมือสอง ให้ราคาสูง, ร้านจำนำกระเป๋าแบรนด์เนม"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="page-content">
        <PagtTitle title="Authentications" bg={cover} />
        <section>
          <ul className="order-nav">
    <li><a>Item Info</a></li>
    <li><a>Services</a></li>
    <li><a>Messages</a></li>
    <li><a className="active">Transaction</a></li>
          </ul>
          <div className="container">
            <div className="row">
              
              <div className="col-12 col-sm-9 col-md-9 col-xxl-10">
                <div className="details">
                  <h3 className="fs-3 fw-semibold">Thank you!</h3>
                  <p>We will check and verify your payment within 2-4 hours. </p>

                  <div className="row">
                    <div className="col-12 mb-3 mt-5 d-flex justify-content-center justify-content-sm-start">
                      <button onClick={nextPage}>
                        Back
                      </button>
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

export default ThankYouPayment;
