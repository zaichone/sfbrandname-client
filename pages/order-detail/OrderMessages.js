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
          <Nav variant="tabs" defaultActiveKey="3">
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
              <Nav.Link href="/order-messages" eventKey="3">
                Messages
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/order-transaction" eventKey="4">
                Transaction Info
              </Nav.Link>
            </Nav.Item>
          </Nav>

         

          {/* chat box */}
          <div
            className="bg-light d-flex flex-column w-100"
            style={{ height: "24rem" }}
          >
            <Row>
              <Col className="d-flex flex-row align-items-center">
                <img
                  src={userIcon}
                  className="mx-3 my-1"
                  style={{ width: "2rem", height: "2rem" }}
                />
                <span> chat message from customer</span>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex flex-row-reverse align-items-center">
                <img
                  src={userIcon}
                  className="mx-3 my-1"
                  style={{ width: "2rem", height: "2rem" }}
                />
                <span> chat message from staff</span>
              </Col>
            </Row>
          </div>

          <div className="bg-light d-flex flex-column w-100">
            <Row>
              <Col className="d-flex flex-row align-items-center">
                <Form.Control type="text" placeholder="chat message" />
                <Button>send</Button>
              </Col>
            </Row>
          </div>
        </Container>
        </div>
      </main>
      
    </div>
  );
}

export default OrderDetail;
