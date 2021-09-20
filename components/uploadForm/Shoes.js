import React, { useState } from 'react'
import UploadFrontImage from './shoes/UploadFrontImage'
import UploadSoleImage from './shoes/UploadSoleImage'
import UploadFileMadeIn from './shoes/UploadFileMadeIn'
import UploadFileSerialNumber from './shoes/UploadFileSerialNumber'
import UploadFileInsole from './shoes/UploadFileInsole'
import UploadFileAdditionalImage from './shoes/UploadFileAdditionalImage'

function Shoes({ taskId, clientId, setFeatured, images, setImages }) {
    const [imageFront, setImageFront] = useState('');
    const [imageSole, setImageSole] = useState('');
    const [imageMadeIn, setImageMadeIn] = useState('')
    const [imageSerialNumber, setImageSerialNumber] = useState('')
    const [imageInsole, setImageInsole] = useState('')
    const [imageAdditionalImage, setImageAdditionalImage] = useState('')
    return (
        <div className="row">
            <UploadFrontImage
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setFeatured={setFeatured} setImageFront={setImageFront} setImageSole={setImageSole}
                imageFront={imageFront} imageSole={imageSole} imageMadeIn={imageMadeIn} imageSerialNumber={imageSerialNumber} imageInsole={imageInsole} imageAdditionalImage={imageAdditionalImage} />
            <UploadSoleImage
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageSole={setImageSole}
                imageFront={imageFront} imageSole={imageSole} imageMadeIn={imageMadeIn} imageSerialNumber={imageSerialNumber} imageInsole={imageInsole} imageAdditionalImage={imageAdditionalImage}
            />
            <UploadFileInsole
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageInsole={setImageInsole}
                imageFront={imageFront} imageSole={imageSole} imageMadeIn={imageMadeIn} imageSerialNumber={imageSerialNumber} imageInsole={imageInsole} imageAdditionalImage={imageAdditionalImage}
            />
            <UploadFileSerialNumber
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageSerialNumber={setImageSerialNumber}
                imageFront={imageFront} imageSole={imageSole} imageMadeIn={imageMadeIn} imageSerialNumber={imageSerialNumber} imageInsole={imageInsole} imageAdditionalImage={imageAdditionalImage}
            />
            <UploadFileMadeIn
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageMadeIn={setImageMadeIn}
                imageFront={imageFront} imageSole={imageSole} imageMadeIn={imageMadeIn} imagrialNumber={imageSerialNumber} imageInsole={imageInsole} imageAdditionalImage={imageAdditionalImage}
            />         

            <UploadFileAdditionalImage
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageAdditionalImage={setImageAdditionalImage}
                imageFront={imageFront} imageSole={imageSole} imageMadeIn={imageMadeIn} imageSerialNumber={imageSerialNumber} imageInsole={imageInsole} imageAdditionalImage={imageAdditionalImage}
            />
        </div>
    )
}

export default Shoes
