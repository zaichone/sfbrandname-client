import { useState, useEffect } from "react";
import { auth, firestore, storage } from "../../../src/config/firebase";
import useAuth from "../../../src/hooks/auth";

import { useRouter } from "next/router";

import SymmetricalDiv from "../../layout/SymmetricalDiv";

function UploadFaceImage({
  taskId,
  clientId,
  setImageFace,
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
  async function uploadFileFace() {
    let storageRef = storage.ref("/authen");
    let file = document.getElementById("filesFace").files[0];
    const ts = Number(new Date());
    const uploadName = `${clientId}_${ts}_${file.name}`;
    let thisRef = storageRef.child(uploadName);
    await thisRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log(
          "🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL",
          downloadURL
        );
        setImageFace({
          taskId: taskId,
          clientId: clientId,
          label: "Face / Made In",
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
      <h3>Face</h3>
      <SymmetricalDiv
        className="d-flex flex-column align-items-center justify-content-center image-box mx-auto"
        onClick={() => document.getElementById("filesFace").click()}
        style={{ backgroundImage: `url('${imageFace?.imageURL}')` }}
      >
        <i>Click to Add Image</i>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={uploadFileFace}
          id="filesFace"
          name="filesFace[]"
          multiple
        />
        <div className="box-cover" style={{ backgroundImage: `url(${imageFace?.imageURL})` }}></div>
      </SymmetricalDiv>
    </div>
  );
}

export default UploadFaceImage;
