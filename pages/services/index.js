import Head from 'next/head'
import Link from 'next/link';
import PagtTitle from '../../components/layout/PageTitle';
import Heading from '../../components/layout/Heading';
import cover from '../../assets/services/cover.png';
import featured from '../../assets/services/featured.png';
import premium from '../../assets/services/Premium+.png';

function Services() {
    return (
        <div>
            <Head>
                <title>SF Brandname - Services</title>
                <meta name="description" content="มองหาร้านแบรนด์เนมมือสองที่ให้ราคาดี ของแท้ คุณภาพสวย ต้องที่ SF Brandname เท่านั้น เราให้บริการแบบครบวงจร ตั้งแต่ขายสินค้า รับซื้อ และทำสปากระเป๋า" />
                <meta name="keyword" content="ร้านแบรนด์เนมมือสอง ราคาดี, ร้านรับซื้อขายของแบรนด์เนมมือสอง, ร้านรับซื้อกระเป๋าแบรนด์เนมมือสอง, ร้านรับซื้อฝากขายแบรนด์เนมแท้, ร้านรับซื้อและฝากขายแบรนด์เนม, ร้านรับซื้อและฝากขายแบรนด์เนม มือสอง, ร้านรับซื้อ-ฝากขายกระเป๋าแบรนด์เนม, ร้านฝากขายกระเป๋าแบรนด์เนม, ร้านขายสินค้าแบรนด์เนมมือสอง ให้ราคาสูง, ร้านจำนำกระเป๋าแบรนด์เนม
"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page-services">
                <PagtTitle title="Services" bg={cover} />
                <section className="service-featured">
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
                                                The starting price for all authentication services is $30.20, including an official authentication certificate in PDF format that determines whether the goods is ‘Authentic’ or ‘Fake’ based on the pictures you submitted. We will send authentication results to your email and it will appear in your account as well. Our team of experts will verify your goods within 12-24 hours after receiving all needed pictures.


                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="premium-plus">
                    <Heading title="Premium+" bg={premium} />
                    <div className="container">
                        test
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Services
