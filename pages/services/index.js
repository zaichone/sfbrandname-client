import Head from "next/head";
import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";
import Heading from "../../components/layout/Heading";
import Cta from "../../components/layout/Cta";
import Reminder from "../../assets/Reminder.jpeg";

import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import cover from "../../assets/cover/Service.jpg";
import featured from "../../assets/services/featured.png";
import premium from "../../assets/services/Premium+.png";
import upgrade from "../../assets/services/Upgrade+.png";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";

import commerce from "../../src/store/commerce";

function Services() {
  const [products, setProducts] = useState();
  const { innerWidth: width, innerHeight: height } = window;

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `none`,
    backgroundColor: `transparent`,
    "&:before": {
      display: "none",
    },
  }));

  useEffect(() => {
    async function initShopData() {
      const { data: products } = await commerce.products.list();
      // console.log("🚀 ~ file: index.js ~ line 43 ~ initData ~ data", products);
      products.sort((a, b) => {
        return a.sort_order - b.sort_order;
      });
      setProducts(products);
    }
    initShopData();
  }, []);
  console.log(products);
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
        <PageTitle title="Services" bg={cover} className=" d-none d-sm-block" />
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
                        All authentication services start at $30.20, which
                        includes an official authentication certificate in PDF
                        format that assesses if the products are 'Authentic' or
                        'Fake' based on the photos you provide. We'll give you
                        the authentication results through email, and they'll
                        also appear in your account. After getting the necessary
                        photos, our team of professionals will check your items
                        within 12-24 hours.
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
                  <div className="d-none d-sm-block">
                    {products?.map((product, ind) => (
                      <div className="card" key={product.id}>
                        <div className="row g-0">
                          <div className="col-3 col-md-4 text-center">
                            <span className="price">
                              {product.price.formatted_with_symbol}
                            </span>
                          </div>
                          <div className="col-9 col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">{product.name}</h5>
                              <div className="card-text">
                                {ReactHtmlParser(product.description)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="d-block d-sm-none">
                    <div id="servicesAccordion">
                      {products?.map((product, index) => (
                        <Accordion key={product.id}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography className="acc-title">
                              <span className="price">
                                ${product.price.raw}
                              </span>
                              {product.name}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <div>{ReactHtmlParser(product.description)}</div>
                          </AccordionDetails>
                        </Accordion>
                      ))}
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
