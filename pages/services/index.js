import Head from "next/head";
import Link from "next/link";
import PagtTitle from "../../components/layout/PageTitle";
import Heading from "../../components/layout/Heading";
import Cta from "../../components/layout/Cta";
import Reminder from "../../assets/Reminder.jpeg";

import cover from "../../assets/cover/Service.jpg";
import featured from "../../assets/services/featured.png";
import premium from "../../assets/services/Premium+.png";
import upgrade from "../../assets/services/Upgrade+.png";

function Services() {
  return (
    <div>
      <Head>
        <title>Super Authenticate - Services</title>
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
        <PagtTitle title="Services" bg={cover} className=" d-none d-sm-block" />
        <section className="service-featured d-none d-sm-block">
          <div className="sub-section">
            <div className="container">
              <div className="card w-100">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img src={featured.src} className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="card-body">
                      <h5 className="card-title mb-3">Authentic vs. Fake</h5>
                      <p className="card-text w-100">
                        The starting price for all authentication services is
                        $30.20, including an official authentication certificate
                        in PDF format that determines whether the goods is
                        ‘Authentic’ or ‘Fake’ based on the pictures you
                        submitted. We will send authentication results to your
                        email and it will appear in your account as well. Our
                        team of experts will verify your goods within 12-24
                        hours after receiving all needed pictures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-fluid hero d-block d-sm-none">
          <div className="row pt-5 pb-3 px-5">
            <div className="tagline col-12 col-sm-4 offset-sm-1 d-flex flex-column justify-content-start justify-content-sm-center align-items-center align-items-sm-start">
              <h1 className="fw-normal mb-5 me-auto d-block d-sm-none">
                SERVICE
              </h1>

              <p className="d-block d-sm-none">
                Authenticate any luxury product on your finger tip.
              </p>
              <a className="button d-block d-sm-none">Only $30</a>
            </div>
          </div>
        </div>

        {/* mobile only small header */}
        <div className="d-block d-sm-none">
          <Cta title="PREMIUM+" bg={cover} />
        </div>

        <section className="premium-plus">
          <div className="d-none d-sm-block">
            <Heading title="Premium+" bg={premium} />
          </div>

          <div
            className="sub-section"
            style={{ backgroundImage: `url(${upgrade.src})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-12">
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-3 col-md-4 text-center">
                        <span className="price">$49</span>
                      </div>
                      <div className="col-9 col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">2-hr authentication</h5>
                          <p className="card-text">
                            2-hr authentication turnaround service. Do you need
                            a quick result? Just upgrade your order to get the
                            2-hr authentication service turnaround.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-3 col-md-4 text-center">
                        <span className="price">$15</span>
                      </div>
                      <div className="col-9 col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Market valuation</h5>
                          <p className="card-text">
                            You can upgrade your order to know more about the
                            market valuation of your item, too! Market valuation
                            service offers you an overall current market price
                            estimation for buying and/or reselling luxury goods.
                            Our expert team will estimate the market valuation
                            in US dollar (USD) and Thai baht (THB) based on the
                            product’s style, year of production, color, size,
                            condition, and market estimation. After
                            authenticating your item, we will include the market
                            valuation in your order.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-3 col-md-4 text-center">
                        <span className="price">$12</span>
                      </div>
                      <div className="col-9 col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Item identification</h5>
                          <p className="card-text">
                            Item identification (product model, size, color,
                            material) is another service that can be added to
                            your order anytime. We will verify and let you know
                            about the item’s style name, size, color and
                            material. Once we have authenticated your goods, we
                            will also include this information in the
                            certificate of your goods.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-3 col-md-4 text-center">
                        <span className="price">$6</span>
                      </div>
                      <div className="col-9 col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Year of production</h5>
                          <p className="card-text">
                            We offer an upgraded service to let you know the
                            year of production of your beloved luxury goods.
                            This service can be added at any time, like other
                            services. If possible, we will provide an exact
                            production month/year for your item, or we will
                            provide an estimated period/era that the item is
                            produced if exact information is not possible. Once
                            we have authenticated your item, we will include
                            this information within your order.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-3 col-md-4 text-center">
                        <span className="price">$30</span>
                      </div>
                      <div className="col-9 col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            AuthenticatE and delivery
                          </h5>
                          <p className="card-text">
                            Super Authentic offers an authenticity card as an
                            upgraded service along with delivery to your door!
                            The authenticity card is a durable plastic card
                            about the same size as a credit card. The card will
                            feature the information about the item that we have
                            verified for you as well as a QR Code for a
                            convenient way to see more details. This service can
                            be added any time. After receiving your request, we
                            will deliver the card to the provided address. The
                            delivery is free across Thailand, and actual fees
                            apply for DHL worldwide shipping.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-3 col-md-4 text-center">
                        <span className="price">$30</span>
                      </div>
                      <div className="col-9 col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Hermès leather bag</h5>
                          <p className="card-text">
                            Thanks to deeper knowledge required and special
                            attention to details, all Hèrmes authentication
                            services will be charged additional fees depending
                            on the type of material/leather used.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="row g-0">
                      <div className="col-3 col-md-4 text-center">
                        <span className="price">$91</span>
                      </div>
                      <div className="col-9 col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            Hermès exotic leather bag
                          </h5>
                          <p className="card-text">
                            Thanks to deeper knowledge required and special
                            attention to details, all Hèrmes authentication
                            services will be charged additional fees depending
                            on the type of material/leather used.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card last-card">
                    <div className="row g-0">
                      <div className="col-3 col-md-4 text-center">
                        <span className="price">$6</span>
                      </div>
                      <div className="col-9 col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            Hard-copy certificate and delivery
                          </h5>
                          <p className="card-text">
                            Once the authentication process is completed,
                            authentication certificates will be automatically
                            generated. We offer a free certificate in PDF form
                            and only $6 more for a hard-copy version, including
                            delivery fee. You may choose to add this service any
                            time, even after the order is complete. Once your
                            order is received, the certificate will be
                            automatically generated. Our authenticity
                            certificate features the product’s title name,
                            client’s name, a picture of the authenticated
                            product, and a QR Code to scan for more details. In
                            case the product is counterfeit, we will provide a
                            detailed description from expert opinions on the
                            spots that the discrepancies were found.
                          </p>
                        </div>
                      </div>
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

export default Services;
