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
    <div className="col-auto text-center mt-4">
      <h3>Payment Receipt</h3>
      <div
        className="d-flex flex-column align-items-center justify-content-center image-box mx-auto"
        onClick={() => document.getElementById("filesPaymentImage").click()}
        style={{ backgroundImage: `url("${paymentImage}")`, width:"10rem", height:"10rem" }}
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
      </div>
    </div>
  );
}

export default UploadFilePaymentReceipt;
