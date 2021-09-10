import Head from 'next/head'
import Link from 'next/link';
import PagtTitle from '../../components/layout/PageTitle';
import cover from '../../assets/account/cover.png';
import avatar from '../../assets/account/avatar.png';

import { useRouter } from 'next/router';

import { auth } from "../../src/config/firebase";
import useAuth from '../../src/hooks/auth';

function Account() {
    const { user, login, logout } = useAuth();
    console.log("🚀 ~ file: index.js ~ line 14 ~ Account ~ user", user)
    const router = useRouter()
    //console.log("🚀 ~ file: index.js ~ line 11 ~ Account ~ user", user)
    if (!user) {
        return router.push('/sign-in/');
    }
    return (
        <div>
            <Head>
                <title>SF Brandname - Account</title>
                <meta name="description" content="มองหาร้านแบรนด์เนมมือสองที่ให้ราคาดี ของแท้ คุณภาพสวย ต้องที่ SF Brandname เท่านั้น เราให้บริการแบบครบวงจร ตั้งแต่ขายสินค้า รับซื้อ และทำสปากระเป๋า" />
                <meta name="keyword" content="ร้านแบรนด์เนมมือสอง ราคาดี, ร้านรับซื้อขายของแบรนด์เนมมือสอง, ร้านรับซื้อกระเป๋าแบรนด์เนมมือสอง, ร้านรับซื้อฝากขายแบรนด์เนมแท้, ร้านรับซื้อและฝากขายแบรนด์เนม, ร้านรับซื้อและฝากขายแบรนด์เนม มือสอง, ร้านรับซื้อ-ฝากขายกระเป๋าแบรนด์เนม, ร้านฝากขายกระเป๋าแบรนด์เนม, ร้านขายสินค้าแบรนด์เนมมือสอง ให้ราคาสูง, ร้านจำนำกระเป๋าแบรนด์เนม" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <PagtTitle title="Account" bg={cover} />

                <section>
                    <div className="container-fluid gx-0">
                        <div className="row">
                            <div className="col-12 col-sm-3 col-md-2">
                                <div className="sidebar text-center">
                                    <div className="card">
                                        <img src={avatar.src} style={{}}/>
                                        
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Account</li>
                                            <li className="list-group-item">History</li>
                                            <li className="list-group-item"><button onClick={logout}>Sign Out</button></li>
                                        </ul>
                                        
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-sm-9 col-md-10">
                                <div className="profile-details">
                                    <h3>Account</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Account
