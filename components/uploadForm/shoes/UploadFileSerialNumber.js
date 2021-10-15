import { auth, firestore, storage } from "../../../src/config/firebase";
import useAuth from "../../../src/hooks/auth";

import { useRouter } from "next/router";

import SymmetricalDiv from "../../layout/SymmetricalDiv";
import { ContactsOutlined } from "@material-ui/icons";

function UploadFileSerialNumber({
  taskId,
  clientId,
  setImageSerialNumber,
  images,
  setImages,
  imageFront,
  imageSole,
  imageMadeIn,
  imageSerialNumber,
  imageInsole,
  imageAdditionalImage,
}) {
  async function uploadFileSerialNumber() {
    let storageRef = storage.ref("/authen");
    let file = document.getElementById("filesSerialNumber").files[0];
    const ts = Number(new Date());
    const uploadName = `${clientId}_${ts}_${file.name}`;
    let thisRef = storageRef.child(uploadName);
    await thisRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log(
          "🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL",
          downloadURL
        );
        setImageSerialNumber({
          taskId: taskId,
          clientId: clientId,
          label: "Serial Number",
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
      <h3>Serial Number/ Size</h3>
      <SymmetricalDiv
        className="d-flex flex-column align-items-center justify-content-center image-box mx-auto"
        onClick={() => document.getElementById("filesSerialNumber").click()}
        style={{ backgroundImage: `url('${imageSerialNumber?.imageURL}')` }}
      >
        <i>Click to Add Image</i>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={uploadFileSerialNumber}
          id="filesSerialNumber"
          name="filesSerialNumber[]"
          multiple
        />
      </SymmetricalDiv>
    </div>
  );
}

export default UploadFileSerialNumber;
