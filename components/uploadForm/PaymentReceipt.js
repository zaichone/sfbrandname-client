import React from "react";
import UploadFilePaymentReceipt from "./paymentReceipt/UploadPaymentReceipt";



function PaymentReceipt({ taskId, clientId, paymentImage, setPaymentImage }) {
  return (
    <>
    <p>paymentReceipt.js</p>
    <span>taskid: {taskId} clientId:{clientId} paymentImage:{paymentImage?.imageURL}</span>
      <UploadFilePaymentReceipt
        taskId={taskId}
        clientId={clientId}
        paymentImage={paymentImage}
        setPaymentImage={setPaymentImage}
      />
    </>
  );
}

export default PaymentReceipt;
