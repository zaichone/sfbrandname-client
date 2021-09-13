import { useRouter } from 'next/router'
import {useState, useEffect} from 'react';
import Head from 'next/head'
import Link from 'next/link';
import PagtTitle from '../../components/layout/PageTitle';
import Heading from '../../components/layout/Heading';
import cover from '../../assets/certificate/cover.png';
import {Tabs, Tab, Modal, Row, Button, Col, Form, Card, Container} from "react-bootstrap";
import TelegramIcon from '@material-ui/icons/Telegram';
import AttachFileIcon from '@material-ui/icons/AttachFile';

function OrderDetail() {
    const router = useRouter()
    const { id } = router.query;
    const [message, setMessage] = useState('');
    const handleTextChange = (e) => {
        let text = e.target.value;
        setMessage(text);
        console.log('text is', text);
    }
    return (

        <div>
            <Head>
                <title>SF Brandname - Order Detail</title>
                <meta name="description" content="มองหาร้านแบรนด์เนมมือสองที่ให้ราคาดี ของแท้ คุณภาพสวย ต้องที่ SF Brandname เท่านั้น เราให้บริการแบบครบวงจร ตั้งแต่ขายสินค้า รับซื้อ และทำสปากระเป๋า" />
                <meta name="keyword" content="ร้านแบรนด์เนมมือสอง ราคาดี, ร้านรับซื้อขายของแบรนด์เนมมือสอง, ร้านรับซื้อกระเป๋าแบรนด์เนมมือสอง, ร้านรับซื้อฝากขายแบรนด์เนมแท้, ร้านรับซื้อและฝากขายแบรนด์เนม, ร้านรับซื้อและฝากขายแบรนด์เนม มือสอง, ร้านรับซื้อ-ฝากขายกระเป๋าแบรนด์เนม, ร้านฝากขายกระเป๋าแบรนด์เนม, ร้านขายสินค้าแบรนด์เนมมือสอง ให้ราคาสูง, ร้านจำนำกระเป๋าแบรนด์เนม
"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page-services page-content">
                <PagtTitle title="Order Detail" bg={cover} />
                <section>
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-12 col-sm-12 gx-0">
                            <Tabs defaultActiveKey="home" 
                               id="orderDetails">
                             <Tab eventKey="home" title="Item Info">
                                 <h3 className="tab-title">General Information</h3>
                             </Tab>
                             <Tab eventKey="servives" title="Servives">
                                 <h1>Servives</h1>
                             </Tab>
                             <Tab eventKey="message" title="Message">
                                 <h3 className="tab-title">Have something in mind ?</h3>
                                 <p>Chat with us, let’s see anything we can help.</p>
                                 <div className="chatBox">
                                 <div className="input-group input-bar">
                            <input type="text" className="form-control" placeholder="What help do you need from us?" onChange={handleTextChange}/>
                            <button className="btn" type="button" id="button-addon2"><AttachFileIcon/></button>
                            <button className="btn" type="button" id="button-addon2"><TelegramIcon/></button>
                        </div>
                                 </div>
                             </Tab>
                             <Tab eventKey="transaction" title="Transaction">
                                 <h3 className="tab-title">General Information</h3>
                             </Tab>
                         </Tabs>
                               
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default OrderDetail
