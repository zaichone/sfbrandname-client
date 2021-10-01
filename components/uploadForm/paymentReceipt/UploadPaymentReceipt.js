import { useState, useEffect } from "react";
import { auth, firestore, storage } from "../../../src/config/firebase";
import useAuth from "../../../src/hooks/auth";

import { useRouter } from "next/router";

import SymmetricalDiv from "../../layout/SymmetricalDiv";

function UploadFilePaymentReceipt({ taskId, clientId,paymentImage, setPaymentImage }) {
  async function uploadFilePaymentImage() {
    let storageRef = storage.ref("/payment");
    let file = document.getElementById("filesPaymentImage").files[0];
    const ts = Number(new Date());
    const uploadName = `${clientId}_${ts}_${file.name}`;
    let thisRef = storageRef.child(uploadName);
    await thisRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log(
          "🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL",
          downloadURL
        );
        setPaymentImage({
          taskId: taskId,
          clientId: clientId,
          label: "Payment Image",
          imageURL: downloadURL,
          timestamp: new Date().getTime(),
        });
      });
    });
  }
  return (
    <div className="col-12 col-sm-4 text-center mt-4">
      <h3>Payment Image</h3>
      <SymmetricalDiv
        className="d-flex flex-column align-items-center justify-content-center image-box mx-auto"
        onClick={() => document.getElementById("filesPaymentImage").click()}
        style={{ backgroundImage: `url("${paymentImage?.imageURL}")` }}
      >
        <i>Click to Add Image</i>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={uploadFilePaymentImage}
          id="filesPaymentImage"
          name="filesPaymentImage[]"
          multiple
        />
      </SymmetricalDiv>
    </div>
  );
}

export default UploadFilePaymentReceipt;
