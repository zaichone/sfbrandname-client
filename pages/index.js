import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Reminder from "../assets/Reminder.jpeg";
import SpecialistBG from "../assets/cover/WhatweSpecialist.jpg"
import HowItWorkBG from "../assets/cover/Howitwork.jpg"
import ReminderBG from "../assets/cover/Extra.jpg"


import Cta from "../components/layout/Cta";
import ServiceList from "../components/layout/ServiceList";
import HowItWorkList from "../components/layout/HowItWorkList";
import LearnMoreBar from "../components/layout/LearnMoreBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Super Authenticate
        </title>
        <meta
          name="description"
          content="มองหาร้านแบรนด์เนมมือสองที่ให้ราคาดี ของแท้ คุณภาพสวย ต้องที่ SF Brandname เท่านั้น เราให้บริการแบบครบวงจร ตั้งแต่ขายสินค้า รับซื้อ และทำสปากระเป๋า"
        />
        <meta
          name="keyword"
          content="ร้านแบรนด์เนมมือสอง ราคาดี, ร้านรับซื้อขายของแบรนด์เนมมือสอง, ร้านรับซื้อกระเป๋าแบรนด์เนมมือสอง, ร้านรับซื้อฝากขายแบรนด์เนมแท้, ร้านรับซื้อและฝากขายแบรนด์เนม, ร้านรับซื้อและฝากขายแบรนด์เนม มือสอง, ร้านรับซื้อ-ฝากขายกระเป๋าแบรนด์เนม, ร้านฝากขายกระเป๋าแบรนด์เนม, ร้านขายสินค้าแบรนด์เนมมือสอง ให้ราคาสูง, ร้านจำนำกระเป๋าแบรนด์เนม
"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container-fluid hero">
          <div className="row pt-5 pb-3 px-5">
            <div className="tagline col-12 col-sm-4 offset-sm-1 d-flex flex-column justify-content-start justify-content-sm-center align-items-center align-items-sm-start">
              <h1 className="fw-normal mb-5">SUPER AUTHENTIC</h1>
              <p className="fs-4 mb-5 d-none d-sm-block">
                Our expert team in designer brands can verify the authenticity
                of new & pre-owned luxury goods. Just within 12-24 hours after
                uploading your pictures, you’ll receive an authentication
                result.
              </p>
              <p className="d-block d-sm-none">
                Authenticate your product by within 12-24 hours.{" "}
              </p>
              <a className="button">Get Start</a>
            </div>
            <div className="col-7 py-5 d-none d-sm-block">
              <div className="cover"></div>
            </div>
          </div>
        </div>
      </main>
      <Cta title="What We Specialist" bg={SpecialistBG} />
      <ServiceList />
      <Cta title="How it Work?" bg={HowItWorkBG} />
      <HowItWorkList />
      <LearnMoreBar
        label="LEARN MORE"
        link="/how-it-work/"
        classes="d-none d-sm-block"
      />
      <Cta title="Reminder" bg={ReminderBG} classes="d-none d-sm-block" />
    </div>
  );
}
