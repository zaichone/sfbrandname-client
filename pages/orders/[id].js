import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";
import Heading from "../../components/layout/Heading";
import cover from "../../assets/cover/Order.jpg";
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

import SymmetricalDiv from "../../components/layout/SymmetricalDiv";
import ServiceIcons from "../../components/layout/ServiceIcons";

import TelegramIcon from "@material-ui/icons/Telegram";
import AttachFileIcon from "@material-ui/icons/AttachFile";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

import commerce from "../../src/store/commerce";

import { firestore, storage } from "../../src/config/firebase";
import { withProtected } from "../../src/hook/route";

function OrderDetail({ auth }) {
  const { user } = auth;
  const router = useRouter();
  const { id } = router.query;
  const [clientId, setClientId] = useState();
  const [text, setText] = useState("");
  const [image, setImage] = useState();
  const [message, setMessage] = useState();
  const [messages, setMessages] = useState([]);

  const [profile, setProfile] = useState();
  const [profileAvatar, setProfileAvatar] = useState(profile?.profileAvatar);

  console.log(clientId);
  const MesagesRef = firestore.collection("messages");
  const handleTextChange = (e) => {
    let msg = e.target.value;
    setText(msg);
    console.log("text is", text);
    setMessage({
      clientId: clientId,
      taskId: id,
      type: "text",
      message: msg,
      owner: "client",
      timestamp: new Date().getTime(),
    });
    console.log("message is", message);
  };
  const uploadFile = () => {
    console.log("uploading");
    let storageRef = storage.ref("/messages/send");
    let file = document.getElementById("files").files[0];
    const ts = Number(new Date());
    const uploadName = `${clientId}_${ts}_${file.name}`;
    let thisRef = storageRef.child(uploadName);
    thisRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        setMessage({
          clientId: clientId,
          taskId: id,
          type: "image",
          owner: "client",
          timestamp: new Date().getTime(),
          imageURL: downloadURL,
        });
        setImage(downloadURL);
      });
    });
    console.log(message);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submiting");
    console.log(message);
    if (!message) {
      return;
    }
    if (message && message.type == "text") {
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
    } else if (message && message.type === "image") {
      await MesagesRef.add(message)
        .then(function () {
          console.log(
            "Document successfully written Image!",
            new Date().toISOString()
          );
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
      setImage("");
    }
  };

  // get client messages
  useEffect(() => {
    const _clientId = window.localStorage.getItem("clientId");
    setClientId(_clientId);
    if (user) {
      const accountRef = firestore.collection("members").doc(user.uid);
      accountRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            setProfile(doc.data());
            setProfileAvatar(doc.data().profileAvatar);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    }
    const _mesagesRef = firestore
      .collection("messages")
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
  console.log("🚀 ~ file: [id].js ~ line 158 ~ OrderDetail ~ orderInfo", orderInfo)

  useEffect(() => {
    const reference = firestore.collection("tasks").doc(id);
    const unsubscribe = reference.onSnapshot((snapshot) => {
      const data = snapshot.data();
      setOrderInfo({ ...data, id: id });
    });
    return () => unsubscribe();
  }, []);

  const showMessage = (msg) => {
    if (msg.type === "text") {
      return msg.message;
    } else {
      return <img src={msg.imageURL} style={{ maxWidth: "50%" }} />;
    }
  };

  // get shop items

  const [products, setProducts] = useState();

  useEffect(() => {
    async function initShopData() {
      const { data: products } = await commerce.products.list();
      // console.log("🚀 ~ file: index.js ~ line 43 ~ initData ~ data", products);
      products.sort((a, b) => {
        return a.sort_order - b.sort_order;
      });
      setProducts(products);
    }
    initShopData();
  }, []);
  if (!orderInfo.paymentConfirmed) {
    router.push({
      pathname: "/authentication/thank-you",
      query: { taskId:id }
    });
  }
  return (
    <div>
      <Head>
        <title>Super Authenticate - Order Detail</title>
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
        <PageTitle title="Order Detail" bg={cover} />
        <section>
          <Tabs defaultActiveKey="home" id="orderDetails">
            <Tab eventKey="home" title="Item Info">
              <Container>
                <h3 className="tab-title mb-5">General Information</h3>

                <Row>
                  <Col xs={12} sm={2}>
                    <p>Name</p>
                  </Col>
                  <Col>
                    <p>{orderInfo.name || "Loading..."}</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={2}>
                    <p>Brand</p>
                  </Col>
                  <Col>
                    <p>{orderInfo.brand || "Loading..."}</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={2}>
                    <p>Category</p>
                  </Col>
                  <Col>
                    <p>{orderInfo.category || "Loading..."}</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={2}>
                    <p>Timestamp</p>
                  </Col>
                  <Col>
                    <p>
                      {new Date(orderInfo.timestamp).toLocaleString() ||
                        "Loading..."}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={2}>
                    <p>Order ID</p>
                  </Col>
                  <Col>
                    <p>{orderInfo.id || "Loading..."}</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={2}>
                    <p>Client name</p>
                  </Col>
                  <Col>
                    <p>{orderInfo.clientName || "Loading..."}</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={2}>
                    <p>Client ID</p>
                  </Col>
                  <Col>
                    <p>{orderInfo.clientId || "Loading..."}</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={2}>
                    <p>Status</p>
                  </Col>
                  <Col>
                    <p>{orderInfo.status || "Loading..."}</p>
                  </Col>
                </Row>
                {/* images */}
                <Row className=" mt-5">
                  <Col xs={4}>
                    <h3 className="tab-title">Product Picture</h3>
                  </Col>
                </Row>
                <Row className="gx-0 gx-sm-5 mt-5">
                  {orderInfo.featured ? (
                    <Col
                      xs={12}
                      sm={3}
                      className="d-flex flex-column justify-content-center mb-3"
                    >
                      <a
                        href={orderInfo.featured ? orderInfo.featured : ""}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p className="text-center">{"Featured Image"}</p>
                        <SymmetricalDiv
                          className="d-flex flex-column align-items-center justify-content-center"
                          style={{
                            width: "100%",
                            background: `url('${orderInfo.featured && orderInfo.featured
                              }')center center no-repeat`,
                            border: "1px solid black",
                          }}
                        ></SymmetricalDiv>
                      </a>
                    </Col>
                  ) : null}
                  {orderInfo.images ? (
                    orderInfo.images.map(
                      (img) =>
                        img && (
                          <Col
                            key={img.timestamp}
                            xs={12}
                            sm={3}
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

                              <SymmetricalDiv
                                className="d-flex flex-column align-items-center justify-content-center"
                                style={{
                                  width: "100%",
                                  background: `url('${img.imageURL ? img.imageURL : thumbImage
                                    }')center center no-repeat`,
                                  border: "1px solid black",
                                }}
                              ></SymmetricalDiv>
                            </a>
                          </Col>
                        )
                    )
                  ) : (
                    <span>no image</span>
                  )}
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="services" title="Services" className="tab-service">
              <Container>
                <div style={{ maxWidth: "100vw" }}>
                  <ServiceIcons />
                </div>

                {products ? (
                  products.map((product) => (
                    <>
                      <Row className="align-items-center mb-5">
                        <Col xs={12} sm={4}>
                          {orderInfo?.orderServices?.[product.sku] ? (
                            <span className="text-success">
                              <CheckCircleIcon />
                            </span>
                          ) : (
                            <span className=" text-danger">
                              <CancelIcon />
                            </span>
                          )}
                          <span>{product.name}</span>
                        </Col>
                        <Col className="my-3 my-sm-0 ms-2 ms-sm-0">
                          <div
                            className="card-text"
                            dangerouslySetInnerHTML={{
                              __html: product.description,
                            }}
                          />
                        </Col>
                        <Col xs={12} sm={1} className="text-end">
                          <a href="/authentication/select-services">Add</a>
                        </Col>
                      </Row>
                    </>
                  ))
                ) : (
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <p className="mx-auto">Loading Services...</p>
                    </div>
                  </div>
                )}
              </Container>
            </Tab>
            <Tab eventKey="message" title="Message">
              <Container>
                <h3 className="tab-title">Have something in mind ?</h3>
                <p className="mb-5">
                  Chat with us, let’s see anything we can help.
                </p>
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
                          {msg.owner === "client" ? (
                            <span
                              className="avt-icon"
                              style={{
                                background: `url(${profileAvatar})center center no-repeat`,
                              }}
                            ></span>
                          ) : (
                            <span className="avt-icon"></span>
                          )}
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
                      <button className="btn" type="button" id="button-addon2">
                        <input
                          style={{ display: "none" }}
                          type="file"
                          onChange={uploadFile}
                          id="files"
                          name="files[]"
                          multiple
                        />
                        <AttachFileIcon
                          onClick={() =>
                            document.getElementById("files").click()
                          }
                        />
                      </button>
                      <button className="btn" type="submit" id="button-addon2">
                        <TelegramIcon />
                      </button>
                    </div>
                    {image && (
                      <img
                        alt="attatch"
                        src={image}
                        style={{
                          margin: "20px",
                          width: "auto",
                          maxWidth: "250px",
                          maxHeight: "500px",
                          border: "1px solid lightgray",
                          textAlign: "right",
                        }}
                      />
                    )}
                  </div>
                </form>
              </Container>
            </Tab>

            <Tab eventKey="transaction" title="Transaction">
              <Container>
                <h3 className="tab-title mb-5">General Information</h3>
                <div>
                  <Row className="mb-3">
                    <Col xs={12} sm={3}>
                      Order
                    </Col>
                    <Col>{orderInfo?.id}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col xs={12} sm={3}>
                      Submitted
                    </Col>
                    <Col>{new Date(orderInfo.timestamp).toLocaleString()}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col xs={12} sm={3}>
                      Services
                    </Col>
                    <Col>Basic Authentication, Official Documentation</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col xs={12} sm={3}>
                      Amount
                    </Col>
                    <Col>$30</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col xs={12} sm={3}>
                      Payment Method
                    </Col>
                    <Col>Master Card **** 3200</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col xs={12} sm={3}>
                      Payment Status
                    </Col>
                    <Col>{orderInfo?.paymentStatus}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col xs={12} sm={3}>
                      Payment Method
                    </Col>
                    <Col>{orderInfo?.paymentMethod}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col xs={12} sm={3}>
                      Payment Timestamp
                    </Col>
                    <Col>
                      {new Date(orderInfo?.paymentTimestamp).toLocaleString()}
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col xs={12} sm={3}>
                      Payment Reference
                    </Col>
                    <Col>{orderInfo?.paymentRef}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col xs={12} sm={3}>
                      Payment Note
                    </Col>
                    <Col>{orderInfo?.paymentNote}</Col>
                  </Row>
                  <Row>
                    {orderInfo?.paymentImage ? (
                      <Col
                        xs={3}
                        className="d-flex flex-column justify-content-center mb-3"
                      >
                        <a
                          href={
                            orderInfo?.paymentImage
                              ? orderInfo?.paymentImage
                              : ""
                          }
                          target="_blank"
                          rel="noreferrer"
                        >
                          <p className="text-center">{"Payment Image"}</p>
                          <img
                            src={orderInfo?.paymentImage}
                            className="d-flex flex-column align-items-center justify-content-center"
                            style={{
                              width: "100%",
                              border: "1px solid black",
                            }}
                            alt=""
                          />
                        </a>
                      </Col>
                    ) : null}
                  </Row>
                </div>
              </Container>
            </Tab>
          </Tabs>
        </section>
      </main>
    </div>
  );
}

export default withProtected(OrderDetail);
