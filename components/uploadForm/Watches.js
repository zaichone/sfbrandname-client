import React, { useState } from "react";
import UploadFrontImage from "./watches/UploadFrontImage";
import UploadFaceImage from "./watches/UploadFaceImage";
import UploadFileCaseEngravings from "./watches/UploadFileCaseEngravings";
import UploadFileSerialNumber from "./watches/UploadFileSerialNumber";
import UploadFileCrown from "./watches/UploadFileCrown";
import UploadFileClasp from "./watches/UploadFileClasp";
import UploadFileAdditionalImage from "./watches/UploadFileAdditionalImage";

function Watches({ taskId, clientId, setFeatured, images, setImages }) {
  const [imageFront, setImageFront] = useState("");
  const [imageFace, setImageFace] = useState("");
  const [imageCaseEngravings, setImageCaseEngravings] = useState("");
  const [imageSerialNumber, setImageSerialNumber] = useState("");

  const [imageCrown, setImageCrown] = useState("");
  const [imageClasp, setImageClasp] = useState("");
  const [imageAdditionalImage, setImageAdditionalImage] = useState("");
  return (
    <div className="row">
      <UploadFrontImage
        taskId={taskId}
        clientId={clientId}
        images={images}
        setImages={setImages}
        setFeatured={setFeatured}
        setImageFront={setImageFront}
        setImageFace={setImageFace}
        imageFront={imageFront}
        imageFace={imageFace}
        imageCaseEngravings={imageCaseEngravings}
        imageSerialNumber={imageSerialNumber}
        imageCrown={imageCrown}
        imageClasp={imageClasp}
        imageAdditionalImage={imageAdditionalImage}
      />
      <UploadFaceImage
        taskId={taskId}
        clientId={clientId}
        images={images}
        setImages={setImages}
        setImageFace={setImageFace}
        imageFront={imageFront}
        imageFace={imageFace}
        imageCaseEngravings={imageCaseEngravings}
        imageSerialNumber={imageSerialNumber}
        imageCrown={imageCrown}
        imageClasp={imageClasp}
        imageAdditionalImage={imageAdditionalImage}
      />
      <UploadFileCaseEngravings
        taskId={taskId}
        clientId={clientId}
        images={images}
        setImages={setImages}
        setImageCaseEngravings={setImageCaseEngravings}
        imageFront={imageFront}
        imageFace={imageFace}
        imageCaseEngravings={imageCaseEngravings}
        imageSerialNumber={imageSerialNumber}
        imageCrown={imageCrown}
        imageClasp={imageClasp}
        imageAdditionalImage={imageAdditionalImage}
      />
      <UploadFileSerialNumber
        taskId={taskId}
        clientId={clientId}
        images={images}
        setImages={setImages}
        setImageSerialNumber={setImageSerialNumber}
        imageFront={imageFront}
        imageFace={imageFace}
        imageCaseEngravings={imageCaseEngravings}
        imageSerialNumber={imageSerialNumber}
        imageCrown={imageCrown}
        imageClasp={imageClasp}
        imageAdditionalImage={imageAdditionalImage}
      />
      <UploadFileCrown
        taskId={taskId}
        clientId={clientId}
        images={images}
        setImages={setImages}
        setImageCrown={setImageCrown}
        imageFront={imageFront}
        imageFace={imageFace}
        imageCaseEngravings={imageCaseEngravings}
        imageSerialNumber={imageSerialNumber}
        imageCrown={imageCrown}
        imageClasp={imageClasp}
        imageAdditionalImage={imageAdditionalImage}
      />

      <UploadFileClasp
        taskId={taskId}
        clientId={clientId}
        images={images}
        setImages={setImages}
        setImageClasp={setImageClasp}
        imageFront={imageFront}
        imageFace={imageFace}
        imageCaseEngravings={imageCaseEngravings}
        imageSerialNumber={imageSerialNumber}
        imageCrown={imageCrown}
        imageClasp={imageClasp}
        imageAdditionalImage={imageAdditionalImage}
      />
      <UploadFileAdditionalImage
        taskId={taskId}
        clientId={clientId}
        images={images}
        setImages={setImages}
        setImageAdditionalImage={setImageAdditionalImage}
        imageFront={imageFront}
        imageFace={imageFace}
        imageCaseEngravings={imageCaseEngravings}
        imageSerialNumber={imageSerialNumber}
        imageCrown={imageCrown}
        imageClasp={imageClasp}
        imageAdditionalImage={imageAdditionalImage}
      />
    </div>
  );
}

export default Watches;
