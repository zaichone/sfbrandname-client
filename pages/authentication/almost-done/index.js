import Head from "next/head";
import Link from "next/link";
import PagtTitle from "../../../components/layout/PageTitle";
import cover from "../../../assets/account/cover.png";
import Three from "../../../assets/3.png";

import SymmetricalDiv from "../../../components/layout/SymmetricalDiv";

import { useRouter } from "next/router";
import { useState } from "react";

import { auth, firestore } from "../../../src/config/firebase";

import { withProtected } from "../../../src/hook/route";

import PaymentReceipt from "../../../components/uploadForm/PaymentReceipt";

function AlmostDone({ auth }) {
  const { user } = auth;
  const [clientId] = useState(user.uid);

  const [paymentImage, setPaymentImage] = useState({});
  const [paymentNote, setPaymentNote] = useState("");

  const router = useRouter();
  const { taskId } = router.query;

  function goNext() {
    const taskRef = firestore.collection("tasks").doc(taskId);
    taskRef
      .update({ paymentImage, paymentNote }, { merge: true })
      .then(() => {})
      .catch((error) => {});
  }

  const handleNoteChange = (e) => {
    let msg = e.target.value;
    setPaymentNote(msg);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    goNext();
  };

  return (
    <div>
      <Head>
        <title>SF Brandname - Authentication - Almost Done</title>
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
                  <p>supported banks: </p>
                  
                  <PaymentReceipt
                    taskId={taskId}
                    clientId={clientId}
                    paymentImage={paymentImage}
                    setPaymentImage={setPaymentImage}
                  />

                  <form
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    <div className="row mt-5">
                      <div className="col mb-3">
                        <h3>notes</h3>
                        <textarea
                          className="form-control"
                          id="paymentNote"
                          name="paymentNote"
                          value={paymentNote}
                          onChange={handleNoteChange}
                        />
                      </div>
                    </div>
                  </form>

                  <div className="row">
                    <div className="col-12 mb-3 mt-5 d-flex justify-content-center justify-content-sm-start">
                      <button onClick={goNext}>Submit</button>
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

export default withProtected(AlmostDone);
