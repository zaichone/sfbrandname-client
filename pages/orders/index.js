import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";
import Heading from "../../components/layout/Heading";
import cover from "../../assets/cover/HistoryMyorder.jpg";
import thumb from "../../assets/my-order/thumb.png";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import InfoIcon from "@material-ui/icons/Info";
import CancelIcon from "@material-ui/icons/Cancel";
import OrderFilter from "../../components/layout/OrderFilter";

import SymmetricalDiv from "../../components/layout/SymmetricalDiv";

import { firestore } from "../../src/config/firebase";

import { withProtected } from "../../src/hook/route";

function Order({ auth }) {
  const { user } = auth;
  const router = useRouter();
  const [orders, setOrders] = useState();
  const [clientId, setClientId] = useState("");
  const [isAuthentic, setIsAuthentic] = useState(true);
  const [isCounterfeit, setIsCounterfeit] = useState(true);
  const [isInProgress, setIsInProgress] = useState(true);
  const [isNeedAction, setIsNeedAction] = useState(true);
  useEffect(() => {
    const _clientId = window.localStorage.getItem("clientId");
    setClientId(_clientId);
    const ordersRef = firestore
      .collection("tasks")
      .where("clientId", "==", user.uid)
      .orderBy("timestamp", "asc");
    const unsubscribe = ordersRef.onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("orders data", data);
      setOrders(data);
    });
    return () => unsubscribe();
  }, []);

  function showDate(time) {
    console.log(time);
  }
  function showIcon(status) {
    switch (status) {
      case "Authentic":
        return (
          <CheckCircleIcon
            style={{ color: "teal", fontSize: "2rem", marginRight: 10 }}
          />
        );
        break;
      case "Counterfeit":
        return (
          <CancelIcon
            style={{ color: "orange", fontSize: "2rem", marginRight: 10 }}
          />
        );
        break;
      case "In Progress":
        return (
          <InfoIcon
            style={{ color: "#FFA000", fontSize: "2rem", marginRight: 10 }}
          />
        );
        break;
      default:
        return (
          <InfoIcon
            style={{ color: "red", fontSize: "2rem", marginRight: 10 }}
          />
        );
    }
  }
  if (!user) {
    return router.push("/sign-in/");
  }
  return (
    <div>
      <Head>
        <title>Super Authenticate - My Order</title>
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
      <main className="page-services">
        <PageTitle title="My Order" bg={cover} />
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-12 gx-0">
                <OrderFilter
                  isAuthentic={isAuthentic}
                  setIsAuthentic={setIsAuthentic}
                  isCounterfeit={isCounterfeit}
                  setIsCounterfeit={setIsCounterfeit}
                  isInProgress={isInProgress}
                  setIsInProgress={setIsInProgress}
                  isNeedAction={isNeedAction}
                  setIsNeedAction={setIsNeedAction}
                />
                <div className="orders">
                  {orders?.map((order, index) => (
                    <div className="order row" key={order.id}>
                      <div className="col-4 col-sm-2 order-thumbnail">
                        <SymmetricalDiv
                          className="d-flex flex-column align-items-center justify-content-center image-box"
                          style={{
                            backgroundImage: `url('${order?.featured}')`,
                            backgroundPosition: "center center",
                            backgroundSize: cover,
                          }}
                        ></SymmetricalDiv>
                      </div>
                      <div className="col-8 col-sm-4 px-5 d-flex flex-column justify-content-center align-items-start">
                        <h3 className="order-title">
                          {order.name} - {order.brand}
                        </h3>

                        <h4 className="date">
                          {new Date(order.timestamp).toLocaleString()}
                        </h4>
                        <h4 className="orderId d-none d-sm-inline">
                          <span>Order ID:</span>{" "}
                          {order?.customId?.toUpperCase()}
                        </h4>
                      </div>

                      <div className="col-12 col-sm-2 d-flex align-items-center my-2 my-sm-0">
                        {showIcon(order.status)} {order.status}
                      </div>

                      <div className="col-12 col-sm-4 d-flex justify-content-between justify-content-sm-end align-items-center">
                        <button className="detail-btn">
                          <Link href={`/orders/${order.id}`}>Detail</Link>
                        </button>
                        <button
                          className="doc-btn"
                          onClick={() => {
                            if (!order.paymentConfirmed) {
                              router.push({
                                pathname: "/authentication/thank-you",
                                query: { taskId: order.id },
                              });
                            }else{
                              router.push({
                                pathname: `/certificates/${order?.certificateId}`,                          
                              });
                            }
                          }}
                        >
                          Document
                        </button>
                        <button className="more-btn">
                          <Link href={`/orders/${order.id}`}>More</Link>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default withProtected(Order);
