import { auth, firestore, storage } from "../../../src/config/firebase";
import useAuth from "../../../src/hooks/auth";

import { useRouter } from "next/router";

import SymmetricalDiv from "../../layout/SymmetricalDiv";
import { ContactsOutlined } from "@material-ui/icons";

function UploadFileSideSeamTag({
  taskId,
  clientId,
  setImageSideSeamTag,
  images,
  setImages,
  imageFront,
  imageLogo,
  imageSideSeamTag,
  imageButton,
  imageZipper,
  imageAdditionalImage,
}) {
  async function uploadFileSideSeamTag() {
    let storageRef = storage.ref("/authen");
    let file = document.getElementById("filesSideSeamTag").files[0];
    const ts = Number(new Date());
    const uploadName = `${clientId}_${ts}_${file.name}`;
    let thisRef = storageRef.child(uploadName);
    await thisRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log(
          "🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL",
          downloadURL
        );
        setImageSideSeamTag({
          taskId: taskId,
          clientId: clientId,
          label: "Arm Engravings",
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
        //setFeatured(downloadURL);
      });
    });
  }
  return (
    <div className="col-12 col-sm-4 text-center mt-4">
      <h3>Side Seam Tag</h3>
      <SymmetricalDiv
        className="d-flex flex-column align-items-center justify-content-center image-box mx-auto"
        onClick={() => document.getElementById("filesSideSeamTag").click()}
        style={{ backgroundImage: `url('${imageSideSeamTag?.imageURL}')` }}
      >
        <i>Click to Add Image</i>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={uploadFileSideSeamTag}
          id="filesSideSeamTag"
          name="filesSideSeamTag[]"
          multiple
        />
        <div className="box-cover" style={{ backgroundImage: `url(${imageSideSeamTag?.imageURL})` }}></div>
      </SymmetricalDiv>
    </div>
  );
}

export default UploadFileSideSeamTag;
