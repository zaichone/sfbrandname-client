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
  const [cart, setCart] = useState([]);
  const [cartId, setCartId] = useState("");
  const [notificationText, setNotificationText] = useState("");
  const [lockButton, setLockButton] = useState(false);

  // console.log(
  //   "🚀 ~ file: index.js ~ line 32 ~ SelectServices ~ products",
  //   products
  // );

  const router = useRouter();
  const { taskId } = router.query;

  async function handleSelectingServices() {
    console.log("Selecting");
    router.push({
      pathname: "/authentication/billing/",
      query: { taskId: taskId, cartId: cartId },
    });
  }
  useEffect(() => {
    async function initShopData() {
      setLockButton(true);
      const { data: products } = await commerce.products.list();
      // console.log("🚀 ~ file: index.js ~ line 43 ~ initData ~ data", products);
      products.sort((a, b) => {
        return a.sort_order - b.sort_order;
      });
      setProducts(products);
      setLockButton(false);
    }
    initShopData();

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

  useEffect(() => {
    async function initCartData() {
      // always call retrieve cart to ensure that cart exists
      commerce.cart.retrieve().then((cart) => {
        console.log(`retrieve cart: `, cart);
        setCartId(cart.id)
      });

      const cartItemsList = await commerce.cart.contents();
      console.log(
        `🚀 ~ file: index.js ~ line 61 ~ initCartData ~ cartitems`,
        cartItemsList
      );
      cartItemsList.forEach((item) => {
        if (cart.find((thing) => thing === item.product_id)) {
          console.log(`item already in cart array`);
        } else {
          cart.push(item.product_id);
        }
      });
    }
    initCartData();
  }, [cart]);

  function handleProductToggle(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (value === true) {
      addToCart(name);
    }
    if (value === false) {
      removeFromCart(name);
    }
  }

  async function addToCart(targetId) {
    setLockButton(true);
    setNotificationText("Adding item to cart... please wait");

    console.log(`addtocart`, targetId);
    await commerce.cart.contents().then((items) => {
      if (items === undefined || items.length == 0) {
        console.log(`[addtocart] cart is empty! should add item now`);
        commerce.cart.add(targetId, 1).then((json) => {
          console.log(`item added!`);
          cart.push(targetId);
          setLockButton(false);
          setNotificationText("Item added!");
          clearNotification();
        });
      } else {
        console.log(`[addtocart] cart has content: `, items);

        if (items.find((item) => item["product_id"] === targetId)) {
          console.log(`found item`);
        } else {
          {
            console.log(
              `[addtocart] ${targetId} not found in cart! should add item now`
            );
            commerce.cart.add(targetId, 1).then((json) => {
              console.log(`item added!`);
              cart.push(targetId);
              setLockButton(false);
              setNotificationText("Item added!");
              clearNotification();
            });
          }
        }

        items.forEach((item) => {
          if (item.product_id === targetId && item.quantity === 1) {
            setLockButton(false);
            setNotificationText("Item added!");
            console.log(
              `[addtocart] found previous ${item.product_id} and quantity is already 1`
            );
          } else if (item.product_id === targetId && item.quantity > 1) {
            console.log(
              `[addtocart] found previous ${item.product_id} but quantity is over 1, forcing quantity now...`
            );
            commerce.cart
              .update(item.product_id, { quantity: 1 })
              .then((response) =>
                console.log(`force change quantity to 1: `, response)
              );
            setLockButton(false);
            setNotificationText("Item added!");
            clearNotification();
          }
        });
      }
    });
  }

  async function removeFromCart(targetId) {
    setLockButton(true);
    setNotificationText("Removing item from cart...");

    console.log(`removeFromcart`, targetId);
    await commerce.cart.contents().then((items) => {
      let targetItem = items.find((item) => item["product_id"] === targetId);
      if (targetItem) {
        commerce.cart.remove(targetItem.id).then(console.log(`removed item`));
        cart.filter((e) => e !== targetItem);
      }
      setLockButton(false);
      setNotificationText("Item removed!");
      clearNotification();
    });
  }

  function checkboxInCart(targetId) {
    let targetItem = cart.find((item) => item === targetId);
    return !!targetItem;
  }

  const clearNotification = () => {
    setTimeout(() => {
      setNotificationText("");
    }, 4500);
  };
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
                    {products ? (
                      products.map((product) => (
                        <div className="form-check service" key={product.id}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={`${product.id}-check`}
                            name={`${product.id}`}
                            defaultChecked={checkboxInCart(product.id)}
                            onChange={handleProductToggle}
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
                      ))
                    ) : (
                      <span>Loading...</span>
                    )}
                    {notificationText && (
                      <div className="alert alert-primary" role="alert">
                        {notificationText}
                      </div>
                    )}
                    <div className="col-12 mb-3 mt-5 d-flex justify-content-center justify-content-sm-start">
                      <button
                        disabled={lockButton}
                        onClick={handleSelectingServices}
                        className={`btn btn-primary`}
                      >
                        Next
                      </button>
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
