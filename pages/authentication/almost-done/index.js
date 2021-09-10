import Head from 'next/head'
import Link from 'next/link';
import PagtTitle from '../../../components/layout/PageTitle';
import cover from '../../../assets/account/cover.png';
import Three from '../../../assets/3.png';
import InfoIcon from '@material-ui/icons/Info';

import SymmetricalDiv from '../../../components/layout/SymmetricalDiv';

import { useRouter } from 'next/router';
import {useState} from 'react';

import { auth, firestore } from "../../../src/config/firebase";
import useAuth from '../../../src/hooks/auth';

const categories = ['Watches', 'Bag', 'Clothing', 'Jewelry', 'Shoes'];

function AlmostDone() {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>SF Brandname - Authentication - Upload Pictures</title>
                <meta name="description" content="มองหาร้านแบรนด์เนมมือสองที่ให้ราคาดี ของแท้ คุณภาพสวย ต้องที่ SF Brandname เท่านั้น เราให้บริการแบบครบวงจร ตั้งแต่ขายสินค้า รับซื้อ และทำสปากระเป๋า" />
                <meta name="keyword" content="ร้านแบรนด์เนมมือสอง ราคาดี, ร้านรับซื้อขายของแบรนด์เนมมือสอง, ร้านรับซื้อกระเป๋าแบรนด์เนมมือสอง, ร้านรับซื้อฝากขายแบรนด์เนมแท้, ร้านรับซื้อและฝากขายแบรนด์เนม, ร้านรับซื้อและฝากขายแบรนด์เนม มือสอง, ร้านรับซื้อ-ฝากขายกระเป๋าแบรนด์เนม, ร้านฝากขายกระเป๋าแบรนด์เนม, ร้านขายสินค้าแบรนด์เนมมือสอง ให้ราคาสูง, ร้านจำนำกระเป๋าแบรนด์เนม
"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page-authenticate">
                <PagtTitle title="Authentications" bg={cover} />
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-3 col-md-3 col-xxl-2 gx-0">
                                <div className="sidebar">
                                    <div className="card">
                                        <h2>Almost Done !</h2>
                                        <p>This is the last process. </p>
                                        <img src={Three.src} className="img-fluid" alt="" />
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-sm-9 col-md-9 col-xxl-10">
                                <div className="details">
                                    <p>Please note: customer privacy is our top piority, these informations will be kept in secret.</p>
                                    
                                        <div className="row">
                                            
                                            
                                            <div className="col-12 mb-3 mt-5">
                                            <button>Process</button>
                                        </div>
                                            
                                        </div>
                                        
                                        
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default AlmostDone
