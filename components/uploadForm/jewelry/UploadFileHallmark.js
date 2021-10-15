import { useState, useEffect } from "react";
import { auth, firestore, storage } from "../../../src/config/firebase";
import useAuth from "../../../src/hooks/auth";

import { useRouter } from "next/router";

import SymmetricalDiv from "../../layout/SymmetricalDiv";

function UploadFileHallmark({
  taskId,
  clientId,
  setImageHallmark,
  images,
  setImages,
  imageFront,
  imageLogo,
  imageMadeIn,
  imageSerialNumber,
  imageHallmark,
  imageAdditionalImage,
}) {
  async function uploadFileHallmark() {
    let storageRef = storage.ref("/authen");
    let file = document.getElementById("filesHallmark").files[0];
    const ts = Number(new Date());
    const uploadName = `${clientId}_${ts}_${file.name}`;
    let thisRef = storageRef.child(uploadName);
    await thisRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log(
          "🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL",
          downloadURL
        );
        setImageHallmark({
          taskId: taskId,
          clientId: clientId,
          label: "Hallmark",
          imageURL: downloadURL,
          timestamp: new Date().getTime(),
        });
        setImages([
          imageFront,
          imageLogo,
          imageMadeIn,
          imageSerialNumber,
          imageHallmark,
          imageAdditionalImage,
        ]);
      });
    });
  }
  return (
    <div className="col-12 col-sm-4 text-center mt-4">
      <h3>Hallmark</h3>
      <SymmetricalDiv
        className="d-flex flex-column align-items-center justify-content-center image-box mx-auto"
        onClick={() => document.getElementById("filesHallmark").click()}
        style={{ backgroundImage: `url('${imageHallmark?.imageURL}')` }}
      >
        <i>Click to Add Image</i>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={uploadFileHallmark}
          id="filesHallmark"
          name="filesHallmark[]"
          multiple
        />
      </SymmetricalDiv>
    </div>
  );
}

export default UploadFileHallmark;
