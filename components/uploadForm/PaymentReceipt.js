import React from "react";
import UploadFilePaymentReceipt from "./paymentReceipt/UploadPaymentReceipt";

function PaymentReceipt({ taskId, clientId, paymentImage, setPaymentImage }) {
  return (
    <UploadFilePaymentReceipt
      taskId={taskId}
      clientId={clientId}
      paymentImage={paymentImage}
      setPaymentImage={setPaymentImage}
    />
  );
}

export default PaymentReceipt;
