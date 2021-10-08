import Head from "next/head";
import Link from "next/link";
import PageTitle from "../../../components/layout/PageTitle";
import cover from "../../../assets/cover/Authentic.jpg";
import Two from "../../../assets/2.png";
import InfoIcon from "@material-ui/icons/Info";

import {
    Tabs,
    Tab,
    Table,
    Modal,
    Row,
    Button,
    Col,
    Form,
    Card,
    Container,
} from "react-bootstrap";
import SymmetricalDiv from "../../../components/layout/SymmetricalDiv";

import Eyewear from "../../../components/uploadForm/Eyewear";
import Watches from "../../../components/uploadForm/Watches";
import Clothing from "../../../components/uploadForm/Clothing";
import Jewelry from "../../../components/uploadForm/Jewelry";
import Shoes from "../../../components/uploadForm/Shoes";
import Bag from "../../../components/uploadForm/Bag";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import commerce from "../../../src/store/commerce";

import { firestore, storage } from "../../../src/config/firebase";

import { withProtected } from "../../../src/hook/route";

const categories = ["Watches", "Bag", "Clothing", "Jewelry", "Shoes"];

function Billing({ auth }) {
    const { user } = auth;

    const [items, setItems] = useState();
    const [cart, setCart] = useState();

    const router = useRouter();
    const { taskId, cartId } = router.query;

    async function handleConfirm() {
        console.log("Confirm");
        router.push({
            pathname: "/authentication/almost-done/",
            query: { taskId: taskId, cartId: cartId },
        });
    }
    useEffect(() => {
        async function initData() {
            commerce.cart.contents().then((items) => { 
                console.log(items); setItems(items); 
                //let price = items?.reduce((a, b) => a.price.raw + b.price.raw, 0);
                //setPrice(price)
            });
            commerce.cart.retrieve().then((cart) => setCart(cart));

        }
        initData();
    }, []);
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
                <ul className="order-nav">
                    <li><Link href="#">Item Info</Link></li>
                    <li><Link href="#">Services</Link></li>
                    <li><Link href="#">Message</Link></li>
                    <li><a className="active">Transaction</a></li>
                </ul>
                <section className="billing-details">
                    <Container>
                        <h3 className="tab-title mb-2">Pending Order.</h3>
                        <p>list of selected services.</p>
                        <div>
                            <Table responsive="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Service</th>
                                        <th>Price</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    items && items.map((item, index) => 
                                    <tr key={item.id}>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price.formatted_with_symbol}</td>
                                    </tr>
                                    )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        <p className="text-end mt-5">Total (VAT Included) {cart?.subtotal.formatted_with_symbol}</p>

                        <div className="form-footer mt-5 d-flex justify-content-center justify-content-sm-start">
                            <button onClick={handleConfirm}>Confirm</button>
                        </div>

                    </Container>

                </section>
            </main>
        </div>
    )
}

export default withProtected(Billing);
