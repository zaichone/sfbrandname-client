import { width } from "dom-helpers";
import { storage } from "../../../src/config/firebase";
import SymmetricalDiv from "../../layout/SymmetricalDiv";

function UploadFilePaymentReceipt({
  taskId,
  clientId,
  paymentImage,
  setPaymentImage,
}) {
  async function uploadFilePaymentImage() {
    let storageRef = storage.ref("/payment");
    let file = document.getElementById("filesPaymentImage").files[0];
    const ts = Number(new Date());
    const uploadName = `${clientId}_${ts}_${file.name}`;
    let thisRef = storageRef.child(uploadName);
    await thisRef.put(file).then(function (snapshot) {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        setPaymentImage(downloadURL);
      });
    });
  }
  return (
    <div className="col-12 col-sm-4 mt-4">
      <h3>Payment Receipt</h3>
      <div
        className="d-flex flex-column align-items-center justify-content-center image-box"
        onClick={() => document.getElementById("filesPaymentImage").click()}
        style={{ width: "15rem", height: "15rem" }}
      >
        <i>Click to Add Image</i>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={uploadFilePaymentImage}
          id="filesPaymentImage"
          name="filesPaymentImage[]"
          multiple
        />
        <div
          className="box-cover"
          style={{ backgroundImage: `url('${paymentImage}')` }}
        ></div>
      </div>
    </div>
  );
}

export default UploadFilePaymentReceipt;
