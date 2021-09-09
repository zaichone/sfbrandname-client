import Head from 'next/head'
import Link from 'next/link';
import PagtTitle from '../../components/layout/PageTitle';
import Heading from '../../components/layout/Heading';
import cover from '../../assets/certificate/cover.png';
import qr from '../../assets/certificate/qr.png';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
function Certificate() {
    return (
        <div>
            <Head>
                <title>SF Brandname - Certificate</title>
                <meta name="description" content="มองหาร้านแบรนด์เนมมือสองที่ให้ราคาดี ของแท้ คุณภาพสวย ต้องที่ SF Brandname เท่านั้น เราให้บริการแบบครบวงจร ตั้งแต่ขายสินค้า รับซื้อ และทำสปากระเป๋า" />
                <meta name="keyword" content="ร้านแบรนด์เนมมือสอง ราคาดี, ร้านรับซื้อขายของแบรนด์เนมมือสอง, ร้านรับซื้อกระเป๋าแบรนด์เนมมือสอง, ร้านรับซื้อฝากขายแบรนด์เนมแท้, ร้านรับซื้อและฝากขายแบรนด์เนม, ร้านรับซื้อและฝากขายแบรนด์เนม มือสอง, ร้านรับซื้อ-ฝากขายกระเป๋าแบรนด์เนม, ร้านฝากขายกระเป๋าแบรนด์เนม, ร้านขายสินค้าแบรนด์เนมมือสอง ให้ราคาสูง, ร้านจำนำกระเป๋าแบรนด์เนม
"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page-services">
                <PagtTitle title="Certificate" bg={cover} />
                <section className="service-featured">
                    <div className="sub-section">
                        <div className="container">

                            <div className="card w-100">
                                <div className="row g-0">
                                    <div className="col-md-3 col-lg-2">
                                        <img src={qr.src} className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-md-9 col-lg-10 d-flex justify-content-center align-items-center">
                                        <div className="card-body px-5">
                                            <h5 className="card-title mb-3">SUPER AUTHENTIC QUALIFIED<CheckCircleIcon fontSize="large" style={{ color:'teal' }}/></h5>
                                            <table>
                                                <tr>
                                                    <td><strong>Product Name: </strong></td>
                                                    <td>Louis Vuitton - Pochette</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Client Name: </strong></td>
                                                    <td>Image Engine Company Limited</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Serial Number: </strong></td>
                                                    <td>38052ba2-a640-4207-b533-61f4253bfef9</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-5 mb-5">
                                        <p>
                                        The starting price for all authentication services is $30.20, including an official authentication certificate in PDF format that determines whether the goods is ‘Authentic’ or ‘Fake’ based on the pictures you submitted. We will send authentication results to your email and it will appear in your account as well. Our team of experts will verify your goods within 12-24 hours after receiving all needed pictures.
                                        </p>
                                    </div>
                                    <div className="col-12 mb-5">
                                        <button>certificate</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    )
}

export default Certificate
