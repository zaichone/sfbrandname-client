import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import PagtTitle from "../../components/layout/PageTitle";
import Heading from "../../components/layout/Heading";
import cover from "../../assets/certificate/cover.png";
import bagImage from "../../assets/my-order/thumb.png";
import {
  Tabs,
  Tab,
  Modal,
  Row,
  Button,
  Col,
  Form,
  Card,
  Container,
} from "react-bootstrap";
import TelegramIcon from "@material-ui/icons/Telegram";
import AttachFileIcon from "@material-ui/icons/AttachFile";

import { auth, firestore } from "../../src/config/firebase";

function OrderDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [clientId, setClientId] = useState();
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState();
  console.log(clientId);
  const MesagesRef = firestore.collection("messages");
  const handleTextChange = (e) => {
    let msg = e.target.value;
    setText(msg);
    console.log("text is", text);
    setMessage({
      clientId: clientId,
      taskId: id,
      message: msg,
      owner: "client",
      timestamp: new Date().getTime(),
    });
    console.log("message is", message);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submiting");
    if (!text) {
      return;
    }
    if (message && text) {
      await MesagesRef.add(message)
        .then(function () {
          console.log(
            "Document successfully written Text!",
            new Date().toISOString()
          );
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
      setText("");
    }
  };
  useEffect(() => {
    const _clientId = window.localStorage.getItem("clientId");
    setClientId(_clientId);
    const _mesagesRef = firestore
      .collection("messages")
      .where("clientId", "==", _clientId)
      .where("taskId", "==", id)
      .orderBy("timestamp", "asc");
    const unsubscribe = _mesagesRef.onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("messages data", data);
      setMessages(data);
    });
    return () => unsubscribe();
  }, []);
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
      <main className="page-services page-content">
        <PagtTitle title="Order Detail" bg={cover} />


        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-12 gx-0">
                <Tabs defaultActiveKey="home" id="orderDetails">
                  <Tab eventKey="home" title="Item Info">
                    <h3 className="tab-title">General Information</h3>
                
                   
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
                
               
                <Row className=" mt-5">
                <Col className="d-flex ">
                  <h2 >Product Picture</h2>
                </Col>
              </Row>
              <Row className=" mt-5">
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                <p>Font </p>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                  <img src={bagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                <p>Logo </p>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                  <img src={bagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                <p>Made In Tag </p>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                  <img src={bagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                <p>Serial Number / Date Code</p>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                  <img src={bagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                <p>Hardware Engraving </p>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                  <img src={bagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                <p>Additional Image </p>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                  <img src={bagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                <p>Additional Image </p>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                  <img src={bagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                <p>Additional Image </p>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                  <img src={bagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                <p>Additional Image </p>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                  <img src={bagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                <p>Additional Image </p>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                  <img src={bagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                <p>Additional Image </p>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                  <img src={bagImage.src} alt="" />
                  </div>
                </div>
                <div className="col-3 text-center my-3 d-flex flex-column justify-content-center">
                  <p>Additional Image </p>
                  <div className="d-flex flex-column align-items-center justify-content-center m-5">
                  <img src={bagImage.src} alt="" />
                  </div>
                </div>
              </Row>

                





                  </Tab>
                  <Tab eventKey="servives" title="Servives">
                    <h1>Servives</h1>
                    <Row className="mb-3">
                      <Col xs={1}>
                        <span className=" text-success">
                          
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

                    <Row className="mb-3">
                      <Col xs={1} className="">
                        <span className=" text-success">
                          
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

                    <Row className="mb-3">
                      <Col xs={1} className="">
                        <span className=" text-danger">
                          
                        </span>
                      </Col>
                      <Col xs={4}>
                        <p>Market Valuation</p>
                      </Col>
                      <Col>
                        <Form.Control type="text" placeholder="market value" />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col xs={1} className="">
                        <span className=" text-danger">
                          
                        </span>
                      </Col>
                      <Col xs={4}>
                        <p>Item Identification</p>
                      </Col>
                      <Col>
                        <Form.Control type="text" placeholder="name" />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col xs={1} className="">
                        <span className=" text-danger">
                          
                        </span>
                      </Col>
                      <Col xs={4}>
                        <p>Year of Production</p>
                      </Col>
                      <Col>
                        <Form.Control type="text" placeholder="year" />
                      </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col xs={1} className="">
                        <span className=" text-danger">
                          
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

                    <Row className="mb-3">
                      <Col xs={1} className="">
                        <span className=" text-danger">
                          
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

                    <Row className="mb-3">
                      <Col xs={1} className="">
                        <span className=" text-danger">
                          
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

                    <Row className="mb-3">
                      <Col xs={1} className="">
                        <span className=" text-danger">
                          
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

                    <Row className="mb-3">
                      <Col xs={1} className="">
                        <span className=" text-danger">
                          
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
                  </Tab>
                  <Tab eventKey="message" title="Message">
                    <h3 className="tab-title">Have something in mind ?</h3>
                    <p>Chat with us, let’s see anything we can help.</p>
                    <form
                      onSubmit={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      <div className="chatBox">
                        <div className="message-lists">
                          {messages?.map((msg) => (
                            <p key={msg.id} className={msg.owner}>
                              {msg.message}
                            </p>
                          ))}
                        </div>
                        <div className="input-group input-bar">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="What help do you need from us?"
                            value={text}
                            onChange={handleTextChange}
                          />
                          <button
                            className="btn"
                            type="button"
                            id="button-addon2"
                          >
                            <AttachFileIcon />
                          </button>
                          <button
                            className="btn"
                            type="submit"
                            id="button-addon2"
                          >
                            <TelegramIcon />
                          </button>
                        </div>
                      </div>
                    </form>
                  </Tab>
                  <Tab eventKey="transaction" title="Transaction">
                    <h3 className="tab-title">General Information</h3>
                    <Row>
                      <Col className=" col-4">Order</Col>
                      <Col>38052ba2-a640-4207-b533-61f4253bfef9</Col>
                    </Row>
                    <Row>
                      <div className="col col-4">Submitted</div>
                      <Col>07/07/2021, 2:38 PM</Col>
                    </Row>
                    <Row>
                      <div className="col col-4">Services</div>
                      <Col>Basic Authentication, Official Documentation</Col>
                    </Row>
                    <Row>
                      <div className="col col-4">Amount</div>
                      <Col>Amount</Col>
                    </Row>

                    <Row>
                      <div className="col col-4">Payment Method</div>
                      <Col>Master Card **** **** **** 3200 ($30)</Col>
                    </Row>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default OrderDetail;
