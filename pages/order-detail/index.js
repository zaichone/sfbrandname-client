<<<<<<< Updated upstream
import React from "react";
import Head from "next/head";
import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";
import cover from "../../assets/account/cover.png";
import Two from "../../assets/2.png";
import InfoIcon from "@material-ui/icons/Info";

import SymmetricalDiv from "../../components/layout/SymmetricalDiv";

import { useRouter } from "next/router";
import { useState } from "react";

import { auth, firestore } from "../../src/config/firebase";
import useAuth from "../../src/hooks/auth";



import { Container, Row, Col, Button, Nav } from "react-bootstrap";

const categories = ["Watches", "Bag", "Clothing", "Jewelry", "Shoes"];

function OrderDetail() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>SF Brandname - Order Detail</title>
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
      <main className="page-authenticate">
        <PageTitle title="Order Detail" bg={cover} />

        <div className="">
        <Container>
          <Nav variant="tabs" defaultActiveKey="1">
            <Nav.Item>
              <Nav.Link href="/order-info" eventKey="1">
                Order Info
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/order-services" eventKey="2">
                Services
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/order-messages" eventKey="2">
                Messages
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/order-transaction" eventKey="2">
                Transaction Info
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <div>
            <Row className="mt-3">
              <Col>
                <div className="my-3">
                  <Row className=" mt-5">
                  <Col className="d-flex ">
                <h2 className="fs-4 mt-3 mb-2 me-auto">General Information</h2>
               
              </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <p>Name</p>
                    </Col>
                    <Col>
                      <p>Pochette</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <p>Brand</p>
                    </Col>
                    <Col>
                      <p>LOUIS VUITTON</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <p>Timestamp</p>
                    </Col>
                    <Col>
                      <p>31/12/2021 21:43</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <p>Order ID</p>
                    </Col>
                    <Col>
                      <p>38052ba2-a640-4207-b533-61f4253bfef9</p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row className=" mt-5">
            <Col className="d-flex ">
                <h2 className="fs-4 mt-3 mb-2 me-auto">Product Picture</h2>
               
              </Col>
            </Row>
            <Row className=" mt-5">
              
             
            </Row>
            
          </div>
        </Container>
=======
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import PagtTitle from '../../components/layout/PageTitle';
import Heading from '../../components/layout/Heading';
import cover from '../../assets/certificate/cover.png';
import { Tabs, Tab, Modal, Row, Button, Col, Form, Card, Container } from "react-bootstrap";
import TelegramIcon from '@material-ui/icons/Telegram';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import { auth, firestore } from "../../src/config/firebase";

function OrderDetail() {
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
                                        <h3 className="tab-title">Message?</h3>
                                        
                                    </Tab>
                                    <Tab eventKey="transaction" title="Transaction">
                                        <h3 className="tab-title">General Information</h3>
                                    </Tab>
                                </Tabs>
                                </div>

            <div>
              <Row className="mt-3">
                <Col>
                  <div className="my-3">
                    <Row className=" mt-5">
                      <Col className="d-flex ">
                        <h2 className="fs-4 mt-3 mb-2 me-auto">
                          General Information
                        </h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <p>Name</p>
                      </Col>
                      <Col>
                        <p>Pochette</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <p>Brand</p>
                      </Col>
                      <Col>
                        <p>LOUIS VUITTON</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <p>Timestamp</p>
                      </Col>
                      <Col>
                        <p>31/12/2021 21:43</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <p>Order ID</p>
                      </Col>
                      <Col>
                        <p>38052ba2-a640-4207-b533-61f4253bfef9</p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row className=" mt-5">
                <Col className="d-flex ">
                  <h2 className="fs-4 mt-3 mb-2 me-auto">Product Picture</h2>
                </Col>
              </Row>
              <Row className=" mt-5">
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                  <h3>Serial Number / Date Code</h3>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                    <img src={SampleBagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                  <h3>Serial Number / Date Code</h3>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                    <img src={SampleBagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                  <h3>Serial Number / Date Code</h3>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                    <img src={SampleBagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                  <h3>Serial Number / Date Code</h3>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                    <img src={SampleBagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                  <h3>Serial Number / Date Code</h3>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                    <img src={SampleBagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                  <h3>Serial Number / Date Code</h3>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                    <img src={SampleBagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                  <h3>Serial Number / Date Code</h3>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                    <img src={SampleBagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                  <h3>Serial Number / Date Code</h3>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                    <img src={SampleBagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                  <h3>Serial Number / Date Code</h3>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                    <img src={SampleBagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                  <h3>Serial Number / Date Code</h3>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                    <img src={SampleBagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                  <h3>Serial Number / Date Code</h3>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                    <img src={SampleBagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                  <h3>Serial Number / Date Code</h3>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                    <img src={SampleBagImage.src} alt="" />
                  </div>
                </div>
              </Row>
              </div>
                        </div>
                    </div>
                </section>
                
            </main>
>>>>>>> Stashed changes
        </div>
      </main>
      
    </div>
  );
}

export default OrderDetail;
