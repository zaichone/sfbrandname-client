import { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link';
import PagtTitle from '../../components/layout/PageTitle';
import ServiceListCommon from '../../components/layout/ServiceListCommon';
import SearchBar from '../../components/layout/SearchBar';
import BrandList from '../../components/layout/BrandList';
import cover from '../../assets/branding/cover.png';

import { firestore } from '../../src/config/firebase';

function Branding() {
    const [brands, setBrands] = useState();
    const [searchTerm, setSearchTerm] = useState();
    console.log("🚀 ~ file: index.js ~ line 15 ~ Branding ~ searchTerm", searchTerm)

    function updateBrands(text) {
        setSearchTerm(text);
        const filtered = brands.filter((allBrands) => {
            if (searchTerm == "") {
                return allBrands;
            }else if(allBrands.brandName.toLowerCase().includes(text.toLowerCase())){
                return allBrands;
            }
            console.log('allBrands', allBrands);
            
        });
        console.log('brands', filtered)
        setBrands(filtered);
    }
    useEffect(() => {
        const brandsRef = firestore.collection('brands');
        const unsubscribe = brandsRef
            .onSnapshot((snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                console.log('brands data', data)
                setBrands(data);
            });
        return () => unsubscribe();
    }, []);
    return (
        <div>
            <Head>
                <title>SF Brandname - Branding</title>
                <meta name="description" content="มองหาร้านแบรนด์เนมมือสองที่ให้ราคาดี ของแท้ คุณภาพสวย ต้องที่ SF Brandname เท่านั้น เราให้บริการแบบครบวงจร ตั้งแต่ขายสินค้า รับซื้อ และทำสปากระเป๋า" />
                <meta name="keyword" content="ร้านแบรนด์เนมมือสอง ราคาดี, ร้านรับซื้อขายของแบรนด์เนมมือสอง, ร้านรับซื้อกระเป๋าแบรนด์เนมมือสอง, ร้านรับซื้อฝากขายแบรนด์เนมแท้, ร้านรับซื้อและฝากขายแบรนด์เนม, ร้านรับซื้อและฝากขายแบรนด์เนม มือสอง, ร้านรับซื้อ-ฝากขายกระเป๋าแบรนด์เนม, ร้านฝากขายกระเป๋าแบรนด์เนม, ร้านขายสินค้าแบรนด์เนมมือสอง ให้ราคาสูง, ร้านจำนำกระเป๋าแบรนด์เนม
"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <PagtTitle title="Our Specialist" bg={cover} />
                <section className="page-section">
                    <div className="container">
                        <p className="page-description">
                            Super Authentic offers various services to authenticate your designer brand products - bags, clothings, shoes, accessories, watches, eyewears etc. We have a team of experts to help verify your beloved goods and a customer services team to provide support for you
                        </p>
                    </div>
                </section>
                <ServiceListCommon />
                <SearchBar setSearchTerm={setSearchTerm} updateBrands={updateBrands} />
                {brands &&
                    <BrandList brands={brands} />
                }
            </main>
        </div>
    )
}

export default Branding
