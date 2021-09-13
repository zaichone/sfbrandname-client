import {useState, useEffect} from 'react';
import Head from 'next/head'
import Link from 'next/link';
import PagtTitle from '../../components/layout/PageTitle';
import Heading from '../../components/layout/Heading';
import cover from '../../assets/certificate/cover.png';
import thumb from '../../assets/my-order/thumb.png';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import OrderFilter from '../../components/layout/OrderFilter';

import { firestore } from '../../src/config/firebase';

function MyOrder() {
    const [orders, setOrders] = useState();
    const [clientId, setClientId] = useState('');
    useEffect(() => {
        const _clientId = window.localStorage.getItem('clientId');
        setClientId(_clientId);
        const ordersRef = firestore.collection('tasks').where('clientId', '==', _clientId).orderBy('timestamp', 'asc');
        const unsubscribe = ordersRef
            .onSnapshot((snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                console.log('orders data', data)
                setOrders(data);
            });
        return () => unsubscribe();
    }, []);

    function showDate(time){
        console.log(time);
    }
    return (
        <div>
            <Head>
                <title>SF Brandname - My Order</title>
                <meta name="description" content="มองหาร้านแบรนด์เนมมือสองที่ให้ราคาดี ของแท้ คุณภาพสวย ต้องที่ SF Brandname เท่านั้น เราให้บริการแบบครบวงจร ตั้งแต่ขายสินค้า รับซื้อ และทำสปากระเป๋า" />
                <meta name="keyword" content="ร้านแบรนด์เนมมือสอง ราคาดี, ร้านรับซื้อขายของแบรนด์เนมมือสอง, ร้านรับซื้อกระเป๋าแบรนด์เนมมือสอง, ร้านรับซื้อฝากขายแบรนด์เนมแท้, ร้านรับซื้อและฝากขายแบรนด์เนม, ร้านรับซื้อและฝากขายแบรนด์เนม มือสอง, ร้านรับซื้อ-ฝากขายกระเป๋าแบรนด์เนม, ร้านฝากขายกระเป๋าแบรนด์เนม, ร้านขายสินค้าแบรนด์เนมมือสอง ให้ราคาสูง, ร้านจำนำกระเป๋าแบรนด์เนม
"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page-services">
                <PagtTitle title="My Order" bg={cover} />
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            
                            <div className="col-12 col-sm-12 gx-0">
                                <OrderFilter/>
                                <div className="orders">
                                    {
                                        orders?.map((order, index) => 
                                        <div className="order row" key={order.id}>
                                            <div className="col-12 col-sm-2">
                                                <img src={thumb.src}/>
                                            </div>
                                            <div className="col-12 col-sm-4 d-flex flex-column justify-content-center align-items-start">
                                                <h3 className="order-title">{order.name} - {order.brand}</h3>
                                                
                                                <h4 className="date">{new Date(order.timestamp).toLocaleString()}</h4>
                                                <h4 className="orderId"><strong>Order ID:</strong> {order.id}</h4>
                                            </div>
                                            <div className="col-12 col-sm-2 d-flex align-items-center">
                                                <CheckCircleIcon style={{ color:'teal', fontSize:'2rem', marginRight:10}}/>{order.status}
                                            </div>
                                            
                                            <div className="col-12 col-sm-4 d-flex justify-content-end align-items-center">
                                                <button className="detail-btn">Detail</button>
                                                <button className="doc-btn">Document</button>
                                                <button className="more-btn">More</button>
                                            </div>
                                        </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default MyOrder
