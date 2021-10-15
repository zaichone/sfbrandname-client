import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PagtTitle from "../../../components/layout/PageTitle";
import cover from "../../../assets/cover/Authentic.jpg";
import Three from "../../../assets/3.png";
import paymentQR from "../../../assets/sfbrandnamedotcom.png";
import KBankLogo from "../../../assets/KBankLogo";
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
      .update(
        {
          paymentImage,
          paymentNote,
          paymentTimestamp: new Date().getTime(),
          paymentMethod: "Bank Transfer",
          paymentRef: "",
          paymentStatus: "pending",
        },
        { merge: true }
      )
      .then(() => {
        nextPage();
      })
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
  function nextPage() {
    router.push({
      pathname: "/authentication/thank-you",
      query: { taskId },
    });
  }
  return (
    <div>
      <Head>
        <title>Super Authenticate - Authentication - Almost Done</title>
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
                    Please note: customer privacy is our top priority, these
                    informations will be kept in secret.
                  </p>
                  <div className="row my-5">
                    <div className="col-auto d-flex justify-content-center justify-content-sm-start align-items-center">
                      <div
                        style={{
                          minWidth: "5rem",
                          minHeight: "5rem",
                        }}
                      >
                        <KBankLogo />
                      </div>
                    </div>{" "}
                    <div className="col">
                      <p className="fs-3">061-8-57211-0</p>
                      <p className="fs-4">ธนาคารกสิกรไทย</p>
                      <p className="fs-4">ชื่อบัญชี บจก. เอสดับเบิ้ลยู 2019</p>
                    </div>
                  </div>

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
                        <h3>Notes</h3>
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
