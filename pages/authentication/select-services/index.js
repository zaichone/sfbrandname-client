import Head from "next/head";
import Link from "next/link";
import PagtTitle from "../../../components/layout/PageTitle";
import cover from "../../../assets/cover/Authentic.jpg";
import Three from "../../../assets/3.png";
import InfoIcon from "@material-ui/icons/Info";

import SymmetricalDiv from "../../../components/layout/SymmetricalDiv";

import Eyewear from "../../../components/uploadForm/Eyewear";
import Watches from "../../../components/uploadForm/Watches";
import Clothing from "../../../components/uploadForm/Clothing";
import Jewelry from "../../../components/uploadForm/Jewelry";
import Shoes from "../../../components/uploadForm/Shoes";
import Bag from "../../../components/uploadForm/Bag";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import commerce from "../../../src/store/commerce";

import { firestore, storage } from "../../../src/config/firebase";

import { withProtected } from "../../../src/hook/route";

const categories = ["Watches", "Bag", "Clothing", "Jewelry", "Shoes"];

function SelectServices({ auth }) {
  const { user } = auth;

  const [products, setProducts] = useState();
  console.log(
    "🚀 ~ file: index.js ~ line 32 ~ SelectServices ~ products",
    products
  );

  const router = useRouter();
  const { taskId, cartId } = router.query;

  async function handleSelectingServices() {
    console.log("Selecting");
    router.push({
      pathname: "/authentication/billing/",
      query: { taskId:taskId, cartId:cartId },
    }); 
  }
  useEffect(() => {
    async function initData() {
      const { data: products } = await commerce.products.list();
      console.log("🚀 ~ file: index.js ~ line 43 ~ initData ~ data", products);
      products.sort((a, b) => {
        return a.sort_order - b.sort_order;
      });
      setProducts(products);
    }
    initData();
    /*
        commerce.products.list().then(response => {
            
            const sortedProduct = await response.data.sort((a,b) =>{
                return a.sort_order - b.sort_order;
            });
            setProducts(sortedProduct);
        }); */
    //commerce.products.retrieve(productId).then(product => setBasicAuthen(product));
    //commerce.cart.add(productId, 1).then(json => setCartId(json.cart.id));
  }, []);
  return (
    <div>
      <Head>
        <title>SF Brandname - Authentication - Select Services</title>
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
      <main className="page-authenticate">
        <PagtTitle title="Authentications" bg={cover} />
        <section>
          <div className="container-fluid">
            <div className="row gx-0">
              <div className="col-12 col-sm-3 col-md-3 col-xxl-2">
                <div className="sidebar --step-3  px-5 px-sm-0">
                  <div className="card">
                    <h2>Select Your Services</h2>
                    <p>Tell us what your looking for</p>
                    <img
                      src={Three.src}
                      className="img-fluid d-none d-sm-block"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-9 col-md-9 col-xxl-10">
                <div className="details">
                  <p>
                    Please note: customer privacy is our top piority, these
                    informations will be kept in secret.
                  </p>

                  <div className="mt-5">
                    {products &&
                      products.map((product) => (
                        <div className="form-check service" key={product.id}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id={`${product.id}-check`}
                            name={`${product.id}-check`}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`${product.id}-check`}
                          >
                            {product.name}
                          </label>
                          <span className="price">
                            {product.price.formatted_with_symbol}
                          </span>
                        </div>
                      ))}

                    <div className="col-12 mb-3 mt-5 d-flex justify-content-center justify-content-sm-start">
                      <button onClick={handleSelectingServices}>Next</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default withProtected(SelectServices);
