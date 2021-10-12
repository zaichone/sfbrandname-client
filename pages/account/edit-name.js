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

function AccountEditName({ auth }) {
  const { user, logout } = auth;
  const router = useRouter();
  const [profile, setProfile] = useState();
  const [profileAvatar, setProfileAvatar] = useState(profile?.profileAvatar);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [documentName, setDocumentName] = useState();

  useEffect(() => {
    const accountRef = firestore.collection("members").doc(user.uid);
    accountRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          setProfile(doc.data());
          setProfileAvatar(doc.data().profileAvatar);
          setFirstName(doc.data().firstName);
          setLastName(doc.data().lastName);
          setDocumentName(doc.data().documentName);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  function handleFirstNameChanges(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFirstName(value);
  }
  function handleLastNameChanges(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setLastName(value);
  }
  function handleDocumentNameChanges(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setDocumentName(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const reference = firestore.collection("members").doc(user.uid);
      await reference
        .set({ firstName, lastName, documentName }, { merge: true })
        .then(() => {
          window.alert(`Edited name successfully!`);
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
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          defaultValue={firstName}
                          onChange={handleFirstNameChanges}
                        />
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col">
                        <label htmlFor="addressPhone" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          defaultValue={lastName}
                          onChange={handleLastNameChanges}
                        />
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col">
                        <label htmlFor="addressPhone" className="form-label">
                          Documentation name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="documentName"
                          name="documentName"
                          defaultValue={documentName}
                          onChange={handleDocumentNameChanges}
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

export default withProtected(AccountEditName);
