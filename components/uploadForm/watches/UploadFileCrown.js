import { useState, useEffect } from "react";
import { auth, firestore, storage } from "../../../src/config/firebase";
import useAuth from "../../../src/hooks/auth";

import { useRouter } from "next/router";

import SymmetricalDiv from "../../layout/SymmetricalDiv";

function UploadFileCrown({
  taskId,
  clientId,
  setImageCrown,
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
  async function uploadFileCrown() {
    let storageRef = storage.ref("/authen");
    let file = document.getElementById("filesCrown").files[0];
    const ts = Number(new Date());
    const uploadName = `${clientId}_${ts}_${file.name}`;
    let thisRef = storageRef.child(uploadName);
    await thisRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log(
          "🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL",
          downloadURL
        );
        setImageCrown({
          taskId: taskId,
          clientId: clientId,
          label: "Crown",
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
      <h3>Crown</h3>
      <SymmetricalDiv
        className="d-flex flex-column align-items-center justify-content-center image-box mx-auto"
        onClick={() => document.getElementById("filesCrown").click()}
        style={{ backgroundImage: `url(${imageCrown?.imageURL})` }}
      >
        <i>Click to Add Image</i>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={uploadFileCrown}
          id="filesCrown"
          name="filesCrown[]"
          multiple
        />
      </SymmetricalDiv>
    </div>
  );
}

export default UploadFileCrown;
