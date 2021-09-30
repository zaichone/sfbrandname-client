import { useState, useEffect } from "react";
import { auth, firestore, storage } from "../../../src/config/firebase";
import useAuth from "../../../src/hooks/auth";

import { useRouter } from "next/router";

import SymmetricalDiv from "../../layout/SymmetricalDiv";

function UploadFileClasp({
  taskId,
  clientId,
  setImageClasp,
  images,
  setImages,
  imageFront,
  imageFace,
  imageCaseEngravings,
  imageSerialNumber,
  imageCrown,
  imageClasp,
  imageAdditionalImage,
}) {
  async function uploadFileClasp() {
    let storageRef = storage.ref("/authen");
    let file = document.getElementById("filesClasp").files[0];
    const ts = Number(new Date());
    const uploadName = `${clientId}_${ts}_${file.name}`;
    let thisRef = storageRef.child(uploadName);
    await thisRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log(
          "🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL",
          downloadURL
        );
        setImageClasp({
          taskId: taskId,
          clientId: clientId,
          label: "Lens Engraving",
          imageURL: downloadURL,
          timestamp: new Date().getTime(),
        });
        setImages([
          imageFront,
          imageFace,
          imageCaseEngravings,
          imageSerialNumber,
          imageCrown,
          imageClasp,
          imageAdditionalImage,
        ]);
      });
    });
  }
  return (
    <div className="col-12 col-sm-4 text-center mt-4">
      <h3>Clasp</h3>
      <SymmetricalDiv
        className="d-flex flex-column align-items-center justify-content-center image-box mx-auto"
        onClick={() => document.getElementById("filesClasp").click()}
        style={{ backgroundImage: `url(${imageClasp?.imageURL})` }}
      >
        <i>Click to Add Image</i>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={uploadFileClasp}
          id="filesClasp"
          name="filesAdditionalImage[]"
          multiple
        />
      </SymmetricalDiv>
    </div>
  );
}

export default UploadFileClasp;
