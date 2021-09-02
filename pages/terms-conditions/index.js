import Head from 'next/head'
import Link from 'next/link';
import PagtTitle from '../../components/layout/PageTitle';
import PageSecondTitle from '../../components/layout/PageSecondTitle';
import cover from '../../assets/terms-conditions/cover.png';
import cover2 from '../../assets/terms-conditions/cover2.png';
import LearnMoreBar from '../../components/layout/LearnMoreBar';

function TermsConditions() {
    return (
        <div>
            <Head>
                <title>SF Brandname - Terms & Conditions</title>
                <meta name="description" content="มองหาร้านแบรนด์เนมมือสองที่ให้ราคาดี ของแท้ คุณภาพสวย ต้องที่ SF Brandname เท่านั้น เราให้บริการแบบครบวงจร ตั้งแต่ขายสินค้า รับซื้อ และทำสปากระเป๋า" />
                <meta name="keyword" content="ร้านแบรนด์เนมมือสอง ราคาดี, ร้านรับซื้อขายของแบรนด์เนมมือสอง, ร้านรับซื้อกระเป๋าแบรนด์เนมมือสอง, ร้านรับซื้อฝากขายแบรนด์เนมแท้, ร้านรับซื้อและฝากขายแบรนด์เนม, ร้านรับซื้อและฝากขายแบรนด์เนม มือสอง, ร้านรับซื้อ-ฝากขายกระเป๋าแบรนด์เนม, ร้านฝากขายกระเป๋าแบรนด์เนม, ร้านขายสินค้าแบรนด์เนมมือสอง ให้ราคาสูง, ร้านจำนำกระเป๋าแบรนด์เนม
"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <PagtTitle title="Terms and Conditions" bg={cover} />
                <PageSecondTitle title="Terms and Conditions" bg={cover2} />
                <section>
                    <div className="container">
                        <p>Update 27 july 2021 </p>
                        <h2>1.Terms and Conditions</h2>
                        <h3>Interpretation and Definitions</h3>
                        <p>
                            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.


                        </p>
                        <h3>DEFINITIONS</h3>
                        <p>For the purposes of these Terms and Conditions:</p>
                        <ul>
                            <li>	Those who acquire at least 50% of the shares, equity interest or other securities are eligible to vote for directors or managers.	</li>
                            <li>	Account is defined as a unique account generated for You to access our Service or parts of our Service.	</li>
                            <li>	Country refers to: Thailand.	</li>
                            <li>	Company (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to Inc., 1135 Terminal Way #209, Reno NV 89502.	</li>
                            <li>	Device means any electronic appliances able to access the Service such as a tablet, mobile phone or a desktop.	</li>
                            <li>	Feedback means feedback, innovations or suggestions sent by You regarding the attributes, performance or features of our Service.	</li>
                            <li>	Goods refer to the items offered for sale on the Service.	</li>
                            <li>	Orders mean a request by You to purchase Goods from Us.	</li>
                            <li>	Promotions refer to contests, discounts or other pronotions offered through the Service.	</li>
                            <li>	Service refers to the Website.	</li>
                            <li>	Terms and Conditions (also referred as “Terms”) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.	</li>
                            <li>	Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.	</li>
                            <li>	Website refers to Real Authentication, LLC. , accessible from sfbrandname.com	</li>
                            <li>	You mean the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.	</li>
                        </ul>
                        <h3>ACKNOWLEDGMENT</h3>
                        <p>
                            Terms and Conditions here covering the use of the Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.

                        </p>
                        <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions which apply to all visitors, users and others who access or use the Service.</p>
                        <p>
                            You agree to be bound by these Terms and Conditions by accessing or using the Service. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
                        <p>The Company does not permit those under 18 to use the Service. By using the Service, You agree that you have the age above 18.</p>
                        <p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>
                    </div>
                </section>
                <LearnMoreBar label="BACK" link="/" />

            </main>
        </div>
    )
}

export default TermsConditions
