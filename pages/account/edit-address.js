import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import PagtTitle from "../../components/layout/PageTitle";
import cover from "../../assets/cover/HistoryMyorder.jpg";
import avatar from "../../assets/account/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

import { useRouter } from "next/router";
import SymmetricalDiv from "../../components/layout/SymmetricalDiv";

import { firestore, storage } from "../../src/config/firebase";
import { withProtected } from "../../src/hook/route";

function AccountEditAddress({ auth }) {
  const { user, logout } = auth;
  const router = useRouter();
  const [profile, setProfile] = useState();
  const [profileAvatar, setProfileAvatar] = useState(profile?.profileAvatar);

  const [shippingAddress, setShippingAddress] = useState();
  const [addressName, setAddressName] = useState();
  const [addressPhone, setAddressPhone] = useState();
  const [addressLineOne, setAddressLineOne] = useState();
  const [addressLineTwo, setAddressLineTwo] = useState();
  const [addressZipCode, setAddressZipCode] = useState();

  useEffect(() => {
    const accountRef = firestore.collection("members").doc(user.uid);
    accountRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setProfile(doc.data());
          setProfileAvatar(doc.data().profileAvatar);

          setShippingAddress(doc.data().shippingAddress);
          setAddressName(doc.data().shippingAddress.name);
          setAddressPhone(doc.data().shippingAddress.phone);
          setAddressLineOne(doc.data().shippingAddress.lineOne);
          setAddressLineTwo(doc.data().shippingAddress.lineTwo);
          setAddressZipCode(doc.data().shippingAddress.zipCode);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  function handleNameChanges(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setAddressName(value);
    setShippingAddress({
      ...shippingAddress,
      name: value,
    });
  }
  function handlePhoneChanges(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setAddressPhone(value);
    setShippingAddress({
      ...shippingAddress,
      phone: value,
    });
  }
  function handleLineOneChanges(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setAddressLineOne(value);
    setShippingAddress({
      ...shippingAddress,
      lineOne: value,
    });
  }
  function handleLineTwoChanges(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setAddressLineTwo(value);
    setShippingAddress({
      ...shippingAddress,
      lineTwo: value,
    });
  }
  function handleZipCodeChanges(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setAddressZipCode(value);
    setShippingAddress({
      ...shippingAddress,
      zipCode: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const reference = firestore.collection("members").doc(user.uid);
      await reference
        .set({ shippingAddress: shippingAddress }, { merge: true })
        .then(() => {
          window.alert(`Edited address successfully!`);
          router.back();
        });
    } catch {}
  }

  if (!user) {
    return router.push("/sign-in/");
  }
  return (
    <div>
      <Head>
        <title>Super Authenticate - Account</title>
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
        <PagtTitle title="Account" bg={cover} className="d-none d-sm-block" />

        <section>
          <div className="">
            <div className="row gx-0">
              <div className="col-12 col-sm-3 col-md-2">
                <div className="sidebar text-center">
                  <div className="card">
                    <div
                      className="profile-pic"
                      style={{ width: "100%", padding: "0px 20%" }}
                    >
                      <SymmetricalDiv
                        className="rounded-circle d-block"
                        style={{
                          width: "100%",
                          background: `url('${profileAvatar}')center center no-repeat`,
                          border: "1px solid black",
                        }}
                      ></SymmetricalDiv>
                    </div>
                    <ul className="list-group list-group-flush d-none d-sm-block">
                      <li className="list-group-item">
                        <Link href="/account/" className="nav-link">
                          Account
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link href="/history/" className="nav-link">
                          History
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <button onClick={logout}>Sign Out</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-4 col-md-4">
                <form onSubmit={handleSubmit}>
                  <div className="profile-details">
                    <h3 className="my-3">Edit Address</h3>

                    <div className="row mt-5">
                      <div className="col">
                        <label htmlFor="addressName" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="addressName"
                          name="addressName"
                          defaultValue={addressName}
                          onChange={handleNameChanges}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col">
                        <label htmlFor="addressPhone" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="addressPhone"
                          name="addressPhone"
                          defaultValue={addressPhone}
                          onChange={handlePhoneChanges}
                        />
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col">
                        <label htmlFor="addressLineOne" className="form-label">
                          Address Line 1
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="addressLineOne"
                          name="addressLineOne"
                          placeholder="House Number, Building/Street name"
                          defaultValue={addressLineOne}
                          onChange={handleLineOneChanges}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col">
                        <label htmlFor="addressLineTwo" className="form-label">
                          Address Line 2
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="addressLineTwo"
                          name="addressLineTwo"
                          placeholder="City, Province"
                          defaultValue={addressLineTwo}
                          onChange={handleLineTwoChanges}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col">
                        <label htmlFor="addressName" className="form-label">
                          Zip code
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="addressZipCode"
                          name="addressZipCode"
                          defaultValue={addressZipCode}
                          onChange={handleZipCodeChanges}
                        />
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col">
                        <button className="btn btn-primary" type="submit">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default withProtected(AccountEditAddress);
