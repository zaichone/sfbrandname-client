import { auth, firestore, storage } from "../../../src/config/firebase";
import useAuth from "../../../src/hooks/auth";

import { useRouter } from "next/router";

import SymmetricalDiv from "../../layout/SymmetricalDiv";
import { ContactsOutlined } from "@material-ui/icons";

function UploadFileArmEngravings({
  taskId,
  clientId,
  setImageArmEngravings,
  images,
  setImages,
  imageFront,
  imageLogo,
  imageArmEngravings,
  imageSerialNumber,
  imageScrews,
  imageLensEngraving,
  imageAdditionalImage,
}) {
  async function uploadFileArmEngravings() {
    let storageRef = storage.ref("/authen");
    let file = document.getElementById("filesArmEngravings").files[0];
    const ts = Number(new Date());
    const uploadName = `${clientId}_${ts}_${file.name}`;
    let thisRef = storageRef.child(uploadName);
    await thisRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log(
          "🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL",
          downloadURL
        );
        setImageArmEngravings({
          taskId: taskId,
          clientId: clientId,
          label: "Arm Engravings",
          imageURL: downloadURL,
          timestamp: new Date().getTime(),
        });
        setImages([
          imageFront,
          imageLogo,
          imageArmEngravings,
          imageSerialNumber,
          imageScrews,
          imageLensEngraving,
          imageAdditionalImage,
        ]);
        //setFeatured(downloadURL);
      });
    });
  }
  return (
    <div className="col-12 col-sm-4 text-center mt-4">
      <h3>Arm Engravings</h3>
      <SymmetricalDiv
        className="d-flex flex-column align-items-center justify-content-center image-box mx-auto"
        onClick={() => document.getElementById("filesArmEngravings").click()}
        style={{ backgroundImage: `url(${imageArmEngravings?.imageURL})` }}
      >
        <i>Click to Add Image</i>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={uploadFileArmEngravings}
          id="filesArmEngravings"
          name="filesArmEngravings[]"
          multiple
        />
      </SymmetricalDiv>
    </div>
  );
}

export default UploadFileArmEngravings;
