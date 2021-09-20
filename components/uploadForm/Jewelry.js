import React, { useState } from 'react'
import UploadFrontImage from './jewelry/UploadFrontImage'
import UploadLogoImage from './jewelry/UploadLogoImage'
import UploadFileMadeIn from './jewelry/UploadFileMadeIn'
import UploadFileSerialNumber from './jewelry/UploadFileSerialNumber'
import UploadFileHallmark from './jewelry/UploadFileHallmark'
import UploadFileAdditionalImage from './jewelry/UploadFileAdditionalImage'

function Jewelry({ taskId, clientId, setFeatured, images, setImages }) {
    const [imageFront, setImageFront] = useState('');
    const [imageLogo, setImageLogo] = useState('');
    const [imageMadeIn, setImageMadeIn] = useState('')
    const [imageSerialNumber, setImageSerialNumber] = useState('')
    const [imageHallmark, setImageHallmark] = useState('')
    const [imageAdditionalImage, setImageAdditionalImage] = useState('')
    return (
        <div className="row">
            <UploadFrontImage
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setFeatured={setFeatured} setImageFront={setImageFront} setImageLogo={setImageLogo}
                imageFront={imageFront} imageLogo={imageLogo} imageMadeIn={imageMadeIn} imageSerialNumber={imageSerialNumber} imageHallmark={imageHallmark} imageAdditionalImage={imageAdditionalImage} />
            <UploadLogoImage
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageLogo={setImageLogo}
                imageFront={imageFront} imageLogo={imageLogo} imageMadeIn={imageMadeIn} imageSerialNumber={imageSerialNumber} imageHallmark={imageHallmark} imageAdditionalImage={imageAdditionalImage}
            />
            <UploadFileMadeIn
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageMadeIn={setImageMadeIn}
                imageFront={imageFront} imageLogo={imageLogo} imageMadeIn={imageMadeIn} imagrialNumber={imageSerialNumber} imageHallmark={imageHallmark} imageAdditionalImage={imageAdditionalImage}
            />
            <UploadFileSerialNumber
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageSerialNumber={setImageSerialNumber}
                imageFront={imageFront} imageLogo={imageLogo} imageMadeIn={imageMadeIn} imageSerialNumber={imageSerialNumber} imageHallmark={imageHallmark} imageAdditionalImage={imageAdditionalImage}
            />
            <UploadFileHallmark
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageHallmark={setImageHallmark}
                imageFront={imageFront} imageLogo={imageLogo} imageMadeIn={imageMadeIn} imageSerialNumber={imageSerialNumber} imageHallmark={imageHallmark} imageAdditionalImage={imageAdditionalImage}
            />

            <UploadFileAdditionalImage
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageAdditionalImage={setImageAdditionalImage}
                imageFront={imageFront} imageLogo={imageLogo} imageMadeIn={imageMadeIn} imageSerialNumber={imageSerialNumber} imageHallmark={imageHallmark} imageAdditionalImage={imageAdditionalImage}
            />
        </div>
    )
}

export default Jewelry
