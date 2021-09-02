import Head from 'next/head'
import Link from 'next/link';
import PagtTitle from '../../components/layout/PageTitle';
import ServiceListCommon from '../../components/layout/ServiceListCommon';
import SearchBar from '../../components/layout/SearchBar';
import BrandList from '../../components/layout/BrandList';
import cover from '../../assets/branding/cover.png';

function Branding() {
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
                <ServiceListCommon/>
                <SearchBar/>
                <BrandList/>
            </main>
        </div>
    )
}

export default Branding
