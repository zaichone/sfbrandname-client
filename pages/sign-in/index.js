import Head from 'next/head'
import Link from 'next/link';

function SignIn() {
    return (
        <div>
            <Head>
                <title>SF Brandname - Services</title>
                <meta name="description" content="มองหาร้านแบรนด์เนมมือสองที่ให้ราคาดี ของแท้ คุณภาพสวย ต้องที่ SF Brandname เท่านั้น เราให้บริการแบบครบวงจร ตั้งแต่ขายสินค้า รับซื้อ และทำสปากระเป๋า" />
                <meta name="keyword" content="ร้านแบรนด์เนมมือสอง ราคาดี, ร้านรับซื้อขายของแบรนด์เนมมือสอง, ร้านรับซื้อกระเป๋าแบรนด์เนมมือสอง, ร้านรับซื้อฝากขายแบรนด์เนมแท้, ร้านรับซื้อและฝากขายแบรนด์เนม, ร้านรับซื้อและฝากขายแบรนด์เนม มือสอง, ร้านรับซื้อ-ฝากขายกระเป๋าแบรนด์เนม, ร้านฝากขายกระเป๋าแบรนด์เนม, ร้านขายสินค้าแบรนด์เนมมือสอง ให้ราคาสูง, ร้านจำนำกระเป๋าแบรนด์เนม
"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 px-5 py-5 d-flex flex-column align-items-start">
                    <h1>Sign In</h1>
                    <form>
                        <div className="mb-5">

                            <input type="email" className="form-control form-control-lg" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-5">

                            <input type="password" className="form-control form-control-lg " id="password" placeholder="Password" />
                        </div>
                        <div className="mb-5">
                            <div className="row">
                            <div className="form-check col-6">
                                <input className="form-check-input" type="checkbox" value="" id="keepMeSignedIn" checked />
                                <label className="form-check-label" htmlFor="keepMeSignedIn">
                                    Keep me signed in
                                </label>
                            </div>

                            <div className="col-6">
                            <p className="forget-password-text text-end"><Link href="/forget-password/">Forget Password</Link></p>
                            </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="mb-3">Login</button>
                        </div>
                    </form>
                    <p className="register-text text-center"><Link href="/register/">Don’t have acount, Register here.</Link></p>
                </div>
                <div className="col-8 p-0">
                    <div className="register-cover"></div>
                </div>
            </div>
        </div >
        </main>
        </div>
    )
}

export default SignIn
