import Head from "next/head";
import Image1 from "../../assets/image-guideline/1.png";
import Image2 from "../../assets/image-guideline/2.png";
import Image3 from "../../assets/image-guideline/3.png";
import Reminder from "../../assets/Reminder.jpeg";
import One from "../../assets/1.png";
import Two from "../../assets/2.png";
import Three from "../../assets/3.png";
import Link from "next/link";
import PagtTitle from "../../components/layout/PageTitle";

function ImageGuideline() {
  return (
    <div>
      <Head>
        <title>SF Brandname - Image Guideline</title>
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
        <PagtTitle title="Image Guideline" bg={Reminder} />
        <div className="container">
          <p className="page-description">
            You don’t have to be a professional in taking pictures. Simply take
            clear, close-up pictures of all required angles of your goods with
            enough natural light (avoid using camera flash). Why is this good
            for authentication? It’s good because it can help reduce image blur
            and capture needed details.
          </p>
        </div>

        <section className="how-it-work">
          <div className="sub-section">
            <div className="container">
              <div className="card mb-3 w-100">
                <div
                  className="row g-0"
                  style={{
                    background: `url(${One.src})center center no-repeat`,
                  }}
                >
                  <div className="col-md-6">
                    <img src={Image1.src} className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Image Positioning</h5>
                      <p className="card-text ">
                        To capture a neccessary detail your pictures should be
                        clear and close-up shot of a product, this way will help
                        our team to work easier and get your good resualt
                        faster.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sub-section middle-section hidden-overflow">
            <div className="container">
              <div className="card mb-3 w-100">
                <div
                  className="row g-0"
                  style={{ background: `url(${Two.src})left center no-repeat` }}
                >
                  <div className="col-md-8 d-flex justify-content-center align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Natural Lighting</h5>
                      <p className="card-text w-50">
                        Take pictures in natural light with no noise would
                        better in order to capture a needed details, without
                        unnatural blue color you image will be in perfect
                        condition and ready to use.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img src={Image2.src} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-section">
            <div className="container">
              <div className="card mb-3 w-100">
                <div
                  className="row g-0"
                  style={{
                    background: `url(${Three.src})center center no-repeat`,
                  }}
                >
                  <div className="col-md-6">
                    <img src={Image3.src} className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="card-body">
                      <h5 className="card-title">Better Quality</h5>
                      <p className="card-text w-50">
                        Please remember that a high-quality pictures is always
                        better for us to authenticate your product, this will
                        resualt in a faster process for you !
                      </p>
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

export default ImageGuideline;
