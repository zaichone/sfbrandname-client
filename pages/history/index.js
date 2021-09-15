import { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import PagtTitle from '../../components/layout/PageTitle';
import cover from '../../assets/account/cover.png';
import avatar from '../../assets/account/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';

import { useRouter } from 'next/router';

import { auth, firestore } from "../../src/config/firebase";
import useAuth from '../../src/hooks/auth';

function History() {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [profile, setProfile] = useState();

    useEffect(() => {
        console.log(user.uid)
        const accountRef = firestore.collection('members').doc(user.uid);
        accountRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                setProfile(doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, [])

    if (!user) {
        return router.push('/sign-in/');
    }
    return (
        <div>
            <Head>
                <title>SF Brandname - History</title>
                <meta name="description" content="มองหาร้านแบรนด์เนมมือสองที่ให้ราคาดี ของแท้ คุณภาพสวย ต้องที่ SF Brandname เท่านั้น เราให้บริการแบบครบวงจร ตั้งแต่ขายสินค้า รับซื้อ และทำสปากระเป๋า" />
                <meta name="keyword" content="ร้านแบรนด์เนมมือสอง ราคาดี, ร้านรับซื้อขายของแบรนด์เนมมือสอง, ร้านรับซื้อกระเป๋าแบรนด์เนมมือสอง, ร้านรับซื้อฝากขายแบรนด์เนมแท้, ร้านรับซื้อและฝากขายแบรนด์เนม, ร้านรับซื้อและฝากขายแบรนด์เนม มือสอง, ร้านรับซื้อ-ฝากขายกระเป๋าแบรนด์เนม, ร้านฝากขายกระเป๋าแบรนด์เนม, ร้านขายสินค้าแบรนด์เนมมือสอง ให้ราคาสูง, ร้านจำนำกระเป๋าแบรนด์เนม" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <PagtTitle title="History" bg={cover} />

                <section>
                    <div className="container-fluid gx-0">
                        <div className="row">
                            <div className="col-12 col-sm-3 col-md-2">
                                <div className="sidebar text-center">
                                    <div className="card">
                                        <img src={avatar.src} style={{}} />

                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Account</li>
                                            <li className="list-group-item"><Link href="/history/" className="nav-link">History</Link></li>
                                            <li className="list-group-item"><button onClick={logout}>Sign Out</button></li>
                                        </ul>

                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-sm-9 col-md-10">
                                <div className="profile-details">
                                    <h3>Account</h3>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Business Name</td>
                                                <td>{profile?.firstName} {profile?.lastName}</td>
                                            </tr>
                                            <tr>
                                                <td>Account Created</td>
                                                <td>{profile?.firstName} {profile?.lastName}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>{profile?.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Documentation ID Name</td>
                                                <td>Image Engine Company Limited</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <hr />
                                    <h3 className="mt-5">Payment information</h3>
                                    <div className="payment-info">
                                        <div className="row">
                                            <div className="col">
                                                Pollawat Deeunkong
                                            </div>
                                            <div className="col">
                                                <FontAwesomeIcon icon={faCcMastercard} style={{fontSize:'2rem'}}/>
                                            </div>
                                            <div className="col">
                                                **** **** **** 3200
                                            </div>
                                            <div className="col">
                                            Edit Remove
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <h3 className="mt-5">Address</h3>
                                    <p>
                                        Image Engine Company Limited <br />
                                        188/5 Village Number 22 <br />
                                        Sub. Roubwieng Area Muang<br />
                                        City Chiang Rai Country Thailand<br />
                                        Protal Code 57000
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default History
