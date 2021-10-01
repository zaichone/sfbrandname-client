import React from "react";
import UploadFilePaymentReceipt from "./paymentReceipt/UploadPaymentReceipt";



function PaymentReceipt({ taskId, clientId, paymentImage, setPaymentImage }) {
  return (
    <div>
      <UploadFilePaymentReceipt
        taskId={taskId}
        clientId={clientId}
        paymentImage={paymentImage}
        setPaymentImage={setPaymentImage}
      />
    </div>
  );
}

export default PaymentReceipt;
