import { useState, useEffect } from "react";
import { auth, firestore, storage } from "../../../src/config/firebase";
import useAuth from "../../../src/hooks/auth";

import { useRouter } from "next/router";

import SymmetricalDiv from "../../layout/SymmetricalDiv";

function UploadFileHardwareEngraving({
  taskId,
  clientId,
  setImageHardwareEngraving,
  images,
  setImages,
  imageFront,
  imageLogo,
  imageMadeIn,
  imageSerialNumber,
  imageHardwareEngraving,
  imageAdditionalImage,
}) {
  async function uploadFileHardwareEngraving() {
    let storageRef = storage.ref("/authen");
    let file = document.getElementById("filesHardwareEngraving").files[0];
    const ts = Number(new Date());
    const uploadName = `${clientId}_${ts}_${file.name}`;
    let thisRef = storageRef.child(uploadName);
    await thisRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log(
          "🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL",
          downloadURL
        );
        setImageHardwareEngraving({
          taskId: taskId,
          clientId: clientId,
          label: "Hardware Engraving",
          imageURL: downloadURL,
          timestamp: new Date().getTime(),
        });
        setImages([
          imageFront,
          imageLogo,
          imageMadeIn,
          imageSerialNumber,
          imageHardwareEngraving,
          imageAdditionalImage,
        ]);
      });
    });
  }
  return (
    <div className="col-12 col-sm-4 text-center mt-4">
      <h3>Hardware Engraving</h3>
      <SymmetricalDiv
        className="d-flex flex-column align-items-center justify-content-center image-box mx-auto"
        onClick={() =>
          document.getElementById("filesHardwareEngraving").click()
        }
      >
        <i>Click to Add Image</i>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={uploadFileHardwareEngraving}
          id="filesHardwareEngraving"
          name="filesHardwareEngraving[]"
          multiple
        />
        <div className="box-cover" style={{ backgroundImage: `url('${imageHardwareEngraving?.imageURL}')` }}></div>
      </SymmetricalDiv>
    </div>
  );
}

export default UploadFileHardwareEngraving;
