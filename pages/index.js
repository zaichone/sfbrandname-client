import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Reminder from '../assets/Reminder.jpeg';

import Cta from '../components/layout/Cta';
import ServiceList from '../components/layout/ServiceList';
import HowItWorkList from '../components/layout/HowItWorkList';
import LearnMoreBar from '../components/layout/LearnMoreBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SF Brandname ร้านแบรนด์เนมมือสอง ให้ราคาดี คุยง่าย สินค้าคุณภาพ</title>
        <meta name="description" content="มองหาร้านแบรนด์เนมมือสองที่ให้ราคาดี ของแท้ คุณภาพสวย ต้องที่ SF Brandname เท่านั้น เราให้บริการแบบครบวงจร ตั้งแต่ขายสินค้า รับซื้อ และทำสปากระเป๋า" />
        <meta name="keyword" content="ร้านแบรนด์เนมมือสอง ราคาดี, ร้านรับซื้อขายของแบรนด์เนมมือสอง, ร้านรับซื้อกระเป๋าแบรนด์เนมมือสอง, ร้านรับซื้อฝากขายแบรนด์เนมแท้, ร้านรับซื้อและฝากขายแบรนด์เนม, ร้านรับซื้อและฝากขายแบรนด์เนม มือสอง, ร้านรับซื้อ-ฝากขายกระเป๋าแบรนด์เนม, ร้านฝากขายกระเป๋าแบรนด์เนม, ร้านขายสินค้าแบรนด์เนมมือสอง ให้ราคาสูง, ร้านจำนำกระเป๋าแบรนด์เนม
"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container-fluid">
          <div className="row pt-5 pb-3">
            <div className="col-4 offset-1 d-flex flex-column justify-content-center align-items-start">
              <h1 className="fs-1 fw-normal mb-5">SUPER AUTHENTIC</h1>
              <p className="fs-4 mb-5">
                
Our expert team in designer brands can verify the authenticity of new & pre-owned luxury goods. Just within 12-24 hours after uploading your pictures, you’ll receive an authentication result.

              </p>
              <a className="button">Get Start</a>
            </div>
            <div className="col-7 py-5">
              <div className="cover">

              </div>
            </div>
          </div>

        </div>
      </main>
      <Cta title="What We Specialist" bg={Reminder}/>
      <ServiceList/>
      <Cta title="How it Work?" bg={Reminder}/>
      <HowItWorkList/>
      <LearnMoreBar label="LEARN MORE" link="/how-it-work/"/>
      <Cta title="Reminder" bg={Reminder}/>
    </div>
  )
}
