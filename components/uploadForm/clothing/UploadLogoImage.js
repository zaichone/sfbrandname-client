import { useState, useEffect } from "react";
import { auth, firestore, storage } from "../../../src/config/firebase";
import useAuth from "../../../src/hooks/auth";

import { useRouter } from "next/router";

import SymmetricalDiv from "../../layout/SymmetricalDiv";

function UploadLogoImage({
  taskId,
  clientId,
  setImageLogo,
  images,
  setImages,
  imageFront,
  imageLogo,
  imageSideSeamTag,
  imageButton,
  imageZipper,
  imageAdditionalImage,
}) {
  async function uploadFileLogo() {
    let storageRef = storage.ref("/authen");
    let file = document.getElementById("filesLogo").files[0];
    const ts = Number(new Date());
    const uploadName = `${clientId}_${ts}_${file.name}`;
    let thisRef = storageRef.child(uploadName);
    await thisRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log(
          "🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL",
          downloadURL
        );
        setImageLogo({
          taskId: taskId,
          clientId: clientId,
          label: "Logo / Made In",
          imageURL: downloadURL,
          timestamp: new Date().getTime(),
        });
        setImages([
          imageFront,
          imageLogo,
          imageSideSeamTag,
          imageButton,
          imageZipper,
          imageAdditionalImage,
        ]);
      });
    });
  }
  return (
    <div className="col-12 col-sm-4 text-center mt-4">
      <h3>Logo/Made In</h3>
      <SymmetricalDiv
        className="d-flex flex-column align-items-center justify-content-center image-box mx-auto"
        onClick={() => document.getElementById("filesLogo").click()}
        style={{ backgroundImage: `url(${imageLogo?.imageURL})` }}
      >
        <i>Click to Add Image</i>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={uploadFileLogo}
          id="filesLogo"
          name="filesLogo[]"
          multiple
        />
        <div className="box-cover" style={{ backgroundImage: `url(${imageLogo?.imageURL})` }}></div>
      </SymmetricalDiv>
    </div>
  );
}

export default UploadLogoImage;
