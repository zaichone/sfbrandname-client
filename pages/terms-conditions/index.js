import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import PagtTitle from "../../components/layout/PageTitle";
import PageSecondTitle from "../../components/layout/PageSecondTitle";
import cover from "../../assets/cover/Service.jpg";
import cover2 from "../../assets/terms-conditions/cover2.png";
// import LearnMoreBar from "../../components/layout/LearnMoreBar";

function TermsConditions() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>SF Brandname - Terms & Conditions</title>
        <meta
          name="description"
          content="มองหาร้านแบรนด์เนมมือสองที่ให้ราคาดี ของแท้ คุณภาพสวย ต้องที่ SF Brandname เท่านั้น เราให้บริการแบบครบวงจร ตั้งแต่ขายสินค้า รับซื้อ และทำสปากระเป๋า"
        />
        <meta
          name="keyword"
          content="ร้านแบรนด์เนมมือสอง ราคาดี, ร้านรับซื้อขายของแบรนด์เนมมือสอง, ร้านรับซื้อกระเป๋าแบรนด์เนมมือสอง, ร้านรับซื้อฝากขายแบรนด์เนมแท้, ร้านรับซื้อและฝากขายแบรนด์เนม, ร้านรับซื้อและฝากขายแบรนด์เนม มือสอง, ร้านรับซื้อ-ฝากขายกระเป๋าแบรนด์เนม, ร้านฝากขายกระเป๋าแบรนด์เนม, ร้านขายสินค้าแบรนด์เนมมือสอง ให้ราคาสูง, ร้านจำนำกระเป๋าแบรนด์เนม"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PagtTitle title="Terms and Conditions" bg={cover} className = "d-none d-sm-block"/>

        <div className="d-none d-sm-block">
          <PageSecondTitle title="Terms and Conditions" bg={cover2} />
        </div>

        <section>
          <div className="container px-4 mt-5">

            <p>Update 27 july 2021 </p> <br />
            <h2>1.Terms and Conditions</h2> <br />
            <h3>Interpretation and Definitions</h3> <br />
            <p>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>
            <br />
            <h3>DEFINITIONS</h3> <br />
            <p>For the purposes of these Terms and Conditions:</p> <br />
            <ul>
              <li>
                {" "}
                Those who acquire at least 50% of the shares, equity interest or
                other securities are eligible to vote for directors or managers.{" "}
              </li>
              <li>
                {" "}
                Account is defined as a unique account generated for You to
                access our Service or parts of our Service.{" "}
              </li>
              <li> Country refers to: Thailand. </li>
              <li>
                {" "}
                Company (referred to as either “the Company”, “We”, “Us” or
                “Our” in this Agreement) refers to Inc., 1135 Terminal Way #209,
                Reno NV 89502.{" "}
              </li>
              <li>
                {" "}
                Device means any electronic appliances able to access the
                Service such as a tablet, mobile phone or a desktop.{" "}
              </li>
              <li>
                {" "}
                Feedback means feedback, innovations or suggestions sent by You
                regarding the attributes, performance or features of our
                Service.{" "}
              </li>
              <li>
                {" "}
                Goods refer to the items offered for sale on the Service.{" "}
              </li>
              <li> Orders mean a request by You to purchase Goods from Us. </li>
              <li>
                {" "}
                Promotions refer to contests, discounts or other pronotions
                offered through the Service.{" "}
              </li>
              <li> Service refers to the Website. </li>
              <li>
                {" "}
                Terms and Conditions (also referred as “Terms”) mean these Terms
                and Conditions that form the entire agreement between You and
                the Company regarding the use of the Service.{" "}
              </li>
              <li>
                {" "}
                Third-party Social Media Service means any services or content
                (including data, information, products or services) provided by
                a third-party that may be displayed, included or made available
                by the Service.{" "}
              </li>
              <li>
                {" "}
                Website refers to Real Authentication, LLC. , accessible from
                sfbrandname.com{" "}
              </li>
              <li>
                {" "}
                You mean the individual accessing or using the Service, or the
                company, or other legal entity on behalf of which such
                individual is accessing or using the Service, as applicable.{" "}
              </li>
            </ul>{" "}
            <br />
            <h3>ACKNOWLEDGMENT</h3> <br />
            <p>
              Terms and Conditions here covering the use of the Service and the
              agreement that operates between You and the Company. These Terms
              and Conditions set out the rights and obligations of all users
              regarding the use of the Service.
            </p>
            <p>
              Your access to and use of the Service is conditioned on Your
              acceptance of and compliance with these Terms and Conditions which
              apply to all visitors, users and others who access or use the
              Service.
            </p>
            <p>
              You agree to be bound by these Terms and Conditions by accessing
              or using the Service. If You disagree with any part of these Terms
              and Conditions then You may not access the Service.
            </p>
            <p>
              The Company does not permit those under 18 to use the Service. By
              using the Service, You agree that you have the age above 18.
            </p>
            <p>
              Your access to and use of the Service is also conditioned on Your
              acceptance of and compliance with the Privacy Policy of the
              Company. Our Privacy Policy describes Our policies and procedures
              on the collection, use and disclosure of Your personal information
              when You use the Application or the Website and tells You about
              Your privacy rights and how the law protects You. Please read Our
              Privacy Policy carefully before using Our Service.
            </p>
            <br />
            <h3>PLACING ORDERS FOR GOODS</h3> <br />
            <p>
              By placing an Order for Goods through the Service, You warrant
              that You are legally capable of entering into binding contracts.
            </p>{" "}
            <br />
            <h3>YOUR INFORMATION</h3> <br />
            <p>
              If You wish to place an Order for Goods available on the Service,
              You may be asked to provide certain information related to Your
              Order including, but not limited to, Your name, Your email, Your
              phone number, Your credit card number, the expiration date of Your
              credit card, Your billing address, and Your shipping information.
            </p>
            <p>
              You represent and accept that: (i) You have the legal right to use
              any credit or debit card(s) or other payment method(s) in
              connection with any Order; and that (ii) the information You
              supply to us is true, correct and complete.
            </p>
            <p>
              By submitting such information, You grant us the right to provide
              the information to payment processing third parties for purposes
              of facilitating the completion of Your Order.
            </p>{" "}
            <br />
            <h3>ORDER CANCELLATION</h3> <br />
            <p>
              We reserve the right to refuse or cancel Your Order at any time
              for certain reasons including but not limited to:
            </p>
            <ul>
              <li>Goods availability</li>
              <li>Errors in the description or prices for Goods</li>
              <li>Errors in Your Order</li>
            </ul>
            <p>
              We reserve the right to refuse or cancel Your Order if fraud or an
              unauthorized or illegal transaction is suspected.
            </p>{" "}
            <br />
            <h3>YOUR ORDER CANCELLATION RIGHTS</h3> <br />
            <p>
              Goods purchased can only be returned when complied with these
              Terms and Conditions and Our Returns Policy.
            </p>
            <p>
              Our Returns Policy forms a part of these Terms and Conditions.
              Please read our Returns Policy to learn more about your right to
              cancel Your Order.
            </p>
            <p>
              Your right to cancel an Order only applies to Goods returned in
              the same condition as You received them. You should also include
              all of the products instructions, documents and wrappings. Goods
              that are damaged or not in the same condition as You received them
              or which are worn simply beyond opening the original packaging
              will not be reimbursed. You should therefore take reasonable care
              of the purchased Goods while they are in Your possession.
            </p>
            <p>
              You will be reimbursed within 14 days from the day on which We
              receive the returned Goods by the same payment method as used for
              the Order, and You will not incur any fees for such reimbursement.
            </p>
            <p>
              You will not have any right to cancel an Order for the supply of
              any of the Goods with the following conditions:
            </p>
            <ul>
              <li>
                The supply of Goods made to Your specifications or personalized.
              </li>
              <li>
                The supply of Goods which according to their nature are not
                suitable to be returned, deteriorate rapidly or where the date
                of expiry is over.
              </li>
              <li>
                The supply of Goods which are not suitable for return due to
                health protection or hygiene reasons and were unsealed after
                delivery.
              </li>
              <li>
                The supply of Goods which are, after delivery, according to
                their nature, inseparably mixed with other items.
              </li>
              <li>
                The supply of digital content which is not supplied on a
                tangible medium if the performance has begun with Your prior
                express consent and You have acknowledged Your loss of
                cancellation right.
              </li>{" "}
            </ul>{" "}
            <br />
            <h3>AVAILABILITY, ERRORS AND INACCURACIES</h3> <br />
            <p>
              Our offerings of Goods on the Service are persistently updated.
              The Goods available on Our Service may be mispriced, described
              inaccurately, or unavailable, and We may experience delays in
              updating information regarding our Goods on the Service and in Our
              advertising on other websites.
            </p>
            <p>
              We cannot and do not guarantee the accuracy or completeness of any
              information, including prices, product images, specifications,
              availability, and services. We reserve the right to change or
              update information and to correct errors, inaccuracies, or
              omissions at any time without prior notice.
            </p>{" "}
            <br />
            <h3>PRICES POLICY</h3> <br />
            <p>
              The Company reserves the right to revise its prices at any time
              prior to accepting an Order.
            </p>
            <p>
              The prices quoted may be revised by the Company subsequent to
              accepting an Order in the event of any occurrence affecting
              delivery caused by government action, variation in customs duties,
              increased shipping charges, higher foreign exchange costs and any
              other matter beyond the control of the Company. In that event, You
              will have the right to cancel Your Order.
            </p>{" "}
            <br />
            <h3>PAYMENTS</h3> <br />
            <p>
              All Goods purchased are subject to a one-time payment. Payment can
              be made through various payment methods we have available, such as
              Visa, MasterCard, Affinity Card, American Express cards or online
              payment methods (PayPal, for example).
            </p>
            <p>
              Payment cards (credit cards or debit cards) are subject to
              validation checks and authorization by Your card issuer. If we do
              not receive the required authorization, We will not be liable for
              any delay or non-delivery of Your Order.
            </p>
            <br />
            <h3>PROMOTIONS</h3>
            <p>
              Any Promotions made available through the Service may be governed
              by rules that are separate from these Terms.
            </p>
            <p>
              If You participate in any Promotions, please review the applicable
              rules as well as our Privacy policy. If the rules for a Promotion
              conflict with these Terms, the Promotion rules will apply.
            </p>{" "}
            <br />
            <h3>USER ACCOUNTS</h3> <br />
            <p>
              When You create an account with Us, You must provide Us
              information that is accurate, complete, and current at all times.
              Failure to do so constitutes a breach of the Terms, which may
              result in immediate termination of Your account on Our Service.
            </p>
            <p>
              You are responsible for safeguarding the password that You use to
              access the Service and for any activities or actions under Your
              password, whether Your password is with Our Service or a
              Third-Party Social Media Service.
            </p>
            <p>
              You agree not to disclose Your password to any third party. You
              must notify Us immediately upon becoming aware of any breach of
              security or unauthorized use of Your account.
            </p>
            <p>
              You may not use as a username the name of another person or entity
              or that is not lawfully available for use, a name or trademark
              that is subject to any rights of another person or entity other
              than You without appropriate authorization, or a name that is
              otherwise offensive, vulgar or obscene.
            </p>{" "}
            <br />
            <h3>INTELLECTUAL PROPERTY</h3> <br />
            <p>
              The Service and its original content (excluding Content provided
              by You or other users), features and functionality are and will
              remain the exclusive property of the Company and its licensors.
            </p>
            <p>
              The Service is protected by copyright, trademark, and other laws
              of both the Country and foreign countries.
            </p>
            <p>
              Our trademarks and trade dress may not be used in connection with
              any product or service without the prior written consent of the
              Company.
            </p>{" "}
            <br />
            <h3>YOUR FEEDBACK TO US</h3> <br />
            <p>
              All rights, title and interest in any Feedback You provide the
              Company are assigned to You. If for any reason such assignment is
              ineffective, You agree to grant the Company a non-exclusive,
              perpetual, irrevocable, royalty free, worldwide right and license
              to use, reproduce, disclose, sub-license, distribute, modify and
              exploit such Feedback without restriction.
            </p>{" "}
            <br />
            <h3>LINKS TO OTHER WEBSITES</h3>
            <br />
            <p>
              Our Service may contain links to third-party web sites or services
              that the Company does not own or have control over.
            </p>
            <p>
              The Company has no control over, and assumes no liability for the
              content, privacy policies, or practices of any third party of the
              links on Our site.
            </p>
            <br />
            <h3>TERMINATION</h3>
            <br />
            <p>
              We may terminate or suspend Your Account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if You breach these Terms and Conditions.
            </p>
            <p>
              Upon termination, Your right to use the Service will cease
              immediately. If You wish to terminate Your Account, You may simply
              discontinue using the Service.
            </p>
            <br />
            <h3>LIMITATION OF LIABILITY</h3>
            <br />
            <p>
              Notwithstanding any damages that You might incur, the entire
              liability of the Company and any of its suppliers under any
              provision of this Terms and Your exclusive remedy for all of the
              foregoing shall be limited to the amount actually paid by You
              through the Service or 100 USD if You haven’t purchased anything
              through the Service.
            </p>
            <p>
              To the maximum extent permitted by applicable law, in no event
              shall the Company or its suppliers be liable for any special,
              incidental, indirect, or consequential damages whatsoever
              (including, but not limited to, damages for loss of profits, loss
              of data or other information, for business interruption, for
              personal injury, loss of privacy arising out of or in any way
              related to the use of or inability to use the Service, third-party
              software and/or third-party hardware used with the Service, or
              otherwise in connection with any provision of this Terms), even if
              the Company or any supplier has been advised of the possibility of
              such damages and even if the remedy fails of its essential
              purpose.
            </p>
            <br />
            <h3>DISCLAIMER</h3>
            <br />
            <p>
              The Service is provided to You “AS IS” and “AS AVAILABLE” and with
              all faults and defects without warranty of any kind. To the
              maximum extent permitted under applicable law, the Company, on its
              own behalf and on behalf of its Affiliates and its and their
              respective licensors and service providers, expressly disclaims
              all warranties, whether express, implied, statutory or otherwise,
              with respect to the Service, including all implied warranties of
              merchantability, fitness for a particular purpose, title and
              non-infringement, and warranties that may arise out of course of
              dealing, course of performance, usage or trade practice. Without
              limitation to the foregoing, the Company provides no warranty or
              undertaking, and makes no representation of any kind that the
              Service will meet Your requirements, achieve any intended results,
              be compatible or work with any other software, applications,
              systems or services, operate without interruption, meet any
              performance or reliability standards or be error free or that any
              errors or defects can or will be corrected.
            </p>
            <p>
              Without limiting the foregoing, neither the Company nor any of the
              company’s provider makes any representation or warranty of any
              kind, express or implied: (i) as to the operation or availability
              of the Service, or the information, content, and materials or
              products included thereon; (ii) that the Service will be
              uninterrupted or error-free; (iii) as to the accuracy,
              reliability, or currency of any information or content provided
              through the Service; or (iv) that the Service, its servers, the
              content, or e-mails sent from or on behalf of the Company are free
              of viruses, scripts, trojan horses, worms, malware, timebombs or
              other harmful components.
            </p>
            <br />
            <h3>GOVERNING LAW</h3>
            <br />
            <p>
              The laws of the Country, excluding its conflicts of law rules,
              shall govern this Terms and Your use of the Service. Your use of
              the Application may also be subject to other local, state,
              national, or international laws.
            </p>
            <br />
            <h3>DISPUTES RESOLUTION</h3>
            <br />
            <p>
              If You have any concern or dispute about the Service, You agree to
              first try to resolve the dispute informally by contacting the
              Company.
            </p>
            <br />
            <h3>FOR EUROPEAN UNION (EU) USERS</h3>
            <br />
            <p>
              If You are a consumer from member countries of European Union, you
              will benefit from any mandatory provisions of the law of the
              country in which you reside in.
            </p>
            <br />
            <h3>SEVERABILITY AND WAIVER</h3>
            <p>SEVERABILITY</p>
            <br />
            <p>
              If any provision of these Terms is held to be unenforceable or
              invalid, such provision will be changed and interpreted to
              accomplish the objectives of such provision to the greatest extent
              possible under applicable law and the remaining provisions will
              continue in full force and effect.
            </p>
            <br />
            <p>WAIVER</p>
            <p>
              Except as provided herein, the failure to exercise a right or to
              require performance of an obligation under this Terms shall not
              effect a party’s ability to exercise such right or require such
              performance at any time thereafter nor shall the waiver of a
              breach constitute a waiver of any subsequent breach.
            </p>
            <br />
            <h3>TRANSLATION INTERPRETATION</h3>
            <br />
            <p>
              These Terms and Conditions may have been translated. You agree
              that the original English text shall prevail in the case of a
              dispute.
            </p>
            <br />
            <p>CHANGES TO THESE TERMS AND CONDITIONS</p>
            <p>
              We reserve the right, at Our sole discretion, to modify or replace
              these Terms at any time. If a revision is significant We will make
              reasonable efforts to provide at least 30 days’ notice prior to
              any new terms taking effect. What constitutes a significant change
              will be determined at Our sole discretion.
            </p>
            <p>
              By continuing to access or use Our Service after those revisions
              become effective, You agree to be bound by the revised terms. If
              You do not agree to the new terms, in whole or in part, please
              stop using the website and the Service.
            </p>
            <br />
            <h3>CONTACT US</h3>
            <br />
            <p>
              Should you have any inquiries regarding the Terms and Conditions,
              please contact us via email: Send a message within your account
            </p>
            <br />
            <h2>2.PRIVACY POLICY</h2> <br />
            <p>Effective Date: August, 2021 </p>
            <br />
            <p>
              REAL AUTHENTICATION, LLC. (“REAL AUTHENTICATION”, “us”, or “we”)
              is committed to protecting & respecting the privacy of our
              clients. This Privacy Policy covers personal information collected
              about our clients which include: clients of REAL AUTHENTICATION,
              Inc. visitors to our web site (sfbrandname.com, or “the Site”). By
              using REAL AUTHENTICATION, Inc. or accessing the Site, you consent
              to the data practices described in this Privacy Policy. If you do
              not agree to this Privacy Policy, or any of the terms in the Terms
              of Service, you may not continue to use REAL AUTHENTICATION, LLC.
              services or visit the Site. Please review this Privacy Policy to
              better understand our practices as they apply to personal
              information.
            </p>
            <br />
            <h3>CHANGES TO OUR PRIVACY POLICY </h3>
            <br />
            <p>
              From time to time, This Privacy Policy may be rectified at our
              sole discretion. If any substantial changes have been made to this
              policy, You will be notified by posting an announcement on the
              site, sending you an email, or by any other options. Using REAL
              AUTHENTICATION, LLC services, or using the Site, after updates are
              posted and effective, means that You accept any changes announced.
            </p>
            <br />
            <h3>USE OF PERSONAL INFORMATION WE COLLECT </h3>
            <br />
            <p>
              By utilizing our services on the website, sfbrandname.com; with
              your consent; we use the personal information that we collect to
              process requests, communicate with you, provide you with other
              services, offers, and updates, as well as to administer our Site
              and comply with applicable laws. We do not share emails, personal,
              credit card or other payment information with third parties or
              requested by law.
            </p>
            <br />
            <p>LEGAL DISCLAIMER </p>
            <br />
            <p>
              In our sole discretion, we may also disclose information we
              collect to a third party when we believe it is reasonably
              necessary to investigate or prevent harm, fraud, abuse, or illegal
              conduct. If requested by law enforcement, we may disclose personal
              information. Or pursuant to other legal or regulatory processes
              required by law, or, in our sole discretion, to protect our
              rights, property or interests. In the event that we are legally
              compelled to disclose your personal information to a third party,
              we will make reasonable efforts to notify you unless doing so
              would violate the law or court order.
            </p>
            <br />
            <h2>3.Apply as a Business</h2> <br />
            <h3>APPLY AS A BUSINESS</h3>
            <br />
            <p>
              Sell better and get more money! If your business has large volumes
              of luxury products to be authenticated, you can apply for a
              business account for exclusive services. It is great to note that
              this exclusivity is only limited to those who meet our criteria.
              If approved, you and your account will be given these benefits:{" "}
            </p>
            <br />
            <h3>DISCOUNTED PRICES</h3>
            <br />
            <p>
              Discounted rate will be applied to all services on our website,
              except for the turnaround time upgrades and mailed documentation.
            </p>
            <br />
            <h3>POST PAID</h3>
            <br />
            <p>
              Business account is provided with an option to pay for all
              Services at the end of each month as negotiated with SF BrandName
            </p>
            <br />
            <h3>NAME ON DOCUMENTATION</h3>
            <br />
            <p>
              You can edit the name on the documentation to your clients’
              requirement if purchased under your business name.
            </p>
            <br />
            <ul>
              <li>
                * Business accounts are reviewed at the discretion of SF
                Brandname and subject to downgrade when the volume of
                authentication does not comply with the negotiated amount
                anymore.
              </li>
            </ul>
            <br />
          </div>
        </section>
        {/* stolen from <LearnMoreBar/> and make it custom instead*/}
        <div className={`text-center learn-more`}>
          <button type="button" onClick={() => router.back()}>
            BACK
          </button>
        </div>
      </main>
    </div>
  );
}

export default TermsConditions;
