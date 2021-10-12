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

import { firestore, storage } from "../../src/config/firebase";
import { withProtected } from "../../src/hook/route";

function Account({ auth }) {
  const { user, logout } = auth;
  const router = useRouter();
  const [profile, setProfile] = useState();
  const [profileAvatar, setProfileAvatar] = useState(profile?.profileAvatar);

  async function uploadAvatar() {
    const accountRef = firestore.collection("members").doc(user.uid);
    let storageRef = storage.ref("/account/avatars");
    let file = document.getElementById("filesAvatar").files[0];
    const ts = Number(new Date());
    const uploadName = `${user.uid}_${ts}_${file.name}`;
    let thisRef = storageRef.child(uploadName);
    await thisRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log(
          "🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL",
          downloadURL
        );
        setProfileAvatar(downloadURL);
        console.log(
          "🚀 ~ file: index.js ~ line 38 ~ snapshot.ref.getDownloadURL ~ user.uid",
          user.uid
        );
        accountRef
          .update(
            {
              profileAvatar: downloadURL,
            },
            { merge: true }
          )
          .then(() => {})
          .catch((error) => {});
      });
    });
  }
  console.log("profileAvatar", profileAvatar);
  useEffect(() => {
    console.log(user.uid);
    const accountRef = firestore.collection("members").doc(user.uid);
    accountRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setProfile(doc.data());
          setProfileAvatar(doc.data().profileAvatar);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  if (!user) {
    return router.push("/sign-in/");
  }
  const [allowEdit, setAllowEdit] = useState(false);
  function toggleEdit() {
    setAllowEdit(!allowEdit);
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
                    <div className="profile-pic mx-auto">
                      <img
                        src={profileAvatar ? profileAvatar : avatar.src}
                        className="rounded-circle"
                      />
                      <PhotoCameraIcon
                        className="uploadIcon"
                        onClick={() =>
                          document.getElementById("filesAvatar").click()
                        }
                      />
                      <input
                        style={{ display: "none" }}
                        type="file"
                        onChange={uploadAvatar}
                        id="filesAvatar"
                        name="filesAvatar[]"
                        multiple
                      />
                    </div>
                    <ul className="list-group list-group-flush d-none d-sm-block">
                      <li className="list-group-item">Account</li>
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
              <div className="col-12 col-sm-6 col-md-8">
                <button className="btn btn-primary" onClick={toggleEdit}>
                  toggle edit
                </button>
                <form>
                  <div className="profile-details">
                    <h3>Account</h3>
                    <div className="row" hidden={allowEdit}>
                      <div className="col-12 col-sm-4 fw-medium my-2">
                        Business Name
                      </div>
                      <div className="col-12 col-sm-8 my-2">
                        {profile?.firstName} {profile?.lastName}
                      </div>
                    </div>
                    <div className="row" hidden={!allowEdit}>
                      <div className="col-2 fw-medium col-form-label">
                        First Name
                      </div>
                      <div className="col-4">
                        <input
                          type="text"
                          readOnly={!allowEdit}
                          className={
                            allowEdit
                              ? "form-control"
                              : "form-control-plaintext"
                          }
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          defaultValue={profile?.firstName}
                        />
                      </div>

                      <div className="col-2 fw-medium col-form-label">
                        Last Name
                      </div>
                      <div className="col-4">
                        <input
                          type="text"
                          readOnly={!allowEdit}
                          className={
                            allowEdit
                              ? "form-control"
                              : "form-control-plaintext"
                          }
                          id="lastName"
                          name="lastName"
                          placeholder="First Name"
                          defaultValue={profile?.lastName}
                        />
                      </div>
                    </div>
                    <div className="row" hidden={!allowEdit}>
                      <div className="col-12 col-sm-4 fw-medium col-form-label">
                        Documentation ID name
                      </div>
                      <div className="col-12 col-sm-8 my-2" hidden={allowEdit}>
                        {profile?.documentName}
                      </div>
                      <div className="col" hidden={!allowEdit}>
                        <input
                          type="text"
                          readOnly={!allowEdit}
                          className={
                            allowEdit
                              ? "form-control"
                              : "form-control-plaintext"
                          }
                          id="documentName"
                          name="documentName"
                          placeholder="First Name"
                          defaultValue={profile?.documentName}
                        />
                      </div>
                    </div>

                    <div className="row" hidden={allowEdit}>
                      <div className="col-12 col-sm-4 fw-medium my-2">
                        Documentation ID name
                      </div>
                      <div className="col-12 col-sm-8 my-2">
                        {profile?.documentName}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-4 fw-medium my-2">
                        Email
                      </div>
                      <div className="col-12 col-sm-8 my-2">
                        {profile?.email}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-sm-4 fw-medium my-2">
                        Account Created
                      </div>
                      <div className="col-12 col-sm-8 my-2">
                        {profile?.createAt &&
                          new Date(profile?.createAt).toLocaleString()}
                      </div>
                    </div>
                    <hr className="d-none d-sm-block" />
                    <h3 className="mt-5 mb-3">Payment information</h3>
                    <div className="payment-info">
                      <div className="row">
                        <div className="col-12 col-sm-4 my-2">
                          Pollawat Deeunkong
                        </div>
                        <div className="col-3 col-sm-1 my-2">
                          <FontAwesomeIcon
                            icon={faCcMastercard}
                            style={{ fontSize: "2rem" }}
                          />
                        </div>
                        <div className="col-9 col-sm-3  my-2">
                          **** **** **** 3200
                        </div>
                        <div className="col-12 col-sm-4 my-2">Edit Remove</div>
                      </div>
                    </div>
                    <hr className="d-none d-sm-block" />
                    <h3 className="mt-5 mb-3">Address</h3>
                    <div className="row" hidden={allowEdit}>
                      {profile?.shippingAddress?.name}
                      {profile?.shippingAddress?.phone}
                      {profile?.shippingAddress?.lineOne}
                      {profile?.shippingAddress?.lineTwo}
                      {profile?.shippingAddress?.zipCode}
                    </div>
                    <div className="row" hidden={!allowEdit}>
                      <div className="col-12 col-sm-4 fw-medium col-form-label">
                        Name
                      </div>
                      <div className="col" hidden={!allowEdit}>
                        <input
                          type="text"
                          readOnly={!allowEdit}
                          className={
                            allowEdit
                              ? "form-control"
                              : "form-control-plaintext"
                          }
                          id="addressName"
                          name="addressName"
                          defaultValue={profile?.shippingAddress?.name}
                        />
                      </div>
                    </div>
                    <div className="row" hidden={!allowEdit}>
                      <div className="col-12 col-sm-4 fw-medium col-form-label">
                        Phone number
                      </div>
                      <div className="col" hidden={!allowEdit}>
                        <input
                          type="text"
                          readOnly={!allowEdit}
                          className={
                            allowEdit
                              ? "form-control"
                              : "form-control-plaintext"
                          }
                          id="addressPhone"
                          name="addressPhone"
                          defaultValue={profile?.shippingAddress?.phone}
                        />
                      </div>
                    </div>
                    <div className="row" hidden={!allowEdit}>
                      <div className="col-12 col-sm-4 fw-medium col-form-label">
                        Address Line 1
                      </div>
                      <div className="col" hidden={!allowEdit}>
                        <input
                          type="text"
                          readOnly={!allowEdit}
                          className={
                            allowEdit
                              ? "form-control"
                              : "form-control-plaintext"
                          }
                          id="addressLineOne"
                          name="addressLineOne"
                          placeholder="House Number, Building/Street name"
                          defaultValue={profile?.shippingAddress?.lineOne}
                        />
                      </div>
                    </div>
                    <div className="row" hidden={!allowEdit}>
                      <div className="col-12 col-sm-4 fw-medium col-form-label">
                        Address Line 2
                      </div>
                      <div className="col" hidden={!allowEdit}>
                        <input
                          type="text"
                          readOnly={!allowEdit}
                          className={
                            allowEdit
                              ? "form-control"
                              : "form-control-plaintext"
                          }
                          id="addressLineTwo"
                          name="addressLineTwo"
                          placeholder="City, Province"
                          defaultValue={profile?.shippingAddress?.lineTwo}
                        />
                      </div>
                    </div>
                    <div className="row" hidden={!allowEdit}>
                      <div className="col-12 col-sm-4 fw-medium col-form-label">
                        Zip code
                      </div>
                      <div className="col" hidden={!allowEdit}>
                        <input
                          type="text"
                          readOnly={!allowEdit}
                          className={
                            allowEdit
                              ? "form-control"
                              : "form-control-plaintext"
                          }
                          id="addressZipCode"
                          name="addressZipCode"
                          defaultValue={profile?.shippingAddress?.zipCode}
                        />
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

export default withProtected(Account);
