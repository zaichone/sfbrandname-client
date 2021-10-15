import { useState, useEffect } from "react";
import { auth, firestore, storage } from "../../../src/config/firebase";
import useAuth from "../../../src/hooks/auth";

import { useRouter } from "next/router";

import SymmetricalDiv from "../../layout/SymmetricalDiv";
import { ContactsOutlined } from "@material-ui/icons";

function UploadFrontImage({
  taskId,
  clientId,
  setImageFront,
  setFeatured,
  images,
  setImages,
  imageFront,
  imageLogo,
  imageMadeIn,
  imageSerialNumber,
  imageHallmark,
  imageAdditionalImage,
}) {
  async function uploadFileFront() {
    let storageRef = storage.ref("/authen");
    let file = document.getElementById("filesFront").files[0];
    const ts = Number(new Date());
    const uploadName = `${clientId}_${ts}_${file.name}`;
    let thisRef = storageRef.child(uploadName);
    await thisRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log(
          "🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL",
          downloadURL
        );
        setImageFront({
          taskId: taskId,
          clientId: clientId,
          label: "Front",
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
        setFeatured(downloadURL);
      });
    });
    //console.log(images)
  }
  console.log(images);

  return (
    <div className="col-12 col-sm-4 text-center mt-4">
      <h3>Front</h3>
      <SymmetricalDiv
        className="d-flex flex-column align-items-center justify-content-center image-box mx-auto"
        onClick={() => document.getElementById("filesFront").click()}
      >
        <i>Click to Add Image</i>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={uploadFileFront}
          id="filesFront"
          name="filesFront[]"
          multiple
        />
        <div className="box-cover" style={{ backgroundImage: `url(${imageFront?.imageURL})` }}></div>
      </SymmetricalDiv>
    </div>
  );
}

export default UploadFrontImage;
