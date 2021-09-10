import Head from 'next/head'
import Link from 'next/link';
import PagtTitle from '../../components/layout/PageTitle';
import cover from '../../assets/account/cover.png';
import One from '../../assets/1.png';
import InfoIcon from '@material-ui/icons/Info';

import { useRouter } from 'next/router';
import {useState} from 'react';

import { auth, firestore } from "../../src/config/firebase";
import useAuth from '../../src/hooks/auth';

const categories = ['Watches', 'Bag', 'Clothing', 'Jewelry', 'Shoes'];

function Authentication() {
    const router = useRouter();
    const [info, setInfo] = useState('');
    const [brand, setBrand] = useState('1');
    const [name, setName] = useState('');
    const [clientName, setClientName] = useState('');
    const [category, setCategory] = useState('0');
    const tasksRef = firestore.collection('tasks');
    async function goNext(e){
        e.preventDefault();
        //const { brand, name, clientName, category } = e.target.elements;
        if(brand == '0'){
            alert('Please select Brand ');
        }
        if(name == ''){
            alert('Please insert Name ');
        }
        if(clientName == ''){
            alert('Please insert Client Name ');
        }
        if(category == '0'){
            alert('Please select Category');
        }
        
        console.log(info)
        window.localStorage.setItem('taskInfo', JSON.stringify(info));
        await tasksRef.add(info).then((taskRef) => {
            console.log(taskRef.id);
            window.localStorage.setItem('taskId', taskRef.id);
            
        });
        console.log('go next');
        router.push('/authentication/upload-pictures/')
    }
    function handleBrandChange(e){
        let text = e.target.value;
        setBrand(text);
        console.log(text);
        setInfo({
            brand:brand,
            name:name,
            clientName:clientName,
            category:category,
            timestamp:new Date().getTime()
        });
    }   
    function handleNameChange(e){
        let text = e.target.value;
        setName(text);
        console.log(text);
        setInfo({
            brand:brand,
            name:name,
            clientName:clientName,
            category:category,
            timestamp:new Date().getTime()
        });
    } 
    function handleClientNameChange(e){
        let text = e.target.value;
        setClientName(text);
        console.log(text);
        setInfo({
            brand:brand,
            name:name,
            clientName:clientName,
            category:category,
            timestamp:new Date().getTime()
        });
    }
    function handleCategoryChange(e){
        let text = e.target.value;
        setCategory(text);
        console.log(text);
        setInfo({
            brand:brand,
            name:name,
            clientName:clientName,
            category:category,
            timestamp:new Date().getTime()
        });
    }
    return (
        <div>
            <Head>
                <title>SF Brandname - Authentication</title>
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
                                            <select className="form-select" name="brand" onChange={handleBrandChange} value={brand}>
                                                
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <h3>Name <InfoIcon/></h3>
                                            <input type="text" className="form-control" name="name" onChange={handleNameChange} />
                                        </div>
                                        <div className="mb-3">
                                            <h3>Client Name <InfoIcon/></h3>
                                            <input type="text" className="form-control" name="clientName" onChange={handleClientNameChange}/>
                                        </div>
                                        <div className="mb-3">
                                            <h3>Category <InfoIcon/></h3>
                                            <select className="form-select" name="category" defaultValue={'0'} onChange={handleCategoryChange}>
                                                <option value="0"></option>
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
