import Head from 'next/head'
import Reminder from '../../assets/Reminder.jpeg';
import One from '../../assets/1.png';
import Two from '../../assets/2.png';
import Three from '../../assets/3.png';
import Link from 'next/link';
import PagtTitle from '../../components/layout/PageTitle'
import Cta from '../../components/layout/Cta';
import HowItWorkList from '../../components/layout/HowItWorkList';
import DocumentationList from '../../components/layout/DocumentationList';
import LearnMoreBar from '../../components/layout/LearnMoreBar';

function HowItWork() {
    return (
        <div>
            <Head>
                <title>SF Brandname - How It Work</title>
                <meta name="description" content="มองหาร้านแบรนด์เนมมือสองที่ให้ราคาดี ของแท้ คุณภาพสวย ต้องที่ SF Brandname เท่านั้น เราให้บริการแบบครบวงจร ตั้งแต่ขายสินค้า รับซื้อ และทำสปากระเป๋า" />
        <meta name="keyword" content="ร้านแบรนด์เนมมือสอง ราคาดี, ร้านรับซื้อขายของแบรนด์เนมมือสอง, ร้านรับซื้อกระเป๋าแบรนด์เนมมือสอง, ร้านรับซื้อฝากขายแบรนด์เนมแท้, ร้านรับซื้อและฝากขายแบรนด์เนม, ร้านรับซื้อและฝากขายแบรนด์เนม มือสอง, ร้านรับซื้อ-ฝากขายกระเป๋าแบรนด์เนม, ร้านฝากขายกระเป๋าแบรนด์เนม, ร้านขายสินค้าแบรนด์เนมมือสอง ให้ราคาสูง, ร้านจำนำกระเป๋าแบรนด์เนม
"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <PagtTitle title="How It Work" bg={Reminder} />
                <HowItWorkList/>
                <Cta title="Documentation" bg={Reminder}/>
                <DocumentationList/>
                <LearnMoreBar label="MORE DETAIL" link="/404/"/>
            </main>
        </div>
    )
}

export default HowItWork
