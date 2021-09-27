import Head from "next/head";
import Link from "next/link";
import PagtTitle from "../../components/layout/PageTitle";
import Heading from "../../components/layout/Heading";
import cover from "../../assets/certificate/cover.png";
import qr from "../../assets/certificate/qr.png";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
function Certificates() {
  return (
    <div>
      <Head>
        <title>SF Brandname - Certificate</title>
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
        <div className="d-none d-sm-block">
          <PagtTitle title="Certificate" bg={cover} />
        </div>
        <section className="service-featured">
          <div className="sub-section">
            <div className="container">
              <div className="card w-100">
                <div className="row g-0">
                  <div className="col-12 col-md-3 col-lg-2">
                    <div class="d-flex justify-content-center">
                      <img src={qr.src} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-md-9 col-lg-10 d-flex justify-content-center align-items-center">
                    <div className="card-body px-5 ">
                      <h5 className="card-title mb-5 mt-5 mb-sm-3 mt-sm-0">
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
                      <div className="row">
                        <p className="col-12 col-sm-4 fw-bold">Product Name: </p>
                        <p className="col-12 col-sm-8">
                          Louis Vuitton - Pochette
                        </p>
                      </div>
                      <div className="row">
                        <p className="col-12 col-sm-4 fw-bold">Client Name: </p>
                        <p className="col-12 col-sm-8">
                          Image Engine Company Limited
                        </p>
                      </div>
                      <div className="row">
                        <p className="col-12 col-sm-4 fw-bold">Serial Number: </p>
                        <p className="col-12 col-sm-8">
                          38052ba2-a640-4207-b533-61f4253bfef9
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-5 mb-5 d-none d-sm-block">
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
                  <div className="col-12 my-5 d-flex justify-content-center">
                    <button>certificate</button>
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

export default Certificates;
