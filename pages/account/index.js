import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import PagtTitle from "../../components/layout/PageTitle";
import cover from "../../assets/account/cover.png";
import avatar from "../../assets/account/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import { useRouter } from "next/router";

import { auth, firestore, storage } from "../../src/config/firebase";
import useAuth from "../../src/hooks/auth";

function Account() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState();
  const [profileAvatar, setProfileAvatar] = useState(profile?.profileAvatar);

  async function uploadAvatar() {
    const accountRef = firestore.collection("members").doc(user.uid);
    let storageRef = storage.ref("/account/avatars");
    let file = document.getElementById("filesAvatar").files[0];
    const ts = Number(new Date())
    const uploadName = `${user.uid}_${ts}_${file.name}`
    let thisRef = storageRef.child(uploadName);
    await thisRef.put(file).then(function (snapshot) {
        snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log("🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL", downloadURL)
            setProfileAvatar(downloadURL);
                console.log("🚀 ~ file: index.js ~ line 38 ~ snapshot.ref.getDownloadURL ~ user.uid", user.uid)
            accountRef.update({
              profileAvatar: downloadURL
          }, { merge: true })
              .then(() => { }).catch((error) => { });
        });
    })
}
console.log('profileAvatar', profileAvatar);
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
  return (
    <div>
      <Head>
        <title>SF Brandname - Account</title>
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
        <PagtTitle title="Account" bg={cover} />

        <section>
          <div className="container-fluid">
            <div className="row gx-0">
              <div className="col-12 col-sm-3 col-md-2">
                <div className="sidebar text-center">
                  <div className="card">
                    <div className="profile-pic">
                    <img src={profileAvatar? profileAvatar : avatar.src} className="rounded-circle"/>
                    <PhotoCameraIcon className="uploadIcon"  onClick={() => document.getElementById("filesAvatar").click()}/>
                    <input style={{ display: "none" }} type="file" onChange={uploadAvatar} id="filesAvatar" name="filesAvatar[]" multiple />
                    </div>
                    <ul className="list-group list-group-flush">
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
              <div className="col-12 col-sm-9 col-md-10">
                <div className="profile-details">
                  <h3>Account</h3>
                  <table>
                    <tbody>
                      <tr>
                        <td>Business Name</td>
                        <td>
                          {profile?.firstName} {profile?.lastName}
                        </td>
                      </tr>
                      <tr>
                        <td>Account Created</td>
                        <td>
                          {profile?.firstName} {profile?.lastName}
                        </td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>{profile?.email}</td>
                      </tr>
                      <tr>
                        <td>Documentation ID Name</td>
                        <td>Image Engine Company Limited</td>
                      </tr>
                    </tbody>
                  </table>
                  <hr />
                  <h3 className="mt-5">Payment information</h3>
                  <div className="payment-info">
                    <div className="row">
                      <div className="col">Pollawat Deeunkong</div>
                      <div className="col">
                        <FontAwesomeIcon
                          icon={faCcMastercard}
                          style={{ fontSize: "2rem" }}
                        />
                      </div>
                      <div className="col">**** **** **** 3200</div>
                      <div className="col">Edit Remove</div>
                    </div>
                  </div>
                  <hr />
                  <h3 className="mt-5">Address</h3>
                  <p>
                    Image Engine Company Limited <br />
                    188/5 Village Number 22 <br />
                    Sub. Roubwieng Area Muang
                    <br />
                    City Chiang Rai Country Thailand
                    <br />
                    Protal Code 57000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Account;
