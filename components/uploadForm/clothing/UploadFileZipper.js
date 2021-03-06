import { useState, useEffect } from "react";
import { auth, firestore, storage } from "../../../src/config/firebase";
import useAuth from "../../../src/hooks/auth";

import { useRouter } from "next/router";

import SymmetricalDiv from "../../layout/SymmetricalDiv";

function UploadFileZipper({
  taskId,
  clientId,
  setImageZipper,
  images,
  setImages,
  imageFront,
  imageLogo,
  imageSideSeamTag,
  imageButton,
  imageZipper,
  imageAdditionalImage,
}) {
  async function uploadFileZipper() {
    let storageRef = storage.ref("/authen");
    let file = document.getElementById("filesZipper").files[0];
    const ts = Number(new Date());
    const uploadName = `${clientId}_${ts}_${file.name}`;
    let thisRef = storageRef.child(uploadName);
    await thisRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log(
          "🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL",
          downloadURL
        );
        setImageZipper({
          taskId: taskId,
          clientId: clientId,
          label: "Zipper",
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
      <h3>Zipper</h3>
      <SymmetricalDiv
        className="d-flex flex-column align-items-center justify-content-center image-box mx-auto"
        onClick={() => document.getElementById("filesZipper").click()}
      >
        <i>Click to Add Image</i>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={uploadFileZipper}
          id="filesZipper"
          name="filesZipper[]"
          multiple
        />
        <div className="box-cover" style={{ backgroundImage: `url('${imageZipper?.imageURL}')` }}></div>
      </SymmetricalDiv>
    </div>
  );
}

export default UploadFileZipper;
