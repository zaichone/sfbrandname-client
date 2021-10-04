import Head from "next/head";
import Script from "next/script";
import PagtTitle from "../../../components/layout/PageTitle";
import cover from "../../../assets/account/cover.png";
import Three from "../../../assets/3.png";

import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard, faCcVisa } from "@fortawesome/free-brands-svg-icons";

const categories = ["Watches", "Bag", "Clothing", "Jewelry", "Shoes"];

const handleOmise = (e) => {
  OmiseCard.configure({
    publicKey: process.env.NEXT_PUBLIC_OMISE_PUBLIC_KEY,
    image: "https://cdn.omise.co/assets/dashboard/images/omise-logo.png",
    frameLabel: "SF Brandname",
  });

  var button = document.querySelector("#checkoutButton");
  var form = document.querySelector("#checkoutForm");

  button.addEventListener("click", (event) => {
    event.preventDefault();
    OmiseCard.open({
      amount: 12345,
      currency: "THB",
      defaultPaymentMethod: "credit_card",
      onCreateTokenSuccess: (nonce) => {
        if (nonce.startsWith("tokn_")) {
          window.alert(`${nonce}`);
          form.omiseToken.value = nonce;
        } else {
          window.alert(`${nonce}`);
          form.omiseSource.value = nonce;
        }
        form.submit();
      },
    });
  });
  console.log(`handleOmise: `, OmiseCard);
};

function AlmostDone() {
  const router = useRouter();
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
                  <h2>omise card</h2>

                  <p>
                    Please note: customer privacy is our top piority, these
                    informations will be kept in secret.
                  </p>

                  <form id="checkoutForm" method="POST" action="/api/charge">
                    <input type="hidden" name="omiseToken" />
                    <input type="hidden" name="omiseSource" />
                    <button type="submit" id="checkoutButton">
                      Checkout with Omise
                    </button>
                  </form>


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
