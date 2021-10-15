import { auth, firestore, storage } from "../../../src/config/firebase";
import useAuth from "../../../src/hooks/auth";

import { useRouter } from "next/router";

import SymmetricalDiv from "../../layout/SymmetricalDiv";
import { ContactsOutlined } from "@material-ui/icons";

function UploadFileButton({
  taskId,
  clientId,
  setImageButton,
  images,
  setImages,
  imageFront,
  imageLogo,
  imageSideSeamTag,
  imageButton,
  imageZipper,
  imageAdditionalImage,
}) {
  async function uploadFileButton() {
    let storageRef = storage.ref("/authen");
    let file = document.getElementById("filesButton").files[0];
    const ts = Number(new Date());
    const uploadName = `${clientId}_${ts}_${file.name}`;
    let thisRef = storageRef.child(uploadName);
    await thisRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log(
          "🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL",
          downloadURL
        );
        setImageButton({
          taskId: taskId,
          clientId: clientId,
          label: "Serial Number",
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
      <h3>Button</h3>
      <SymmetricalDiv
        className="d-flex flex-column align-items-center justify-content-center image-box mx-auto"
        onClick={() => document.getElementById("filesButton").click()}
        style={{ backgroundImage: `url('${imageButton?.imageURL}')` }}
      >
        <i>Click to Add Image</i>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={uploadFileButton}
          id="filesButton"
          name="filesButton[]"
          multiple
        />
        <div className="box-cover" style={{ backgroundImage: `url(${imageButton?.imageURL})` }}></div>
      </SymmetricalDiv>
    </div>
  );
}

export default UploadFileButton;
