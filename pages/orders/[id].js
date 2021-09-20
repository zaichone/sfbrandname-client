import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import PagtTitle from "../../components/layout/PageTitle";
import Heading from "../../components/layout/Heading";
import cover from "../../assets/certificate/cover.png";
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

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

import { auth, firestore, storage } from "../../src/config/firebase";

function OrderDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [clientId, setClientId] = useState();
  const [text, setText] = useState("");
  const [image, setImage] = useState();
  const [message, setMessage] = useState();
  const [messages, setMessages] = useState([]);
  console.log(clientId);
  const MesagesRef = firestore.collection("messages");
  const handleTextChange = (e) => {
    let msg = e.target.value;
    setText(msg);
    console.log("text is", text);
    setMessage({
      clientId: clientId,
      taskId: id,
      type: 'text',
      message: msg,
      owner: "client",
      timestamp: new Date().getTime(),
    });
    console.log("message is", message);
  };
  const uploadFile = () => {
    console.log('uploading');
    let storageRef = storage.ref("/messages/send");
    let file = document.getElementById("files").files[0];
    const ts = Number(new Date())
    const uploadName = `${clientId}_${ts}_${file.name}`
    let thisRef = storageRef.child(uploadName);
    thisRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        setMessage({
          clientId: clientId,
          taskId: id,
          type: 'image',
          owner: "client",
          timestamp: new Date().getTime(),
          imageURL: downloadURL
        });
        setImage(downloadURL)
      });
    })
    console.log(message);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submiting");
    console.log(message);
    if (!message) {
      return;
    }
    if (message && message.type=='text') {
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
    } else if (message && message.type === 'image') {
      await MesagesRef.add(message)
        .then(function () {
          console.log("Document successfully written Image!", new Date().toISOString());
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
      setImage('');
    }
  };

  // get client messages
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

  // get order info
  const [orderInfo, setOrderInfo] = useState({});

  useEffect(() => {
    const reference = firestore.collection("tasks").doc(id);
    const unsubscribe = reference.onSnapshot((snapshot) => {
      const data = snapshot.data();
      setOrderInfo({ ...data, id: id });
    });
    return () => unsubscribe();
  }, []);

  const showMessage = (msg) => {
    if(msg.type==='text'){
      return msg.message;
    }else{
      return <img src={msg.imageURL} style={{maxWidth:'50%'}}/>;
    }
  }
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
                        <p>{orderInfo.name}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <p>Brand</p>
                      </Col>
                      <Col>
                        <p>{orderInfo.brand}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <p>Category</p>
                      </Col>
                      <Col>
                        <p>{orderInfo.category}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <p>Timestamp</p>
                      </Col>
                      <Col>
                        <p>{new Date(orderInfo.timestamp).toLocaleString()}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <p>Order ID</p>
                      </Col>
                      <Col>
                        <p>{orderInfo.id}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <p>Client name</p>
                      </Col>
                      <Col>
                        <p>{orderInfo.clientName}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <p>Client ID</p>
                      </Col>
                      <Col>
                        <p>{orderInfo.clientId}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <p>Status</p>
                      </Col>
                      <Col>
                        <p>{orderInfo.status}</p>
                      </Col>
                    </Row>
                    {/* images */}
                    <Row className=" mt-5">
                      <Col xs={4}>
                        <p className="h4">Product Picture</p>
                      </Col>
                    </Row>
                    <Row className="">
                      {orderInfo.featured ? (
                        <Col
                          xs={3}
                          className="d-flex flex-column justify-content-center mb-3"
                        >
                          <a
                            href={orderInfo.featured ? orderInfo.featured : ""}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <p className="text-center">{"Featured Image"}</p>
                          </a>
                          <img
                            src={orderInfo.featured && orderInfo.featured}
                            alt=""
                            style={{ maxWidth: "10rem", maxHeight: "10rem" }}
                            className="mx-auto my-3 border border-dark"
                          />
                        </Col>
                      ) : null}
                      {orderInfo.images ? (
                        orderInfo.images.map(
                          (img) =>
                            img && (
                              <Col
                                key={img.timestamp}
                                xs={3}
                                className="d-flex flex-column justify-content-center mb-3"
                              >
                                <a
                                  href={img.imageURL ? img.imageURL : "#"}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <p className="text-center">
                                    {img.label ? img.label : "(no label)"}
                                  </p>
                                </a>
                                <img
                                  src={img.imageURL ? img.imageURL : thumbImage}
                                  alt=""
                                  style={{
                                    maxWidth: "10rem",
                                    maxHeight: "10rem",
                                  }}
                                  className="mx-auto my-3 border border-dark"
                                />
                              </Col>
                            )
                        )
                      ) : (
                        <span>no image</span>
                      )}
                    </Row>
                  </Tab>
                  {/* //! this part is still dummy  */}
                  <Tab eventKey="services" title="Services">
                    <h3 className="tab-title">Services</h3>

                    <div>
                      <Row className="mt-3">
                        <Col>
                          <div className="my-3">
                            <Row className="mb-3">
                              <Col xs={1}>
                                <span className=" text-success">
                                  <CheckCircleIcon />
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
                                  <CheckCircleIcon />
                                </span>
                              </Col>
                              <Col xs={4}>
                                <p>Official Documentation</p>
                              </Col>
                              <Col>
                                <span>
                                  link: 38052ba2-a640-4207-b533-61f4253bfef9
                                </span>
                                <Button variant="link">generate</Button>
                                <Button variant="link">delete</Button>
                              </Col>
                            </Row>
                            <Row className="mb-3">
                              <Col xs={1} className="">
                                <span className=" text-danger">
                                  <CancelIcon />
                                </span>
                              </Col>
                              <Col xs={4}>
                                <p>Market Valuation</p>
                              </Col>
                              <Col>
                                <Form.Control
                                  type="text"
                                  placeholder="market value"
                                />
                              </Col>
                            </Row>
                            <Row className="mb-3">
                              <Col xs={1} className="">
                                <span className=" text-danger">
                                  <CancelIcon />
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
                                  <CancelIcon />
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
                                  <CancelIcon />
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
                                  <CancelIcon />
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
                                  <CancelIcon />
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
                                  <CancelIcon />
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
                                  <CancelIcon />
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
                              {showMessage(msg)}
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
                            <input style={{ display: "none" }} type="file" onChange={uploadFile} id="files" name="files[]" multiple />
                            <AttachFileIcon onClick={() => document.getElementById("files").click()} />
                          </button>
                          <button
                            className="btn"
                            type="submit"
                            id="button-addon2"
                          >
                            <TelegramIcon />
                          </button>
                        </div>
                        {
                          image && <img alt="attatch" src={image} style={{
                            margin: "20px",
                            width: 'auto',
                            maxWidth: "250px",
                            maxHeight: "500px",
                            border: "1px solid lightgray",
                            textAlign: "right",
                          }} />
                        }
                      </div>
                    </form>
                  </Tab>

                  <Tab eventKey="transaction" title="Transaction">
                    <h3 className="tab-title">Transaction details</h3>
                    <div>
                      <Row>
                        <Col className=" col-4">Order</Col>
                        <Col>{orderInfo.id}</Col>
                      </Row>
                      <Row>
                        <div className="col col-4">Submitted</div>
                        <Col>
                          {new Date(orderInfo.timestamp).toLocaleString()}
                        </Col>
                      </Row>
                      <Row>
                        <div className="col col-4">Services</div>
                        <Col>Basic Authentication, Official Documentation</Col>
                      </Row>
                      <Row>
                        <div className="col col-4">Amount</div>
                        <Col>$30</Col>
                      </Row>
                      <Row>
                        <div className="col col-4">Payment Method</div>
                        <Col>Master Card **** 3200</Col>
                      </Row>
                    </div>
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
