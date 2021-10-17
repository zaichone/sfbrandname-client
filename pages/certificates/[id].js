import Head from "next/head";
import Link from "next/link";
import PagtTitle from "../../components/layout/PageTitle";
import Heading from "../../components/layout/Heading";
import cover from "../../assets/certificate/cover.png";
import qr from "../../assets/certificate/qr.png";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useRouter } from "next/router";

import { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode.react';

import CertificateTemplate from "../../components/cer/CertificateTemplate";
import ReactToPrint from 'react-to-print';

import { firestore } from "../../src/config/firebase";

function Certificate() {
  const router = useRouter();
  const { id } = router.query;
  const componentRef = useRef();

  const [cerDetail, setCerDetail] = useState();


  useEffect(() => {
    async function getCerDetail() {
      const cerRef = firestore.collection("certificates").doc(id);
      const doc = await cerRef.get();
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
        setCerDetail(doc.data());
      }
    }
    getCerDetail();
  }, [])
  return (
    <div>
      <Head>
        <title>Super Authenticate - Certificate</title>
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
      <main className="page-services">
        <PagtTitle title={`Certificate`} bg={cover} />
        <section className="service-featured">
          <div className="sub-section">
            <div className="container">
              <div className="card w-100">
                <div className="row g-0">
                  <div className="col-md-3 col-lg-2">
                    {cerDetail && <QRCode value={cerDetail.cerUrl} size={230} />}
                  </div>
                  <div className="col-md-9 col-lg-10 d-flex justify-content-center align-items-center">
                    <div className="card-body px-5">
                      <h5 className="card-title mb-3">
                        SUPER AUTHENTIC QUALIFIED
                        <CheckCircleIcon
                          style={{
                            color: "teal",
                            marginLeft: 20,
                            position: "relative",
                            top: -5,
                            fontSize: "3rem",
                          }}
                        />
                      </h5>
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <strong>Product Name: </strong>
                            </td>
                            <td>{cerDetail?.brand} - {cerDetail?.name}</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Client Name: </strong>
                            </td>
                            <td>{cerDetail?.clientName}</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Serial Number: </strong>
                            </td>
                            <td>{cerDetail?.customId?.toUpperCase()}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-12 mt-5 mb-5">
                    <p>
                      The starting price for all authentication services is
                      $30.20, including an official authentication certificate
                      in PDF format that determines whether the goods is
                      ‘Authentic’ or ‘Fake’ based on the pictures you submitted.
                      We will send authentication results to your email and it
                      will appear in your account as well. Our team of experts
                      will verify your goods within 12-24 hours after receiving
                      all needed pictures.
                    </p>
                  </div>
                  <div className="col-12 mb-5">
                    
                    <ReactToPrint
                      trigger={() => <button>certificate</button>}
                      content={() => componentRef.current}
                    />
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none">
            {cerDetail && <CertificateTemplate data={cerDetail} ref={componentRef} />}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Certificate;
