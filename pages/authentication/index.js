import Head from 'next/head'
import Link from 'next/link';
import PagtTitle from '../../components/layout/PageTitle';
import cover from '../../assets/account/cover.png';
import One from '../../assets/1.png';
import InfoIcon from '@material-ui/icons/Info';

import {useState} from 'react';

import { auth, firestore } from "../../src/config/firebase";
import useAuth from '../../src/hooks/auth';

const categories = ['Watches', 'Bag', 'Clothing', 'Jewelry', 'Shoes'];

function Authentication() {
    const [info, setInfo] = useState('');
    const [brand, setBrand] = useState();
    const [name, setName] = useState();
    const [clientName, setClientName] = useState();
    const [category, setCategory] = useState();
    const tasksRef = firestore.collection('tasks');
    function goNext(e){
        e.preventDefault();
        const { brand, name, clientName, category } = e.target.elements;
        if(brand.value == '0'){
            alert('Please select Brand ');
        }
        if(name.value == ''){
            alert('Please insert Name ');
        }
        if(clientName.value == ''){
            alert('Please insert Client Name ');
        }
        if(category.value == '0'){
            alert('Please select Category');
        }
        setInfo({
            brand:brand.value,
            name:name.value,
            clientName:clientName.value,
            category:category.value,
            timestamp:new Date().getTime()
        });
        console.log(info)
        tasksRef.add(info).then((taskRef) => {
            console.log(taskRef.id);
        });
        console.log('go next');
    }
    return (
        <div>
            <Head>
                <title>SF Brandname - Certificate</title>
                <meta name="description" content="มองหาร้านแบรนด์เนมมือสองที่ให้ราคาดี ของแท้ คุณภาพสวย ต้องที่ SF Brandname เท่านั้น เราให้บริการแบบครบวงจร ตั้งแต่ขายสินค้า รับซื้อ และทำสปากระเป๋า" />
                <meta name="keyword" content="ร้านแบรนด์เนมมือสอง ราคาดี, ร้านรับซื้อขายของแบรนด์เนมมือสอง, ร้านรับซื้อกระเป๋าแบรนด์เนมมือสอง, ร้านรับซื้อฝากขายแบรนด์เนมแท้, ร้านรับซื้อและฝากขายแบรนด์เนม, ร้านรับซื้อและฝากขายแบรนด์เนม มือสอง, ร้านรับซื้อ-ฝากขายกระเป๋าแบรนด์เนม, ร้านฝากขายกระเป๋าแบรนด์เนม, ร้านขายสินค้าแบรนด์เนมมือสอง ให้ราคาสูง, ร้านจำนำกระเป๋าแบรนด์เนม
"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page-authenticate">
                <PagtTitle title="Authenticate" bg={cover} />
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-3 col-md-3 col-xxl-2 gx-0">
                                <div className="sidebar">
                                    <div className="card">
                                        <h2>Basic Information</h2>
                                        <p>Tell us about your item. </p>
                                        <img src={One.src} className="img-fluid" alt="" />
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-sm-9 col-md-9 col-xxl-10">
                                <div className="details">
                                    <form onSubmit={goNext}>
                                        <div className="mb-3">
                                            <h3>Brand <InfoIcon/></h3>
                                            <select className="form-select" name="brand">
                                                <option selected value='0'></option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <h3>Name <InfoIcon/></h3>
                                            <input type="text" className="form-control" name="name" placeholder="" />
                                        </div>
                                        <div className="mb-3">
                                            <h3>Client Name <InfoIcon/></h3>
                                            <input type="text" className="form-control" name="clientName" placeholder="" />
                                        </div>
                                        <div className="mb-3">
                                            <h3>Category <InfoIcon/></h3>
                                            <select className="form-select" name="category">
                                                <option selected value="0"></option>
                                                {
                                                    categories.map((cat, index) => 
                                                        <option value={cat} key={index}>{cat}</option>
                                                    )
                                                }
                                                
                                            </select>
                                        </div>
                                        <div className="mb-3 mt-5">
                                            <button>Next</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Authentication
