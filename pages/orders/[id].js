import { useRouter } from 'next/router'
import {useState, useEffect} from 'react';
import Head from 'next/head'
import Link from 'next/link';
import PagtTitle from '../../components/layout/PageTitle';
import Heading from '../../components/layout/Heading';
import cover from '../../assets/certificate/cover.png';
import {Tabs, Tab, Modal, Row, Button, Col, Form, Card, Container} from "react-bootstrap";

function OrderDetail() {
    const router = useRouter()
    const { id } = router.query
    return (

        <div>
            <Head>
                <title>SF Brandname - My Order</title>
                <meta name="description" content="มองหาร้านแบรนด์เนมมือสองที่ให้ราคาดี ของแท้ คุณภาพสวย ต้องที่ SF Brandname เท่านั้น เราให้บริการแบบครบวงจร ตั้งแต่ขายสินค้า รับซื้อ และทำสปากระเป๋า" />
                <meta name="keyword" content="ร้านแบรนด์เนมมือสอง ราคาดี, ร้านรับซื้อขายของแบรนด์เนมมือสอง, ร้านรับซื้อกระเป๋าแบรนด์เนมมือสอง, ร้านรับซื้อฝากขายแบรนด์เนมแท้, ร้านรับซื้อและฝากขายแบรนด์เนม, ร้านรับซื้อและฝากขายแบรนด์เนม มือสอง, ร้านรับซื้อ-ฝากขายกระเป๋าแบรนด์เนม, ร้านฝากขายกระเป๋าแบรนด์เนม, ร้านขายสินค้าแบรนด์เนมมือสอง ให้ราคาสูง, ร้านจำนำกระเป๋าแบรนด์เนม
"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page-services">
                <PagtTitle title="Order Detail" bg={cover} />
                <h2> order: {id}</h2>
                <section>
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-12 col-sm-12 gx-0">
                            <Tabs defaultActiveKey="home" 
                               id="orderDetails">
                             <Tab eventKey="home" title="Item Info">
                                 <h1>Item Info</h1>
                             </Tab>
                             <Tab eventKey="servives" title="Servives">
                                 <h1>Servives</h1>
                             </Tab>
                             <Tab eventKey="message" title="Message">
                                 <h1>Message</h1>
                             </Tab>
                             <Tab eventKey="transaction" title="Transaction">
                                 <h1>Transaction</h1>
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
