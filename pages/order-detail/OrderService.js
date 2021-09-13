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
    <br/>
        <div className="">
        <Container>
          <Nav variant="tabs" defaultActiveKey="2">
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
        </div>
      </main>
      
    </div>
  );
}

export default OrderDetail;
