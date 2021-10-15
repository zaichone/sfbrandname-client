import { useState, useEffect } from "react";
import { auth, firestore, storage } from "../../../src/config/firebase";
import useAuth from "../../../src/hooks/auth";

import { useRouter } from "next/router";

import SymmetricalDiv from "../../layout/SymmetricalDiv";

function UploadSoleImage({
  taskId,
  clientId,
  setImageSole,
  images,
  setImages,
  imageFront,
  imageSole,
  imageMadeIn,
  imageSerialNumber,
  imageInsole,
  imageAdditionalImage,
}) {
  async function uploadFileSole() {
    let storageRef = storage.ref("/authen");
    let file = document.getElementById("filesSole").files[0];
    const ts = Number(new Date());
    const uploadName = `${clientId}_${ts}_${file.name}`;
    let thisRef = storageRef.child(uploadName);
    await thisRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log(
          "🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL",
          downloadURL
        );
        setImageSole({
          taskId: taskId,
          clientId: clientId,
          label: "Sole",
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
      <h3>Sole</h3>
      <SymmetricalDiv
        className="d-flex flex-column align-items-center justify-content-center image-box mx-auto"
        onClick={() => document.getElementById("filesSole").click()}
        style={{ backgroundImage: `url(${imageSole?.imageURL})` }}
      >
        <i>Click to Add Image</i>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={uploadFileSole}
          id="filesSole"
          name="filesSole[]"
          multiple
        />
        <div className="box-cover" style={{ backgroundImage: `url(${imageSole?.imageURL})` }}></div>
      </SymmetricalDiv>
    </div>
  );
}

export default UploadSoleImage;
