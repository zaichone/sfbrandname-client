import { useState, useEffect } from "react";
import { auth, firestore, storage } from "../../../src/config/firebase";
import useAuth from "../../../src/hooks/auth";

import { useRouter } from "next/router";

import SymmetricalDiv from "../../layout/SymmetricalDiv";

function UploadFileInsole({
  taskId,
  clientId,
  setImageInsole,
  images,
  setImages,
  imageFront,
  imageSole,
  imageMadeIn,
  imageSerialNumber,
  imageInsole,
  imageAdditionalImage,
}) {
  async function uploadFileInsole() {
    let storageRef = storage.ref("/authen");
    let file = document.getElementById("filesInsole").files[0];
    const ts = Number(new Date());
    const uploadName = `${clientId}_${ts}_${file.name}`;
    let thisRef = storageRef.child(uploadName);
    await thisRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log(
          "🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL",
          downloadURL
        );
        setImageInsole({
          taskId: taskId,
          clientId: clientId,
          label: "Insole",
          imageURL: downloadURL,
          timestamp: new Date().getTime(),
        });
        setImages([
          imageFront,
          imageSole,
          imageMadeIn,
          imageSerialNumber,
          imageInsole,
          imageAdditionalImage,
        ]);
      });
    });
  }
  return (
    <div className="col-12 col-sm-4 text-center mt-4">
      <h3>Insole</h3>
      <SymmetricalDiv
        className="d-flex flex-column align-items-center justify-content-center image-box mx-auto"
        onClick={() => document.getElementById("filesInsole").click()}
      >
        <i>Click to Add Image</i>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={uploadFileInsole}
          id="filesInsole"
          name="filesInsole[]"
          multiple
        />
        <div className="box-cover" style={{ backgroundImage: `url('${imageInsole?.imageURL}')` }}></div>
      </SymmetricalDiv>
    </div>
  );
}

export default UploadFileInsole;
