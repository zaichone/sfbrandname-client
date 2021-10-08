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

function Account({ auth }) {
  const { user, logout } = auth;
  const router = useRouter();
  const [profile, setProfile] = useState();
  const [profileAvatar, setProfileAvatar] = useState(avatar.src);

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
          .then(() => { })
          .catch((error) => { });
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
                    <div className="profile-pic" style={{width:'100%', padding:'0px 20%'}}>
                      <SymmetricalDiv
                        className="rounded-circle d-block"
                        style={{
                          width: "100%",
                          background: `url('${profileAvatar
                            }')center center no-repeat`,
                          border: "1px solid black",
                          backgroundSize:'cover'
                        }}
                      ></SymmetricalDiv>

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
              <div className="col-12 col-sm-9 col-md-10">
                <div className="profile-details">
                  <h3>Account</h3>
                  <div className="row">
                    <div className="col-12 col-sm-4 fw-medium my-2">
                      Business Name
                    </div>
                    <div className="col-12 col-sm-8 my-2">
                      {profile?.firstName} {profile?.lastName}
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
                  <div className="row">
                    <div className="col-12 col-sm-4 fw-medium my-2">Email</div>
                    <div className="col-12 col-sm-8 my-2">{profile?.email}</div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-sm-4 fw-medium my-2">
                      Documentation ID Name
                    </div>
                    <div className="col-12 col-sm-8 my-2">
                      Image Engine Company Limited
                    </div>
                  </div>

                  <hr className="d-none d-sm-block" />

                  <h3 className="mt-5 mb-3">Payment information</h3>
                  <div className="payment-info">
                    <div className="row">
                      <div className="col-12 col-sm-4 my-2">
                        {profile?.firstName} {profile?.lastName}
                      </div>
                      <div className="col-3 col-sm-1 my-2">
                        <FontAwesomeIcon
                          icon={faCcMastercard}
                          style={{ fontSize: "2rem" }}
                        />
                      </div>
                      <div className="col-9 col-sm-3  my-2">**** **** **** 3200</div>
                      <div className="col-12 col-sm-4 my-2"></div>
                    </div>
                  </div>

                  <hr className="d-none d-sm-block" />

                  <h3 className="mt-5 mb-3">Address</h3>
                  <div className="payment-info">
                    <div className="row">
                      <div className="col-12 col-sm-8 my-2">
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
                      <div className="col-12 col-sm-4 my-2 text-end justify-content-start align-items-end">
                        <button>Edit</button>

                      </div>

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

export default withProtected(Account);
