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

import { firestore, storage } from "../../src/config/firebase";
import { withProtected } from "../../src/hook/route";

function OrderDetail({auth}) {
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
    if (msg.type === "text") {
      return msg.message;
    } else {
      return <img src={msg.imageURL} style={{ maxWidth: "50%" }} />;
    }
  };

  if (!user) {
    return router.push("/sign-in/");
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
                        <p>{orderInfo.name || "Loading..."}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <p>Brand</p>
                      </Col>
                      <Col>
                        <p>{orderInfo.brand || "Loading..."}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <p>Category</p>
                      </Col>
                      <Col>
                        <p>{orderInfo.category || "Loading..."}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
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
                      <Col xs={4}>
                        <p>Order ID</p>
                      </Col>
                      <Col>
                        <p>{orderInfo.id || "Loading..."}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <p>Client name</p>
                      </Col>
                      <Col>
                        <p>{orderInfo.clientName || "Loading..."}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <p>Client ID</p>
                      </Col>
                      <Col>
                        <p>{orderInfo.clientId || "Loading..."}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4}>
                        <p>Status</p>
                      </Col>
                      <Col>
                        <p>{orderInfo.status || "Loading..."}</p>
                      </Col>
                    </Row>
                    {/* images */}
                    <Row className=" mt-5">
                      <Col xs={4}>
                        <p className="h4">Product Picture</p>
                      </Col>
                    </Row>
                    <Row className="gx-5">
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
                            style={{ maxWidth: "100%", maxHeight: "100%" }}
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
                                    maxWidth: "100%",
                                    maxHeight: "100%",
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
                  {/*//? this part is almost dummy */}
                  <Tab eventKey="services" title="Services">
                    <div>
                      <h3 className="tab-title">Services</h3>

                      <Row className="py-2  align-items-center">
                        <Col xs={1}>
                          {orderInfo.basicAuthen ? (
                            <span className=" text-success">
                              <CheckCircleIcon />
                            </span>
                          ) : (
                            <span className=" text-danger">
                              <CancelIcon />
                            </span>
                          )}
                        </Col>
                        <Col xs={4}>
                          <span>Basic Authentication</span>
                        </Col>
                        <Col>
                          <div className="">
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="status-authentic"
                                id="status-authentic"
                                readOnly
                                disabled
                                checked={
                                  orderInfo.basicAuthen === "authentic" || false
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="hardcopyAndDelivery"
                              >
                                Authentic
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="status-counterfeit"
                                id="status-counterfeit"
                                readOnly
                                disabled
                                checked={
                                  orderInfo.basicAuthen === "counterfeit" ||
                                  false
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="hardcopyAndDelivery"
                              >
                                Counterfeit
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="status-inProgress"
                                id="status-inProgress"
                                readOnly
                                disabled
                                checked={
                                  orderInfo.basicAuthen === "inProgress" ||
                                  false
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="hardcopyAndDelivery"
                              >
                                In progress
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="status-issue"
                                id="status-issue"
                                readOnly
                                disabled
                                checked={
                                  orderInfo.basicAuthen === "issue" || false
                                }
                              />
                              <label
                                className="form-check-label"
                                htmlFor="hardcopyAndDelivery"
                              >
                                Issue
                              </label>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="py-2 mt-3 mb-1 align-items-center">
                        <Col xs={1} className="">
                          {orderInfo.certDocument ? (
                            <span className=" text-success">
                              <CheckCircleIcon />
                            </span>
                          ) : (
                            <span className=" text-danger">
                              <CancelIcon />
                            </span>
                          )}
                        </Col>
                        <Col xs={4}>
                          <span>Official Documentation</span>
                        </Col>
                        <Col>
                          <span>{orderInfo.certDocument || ""}</span>
                        </Col>
                      </Row>
                      <Row className="py-2 align-items-center">
                        <Col xs={1}>
                          {orderInfo.marketValue ? (
                            <span className=" text-success">
                              <CheckCircleIcon />
                            </span>
                          ) : (
                            <span className=" text-danger">
                              <CancelIcon />
                            </span>
                          )}
                        </Col>
                        <Col xs={4}>
                          <span>Market Valuation</span>
                        </Col>
                        <Col>
                          <input
                            type="text"
                            className="form-control"
                            name="marketValue"
                            value={orderInfo.marketValue || ""}
                            readOnly
                            disabled
                          />
                        </Col>
                      </Row>
                      <Row className="py-2 align-items-center">
                        <Col xs={1} className="">
                          {orderInfo.itemIdentify ? (
                            <span className=" text-success">
                              <CheckCircleIcon />
                            </span>
                          ) : (
                            <span className=" text-danger">
                              <CancelIcon />
                            </span>
                          )}
                        </Col>
                        <Col xs={4}>
                          <span>Item Identification</span>
                        </Col>
                        <Col>
                          <input
                            type="text"
                            className="form-control"
                            name="itemIdentify"
                            value={orderInfo.itemIdentify || ""}
                            readOnly
                            disabled
                          />
                        </Col>
                      </Row>
                      <Row className="py-2 align-items-center">
                        <Col xs={1} className="">
                          {orderInfo.yearProduction ? (
                            <span className=" text-success">
                              <CheckCircleIcon />
                            </span>
                          ) : (
                            <span className=" text-danger">
                              <CancelIcon />
                            </span>
                          )}
                        </Col>
                        <Col xs={4}>
                          <span>Year of Production</span>
                        </Col>
                        <Col>
                          <input
                            type="text"
                            className="form-control"
                            name="yearProduction"
                            value={orderInfo.yearProduction || ""}
                            readOnly
                            disabled
                          />
                        </Col>
                      </Row>
                      <Row className="py-2 mt-3 align-items-center">
                        <Col xs={1} className="">
                          {orderInfo.authenAndDelivery ? (
                            <span className=" text-success">
                              <CheckCircleIcon />
                            </span>
                          ) : (
                            <span className=" text-danger">
                              <CancelIcon />
                            </span>
                          )}
                        </Col>
                        <Col xs={4}>
                          <span>Authenticate and Delivery</span>
                        </Col>
                        <Col>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="authenAndDelivery"
                              id="authenAndDelivery"
                              checked={orderInfo.authenAndDelivery || false}
                              readOnly
                              disabled
                            />
                            <label
                              className="form-check-label"
                              htmlFor="authenAndDelivery"
                            >
                              Authenticate and Delivery
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <Row className="py-2 mt-3 align-items-center">
                        <Col xs={1} className="">
                          {orderInfo.hermesLeatherRegular ? (
                            <span className=" text-success">
                              <CheckCircleIcon />
                            </span>
                          ) : (
                            <span className=" text-danger">
                              <CancelIcon />
                            </span>
                          )}
                        </Col>
                        <Col xs={4}>
                          <span>Hermès Leather Bag</span>
                        </Col>
                        <Col>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="hermesLeatherRegular"
                              id="hermesLeatherRegular"
                              checked={orderInfo.hermesLeatherRegular || false}
                              readOnly
                              disabled
                            />
                            <label
                              className="form-check-label"
                              htmlFor="hermesLeatherRegular"
                            >
                              Hermès Leather Bag
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <Row className="py-2 mt-3 align-items-center">
                        <Col xs={1} className="">
                          {orderInfo.hermesLeatherExotic ? (
                            <span className=" text-success">
                              <CheckCircleIcon />
                            </span>
                          ) : (
                            <span className=" text-danger">
                              <CancelIcon />
                            </span>
                          )}
                        </Col>
                        <Col xs={4}>
                          <span>Hermès Exotic Leather Bag</span>
                        </Col>
                        <Col>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="hermesLeatherExotic"
                              id="hermesLeatherExotic"
                              checked={orderInfo.hermesLeatherExotic || false}
                              readOnly
                              disabled
                            />
                            <label
                              className="form-check-label"
                              htmlFor="hermesLeatherExotic"
                            >
                              Hermès Exotic Leather Bag
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <Row className="py-2 mt-3 align-items-center">
                        <Col xs={1} className="">
                          {orderInfo.fastTurnaround ? (
                            <span className=" text-success">
                              <CheckCircleIcon />
                            </span>
                          ) : (
                            <span className=" text-danger">
                              <CancelIcon />
                            </span>
                          )}
                        </Col>
                        <Col xs={4}>
                          <span>2 Hours Turnaround Service</span>
                        </Col>
                        <Col>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="fastTurnaround"
                              id="fastTurnaround"
                              checked={orderInfo.fastTurnaround || false}
                              readOnly
                              disabled
                            />
                            <label
                              className="form-check-label"
                              htmlFor="fastTurnaround"
                            >
                              2 Hours Turnaround Service
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <Row className="py-2 mt-3 align-items-center">
                        <Col xs={1} className="">
                          {orderInfo.hardcopyAndDelivery ? (
                            <span className=" text-success">
                              <CheckCircleIcon />
                            </span>
                          ) : (
                            <span className=" text-danger">
                              <CancelIcon />
                            </span>
                          )}
                        </Col>
                        <Col xs={4}>
                          <span>HAC and Delivery</span>
                        </Col>
                        <Col>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="hardcopyAndDelivery"
                              id="hardcopyAndDelivery"
                              checked={orderInfo.hardcopyAndDelivery || false}
                              readOnly
                              disabled
                            />
                            <label
                              className="form-check-label"
                              htmlFor="hardcopyAndDelivery"
                            >
                              HAC and Delivery
                            </label>
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
                          <button
                            className="btn"
                            type="button"
                            id="button-addon2"
                          >
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
                          <button
                            className="btn"
                            type="submit"
                            id="button-addon2"
                          >
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

export default withProtected(OrderDetail);
