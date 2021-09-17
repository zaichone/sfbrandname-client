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

          <div>
            <Row className="mt-3">
              <Col>
                <div className="my-3">
                  <Row className=" mt-5">
                    <Col>
                      <p className="h4 mb-4">Services</p>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col xs={1}>
                      <span className=" text-success">
                        <CheckIcon />
                      </span>
                    </Col>
                    <Col xs={4}>
                      <p>Basic Authentication</p>
                    </Col>
                    <Col>
                      <div className="mb-3">
                        <Form.Check
                          inline
                          label="authentic"
                          name="group1"
                          type="checkbox"
                          id="1"
                        />
                        <Form.Check
                          inline
                          label="in progress"
                          name="group1"
                          type="checkbox"
                          id="2"
                        />
                        <Form.Check
                          inline
                          label="counterfeit"
                          name="group1"
                          type="checkbox"
                          id="3"
                        />
                        <Form.Check
                          inline
                          label="issue"
                          name="group1"
                          type="checkbox"
                          id="4"
                        />
                      </div>
                    </Col>
                  </Row>

                  <Row  className="mb-3">
                    <Col xs={1} className="">
                      <span className=" text-success">
                        <CheckIcon />
                      </span>
                    </Col>
                    <Col xs={4}>
                      <p>Official Documentation</p>
                    </Col>
                    <Col>
                      <span>link: 38052ba2-a640-4207-b533-61f4253bfef9</span>
                      <Button variant="link">generate</Button>
                      <Button variant="link">delete</Button>

                    </Col>
                  </Row>

                  <Row  className="mb-3">
                    <Col xs={1} className="">
                      <span className=" text-danger">
                        <CrossIcon />
                      </span>
                    </Col>
                    <Col xs={4}>
                      <p>Market Valuation</p>
                    </Col>
                    <Col>
                    <Form.Control type="text" placeholder="market value" />
                    </Col>
                  </Row>

                  <Row  className="mb-3">
                    <Col xs={1} className="">
                      <span className=" text-danger">
                        <CrossIcon />
                      </span>
                    </Col>
                    <Col xs={4}>
                      <p>Item Identification</p>
                    </Col>
                    <Col>
                    <Form.Control type="text" placeholder="name" />
                    </Col>
                  </Row>

                  <Row  className="mb-3">
                    <Col xs={1} className="">
                      <span className=" text-danger">
                        <CrossIcon />
                      </span>
                    </Col>
                    <Col xs={4}>
                      <p>Year of Production</p>
                    </Col>
                    <Col>
                    <Form.Control type="text" placeholder="year" />
                    </Col>
                  </Row>

                  <Row  className="mb-3">
                    <Col xs={1} className="">
                      <span className=" text-danger">
                        <CrossIcon />
                      </span>
                    </Col>
                    <Col xs={4}>
                      <p>Authenticate and Delivery</p>
                    </Col>
                    <Col>
                    <Form.Check
                          inline
                          label="Authenticate and Delivery"
                          name="group1"
                          type="checkbox"
                          id="delivery"
                        />
                    </Col>
                  </Row>

                  <Row  className="mb-3">
                    <Col xs={1} className="">
                      <span className=" text-danger">
                        <CrossIcon />
                      </span>
                    </Col>
                    <Col xs={4}>
                      <p>Hermès Leather Bag</p>
                    </Col>
                    <Col>
                    <Form.Check
                          inline
                          label="Hermès Leather Bag"
                          name="group1"
                          type="checkbox"
                          id="hermes"
                        />
                    </Col>
                  </Row>

                  <Row  className="mb-3">
                    <Col xs={1} className="">
                      <span className=" text-danger">
                        <CrossIcon />
                      </span>
                    </Col>
                    <Col xs={4}>
                      <p>Hermès Exotic Leather Bag</p>
                    </Col>
                    <Col>
                    <Form.Check
                          inline
                          label="Hermès Exotic Leather Bag"
                          name="group1"
                          type="checkbox"
                          id="hermes-exotic"
                        />
                    </Col>
                  </Row>

                  <Row  className="mb-3">
                    <Col xs={1} className="">
                      <span className=" text-danger">
                        <CrossIcon />
                      </span>
                    </Col>
                    <Col xs={4}>
                      <p>2 Hours Turnaround Service</p>
                    </Col>
                    <Col>
                    <Form.Check
                          inline
                          label="2 Hours Turnaround Service"
                          name="group1"
                          type="checkbox"
                          id="fastservice"
                        />
                    </Col>
                  </Row>

                  <Row  className="mb-3">
                    <Col xs={1} className="">
                      <span className=" text-danger">
                        <CrossIcon />
                      </span>
                    </Col>
                    <Col xs={4}>
                      <p>HAC and Delivery</p>
                    </Col>
                    <Col>
                    <Form.Check
                          inline
                          label="HAC and Delivery"
                          name="group1"
                          type="checkbox"
                          id="delivery-hardcopy"
                        />
                    </Col>
                  </Row>
                </div>
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
