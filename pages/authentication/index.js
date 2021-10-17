import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import PageTitle from "../../components/layout/PageTitle";
import cover from "../../assets/cover/Authentic.jpg";
import One from "../../assets/1.png";
import InfoIcon from "@material-ui/icons/Info";

import { useRouter } from "next/router";

import { firestore } from "../../src/config/firebase";

import { withProtected } from "../../src/hook/route";

const categories = [
  "Eyewear",
  "Watches",
  "Bag",
  "Clothing",
  "Jewelry",
  "Shoes",
];

function Authentication({ auth }) {
  const { user, login, logout } = auth;
  //console.log("🚀 ~ file: index.js ~ line 18 ~ Authentication ~ user", user)
  const router = useRouter();
  const [orderId, setOrderId] = useState();
  const [info, setInfo] = useState("");
  const [brand, setBrand] = useState("SF");
  const [name, setName] = useState("John");
  const [clientName, setClientName] = useState("SF");
  const [category, setCategory] = useState("");
  const tasksRef = firestore.collection("tasks");
  const cersRef = firestore.collection("certificates");
  const [brands, setBrands] = useState();
  //console.log("🚀 ~ file: index.js ~ line 27 ~ Authentication ~ brands", brands)

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('');
  }

  async function goNext(e) {
    e.preventDefault();
    const { brand, name, clientName, category } = e.target.elements;
    console.log("🚀 ~ file: index.js ~ line 32 ~ goNext ~ brand", brand.value);
    if (brand == "0") {
      alert("Please select Brand ");
    }
    if (name == "") {
      alert("Please insert Name ");
    }
    if (clientName == "") {
      alert("Please insert Client Name ");
    }
    if (category == "0") {
      alert("Please select Category");
    }

    let _info = {
      clientId: user.uid,
      brand: brand.value,
      name: name.value,
      clientName: clientName.value,
      category: category.value,
      timestamp: new Date().getTime(),
      status: "In Progress",
      orderServices: {
        basicAuthen: true,
        certDocument: false,
        marketValue: "",
        itemIdentify: "",
        yearProduction: "",
        authenAndDelivery: false,
        hermesLeatherRegular: false,
        hermesLeatherExotic: false,
        fastTurnaround: false,
        hardcopyAndDelivery: false,
      },
      services: [],
      paymentConfirmed: false,
    };

    console.log(_info);
    window.localStorage.setItem("taskInfo", JSON.stringify(_info));
    await tasksRef.add(_info).then((taskRef) => {
      console.log(taskRef.id);
      setOrderId(taskRef.id);
      window.localStorage.setItem("taskId", taskRef.id);
      window.localStorage.setItem("clientId", user.uid);
      window.localStorage.setItem("category", category);
      console.log('task ref', taskRef);
      console.log('category', category);

      cersRef.add({ taskId: taskRef.id, cerUrl: '', downloadUrl: '', status: 'pending', qrCodeUrl: '', customId: category.value?.substring(0, 2) + formatDate(Date.now()) + '-' + taskRef.id.substring(0, 4), clientName: clientName.value, brand: brand.value, name: name.value })
        .then((cer) => {
          tasksRef.doc(taskRef.id).update(
            {
              certificateId: cer.id
            },
            { merge: true }
          );
          cersRef.doc(cer.id).update({ cerUrl: `https://superauthenticate.com/certificates/${cer.id}` }, { merge: true });
        });

      router.push({
        pathname: "/authentication/upload-pictures/",
        query: { taskId: taskRef.id, category: category.value },
      });
    });

    console.log("go next");
    /*
        router.push({
            pathname: '/authentication/upload-pictures/',
          query: { orderId: orderId, category:category },
        })
        */
  }

  function handleBrandChange(e) {
    let text = e.target.value;
    setBrand(text);
    console.log(text);
    setInfo({
      clientId: user.uid,
      brand: brand,
      name: name,
      clientName: clientName,
      category: category,
      timestamp: new Date().getTime(),
      status: "In Progress",
    });
  }
  function handleNameChange(e) {
    let text = e.target.value;
    setName(text);
    console.log(text);
    setInfo({
      clientId: user.uid,
      brand: brand,
      name: name,
      clientName: clientName,
      category: category,
      timestamp: new Date().getTime(),
      status: "In Progress",
    });
  }
  function handleClientNameChange(e) {
    let text = e.target.value;
    setClientName(text);
    console.log(text);
    setInfo({
      clientId: user.uid,
      brand: brand,
      name: name,
      clientName: clientName,
      category: category,
      timestamp: new Date().getTime(),
      status: "In Progress",
    });
  }
  function handleCategoryChange(e) {
    let text = e.target.value;
    setCategory(text);
    console.log(text);
    setInfo({
      clientId: user.uid,
      brand: brand,
      name: name,
      clientName: clientName,
      category: text,
      timestamp: new Date().getTime(),
      status: "In Progress",
    });
  }
  useEffect(() => {
    firestore
      .collection("brands")
      .get()
      .then((querySnapshot) => {
        let data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, name: doc.data() });

          //console.log(doc.id, " => ", doc.data());
        });
        setBrands(data);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Super Authenticate - Authentication</title>
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
        <PageTitle title="Authenticate" bg={cover} />
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-3 col-md-3 col-xxl-2 gx-0">
                <div className="sidebar --step-1  px-5 px-sm-0">
                  <div className="card ">
                    <h2 className="">Basic Information</h2>
                    <p className="">Tell us about your item. </p>
                    <img
                      src={One.src}
                      className="img-fluid d-none d-sm-block"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-9 col-md-9 col-xxl-10">
                <div className="details">
                  <form onSubmit={goNext}>
                    <div className="mb-5">
                      <h3>
                        Brand
                      </h3>
                      <select
                        className="form-select"
                        name="brand"
                        onChange={handleBrandChange}
                        value={brand}
                      >
                        {brands?.map((brand, index) => (
                          <option value={brand.name.brandName} key={brand.id}>
                            {brand.name.brandName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-5">
                      <h3>
                        Name
                      </h3>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={handleNameChange}
                      />
                    </div>
                    <div className="mb-5">
                      <h3>
                        Client Name
                      </h3>
                      <input
                        type="text"
                        className="form-control"
                        name="clientName"
                        onChange={handleClientNameChange}
                      />
                    </div>
                    <div className="mb-5">
                      <h3>
                        Category
                      </h3>
                      <select
                        className="form-select"
                        name="category"
                        onChange={handleCategoryChange}
                        value={category}
                      >
                        {categories.map((cat, index) => (
                          <option value={cat} key={index}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-footer d-flex justify-content-center justify-content-sm-start">
                      <button>Next</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default withProtected(Authentication);
