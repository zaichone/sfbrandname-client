import Head from "next/head";
import Link from "next/link";
import PagtTitle from "../../../components/layout/PageTitle";
import cover from "../../../assets/cover/Authentic.jpg";
import Two from "../../../assets/2.png";
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

function UploadPicutres({ auth }) {
  const { user } = auth;
  //console.log("🚀 ~ file: index.js ~ line 23 ~ UploadPicutres ~ user", user);

  const [basicAuthen, setBasicAuthen] = useState();
  const [basicAuthenProductId] = useState("prod_bO6J5apeYPoEjp");
  const [cartId, setCartId] = useState();

  const [clientId, setClientId] = useState(user.uid);
  const [taskCategory, setTaskCategory] = useState();
  const [imageAttatch, setImageAttatch] = useState({});
  const [owner] = useState("ADMIN");
  const [featured, setFeatured] = useState("");
  const [images, setImages] = useState([]);

  const router = useRouter();
  const { taskId, category } = router.query;

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

  async function goNext() {
    console.log("images before update", images);
    console.log(`cartId: `, cartId);
    //await commerce.cart.add(productId, 1).then(json => setCartId(json.cart.id));

    const taskRef = firestore.collection("tasks").doc(taskId);
    await taskRef
      .update(
        {
          images: images,
          featured: featured,
          customId: category.substring(0, 2)+formatDate(Date.now())+'-'+taskId.substring(0, 4),
          services:[basicAuthenProductId]
        },
        { merge: true }
      )
      .then(() => { window.localStorage.setItem("customId", formatDate(Date.now())+'-'+taskId); })
      .catch((error) => {});

    router.push({
      pathname: "/authentication/select-services/",
      query: { taskId: taskId },
    });
  }

  function renderUploadForm(category) {
    switch (category) {
      case "Watches":
        return (
          <Watches
            taskId={taskId}
            clientId={clientId}
            setFeatured={setFeatured}
            setImages={setImages}
          />
        );
        break;
      case "Clothing":
        return (
          <Clothing
            taskId={taskId}
            clientId={clientId}
            setFeatured={setFeatured}
            setImages={setImages}
          />
        );
        break;
      case "Jewelry":
        return (
          <Jewelry
            taskId={taskId}
            clientId={clientId}
            setFeatured={setFeatured}
            setImages={setImages}
          />
        );
        break;
      case "Shoes":
        return (
          <Shoes
            taskId={taskId}
            clientId={clientId}
            setFeatured={setFeatured}
            setImages={setImages}
          />
        );
        break;
      case "Bag":
        return (
          <Bag
            taskId={taskId}
            clientId={clientId}
            setFeatured={setFeatured}
            setImages={setImages}
          />
        );
        break;
      default:
        return (
          <Eyewear
            taskId={taskId}
            clientId={clientId}
            setFeatured={setFeatured}
            setImages={setImages}
          />
        );
    }
  }

  return (
    <div>
      <Head>
        <title>SF Brandname - Authentication - Upload Pictures</title>
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
                <div className="sidebar --step-2  px-5 px-sm-0">
                  <div className="card">
                    <h2>Upload Pictures</h2>
                    <p>Give us some pictures. </p>
                    <img
                      src={Two.src}
                      className="img-fluid d-none d-sm-block"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-9 col-md-9 col-xxl-10">
                <div className="details">
                  <p>
                    Please note: all images are required. Click to upload or
                    drag & drop to each example image.
                    <Link href="/image-guideline/">Image Guideline</Link>
                  </p>

                  <div className="mb-5">
                    {category && renderUploadForm(category)}
                  </div>
                  <div className="col-12 mb-3 mt-5 d-flex justify-content-center justify-content-sm-start">
                    <button onClick={goNext}>Next</button>
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
export default withProtected(UploadPicutres);
