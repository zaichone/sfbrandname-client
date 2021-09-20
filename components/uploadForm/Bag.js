import React, { useState } from 'react'
import UploadFrontImage from './bag/UploadFrontImage'
import UploadLogoImage from './bag/UploadLogoImage'
import UploadFileMadeIn from './bag/UploadFileMadeIn'
import UploadFileSerialNumber from './bag/UploadFileSerialNumber'
import UploadFileHardwareEngraving from './bag/UploadFileHardwareEngraving'
import UploadFileAdditionalImage from './bag/UploadFileAdditionalImage'

function Bag({ taskId, clientId, setFeatured, images, setImages }) {
    const [imageFront, setImageFront] = useState('');
    const [imageLogo, setImageLogo] = useState('');
    const [imageMadeIn, setImageMadeIn] = useState('')
    const [imageSerialNumber, setImageSerialNumber] = useState('')
    const [imageHardwareEngraving, setImageHardwareEngraving] = useState('')
    const [imageAdditionalImage, setImageAdditionalImage] = useState('')
    return (
        <div className="row">
            <UploadFrontImage
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setFeatured={setFeatured} setImageFront={setImageFront} setImageLogo={setImageLogo}
                imageFront={imageFront} imageLogo={imageLogo} imageMadeIn={imageMadeIn} imageSerialNumber={imageSerialNumber} imageHardwareEngraving={imageHardwareEngraving} imageAdditionalImage={imageAdditionalImage} />
            <UploadLogoImage
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageLogo={setImageLogo}
                imageFront={imageFront} imageLogo={imageLogo} imageMadeIn={imageMadeIn} imageSerialNumber={imageSerialNumber} imageHardwareEngraving={imageHardwareEngraving} imageAdditionalImage={imageAdditionalImage}
            />
            <UploadFileMadeIn
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageMadeIn={setImageMadeIn}
                imageFront={imageFront} imageLogo={imageLogo} imageMadeIn={imageMadeIn} imagrialNumber={imageSerialNumber} imageHardwareEngraving={imageHardwareEngraving} imageAdditionalImage={imageAdditionalImage}
            />
            <UploadFileSerialNumber
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageSerialNumber={setImageSerialNumber}
                imageFront={imageFront} imageLogo={imageLogo} imageMadeIn={imageMadeIn} imageSerialNumber={imageSerialNumber} imageHardwareEngraving={imageHardwareEngraving} imageAdditionalImage={imageAdditionalImage}
            />
            <UploadFileHardwareEngraving
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageHardwareEngraving={setImageHardwareEngraving}
                imageFront={imageFront} imageLogo={imageLogo} imageMadeIn={imageMadeIn} imageSerialNumber={imageSerialNumber} imageHardwareEngraving={imageHardwareEngraving} imageAdditionalImage={imageAdditionalImage}
            />

            <UploadFileAdditionalImage
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageAdditionalImage={setImageAdditionalImage}
                imageFront={imageFront} imageLogo={imageLogo} imageMadeIn={imageMadeIn} imageSerialNumber={imageSerialNumber} imageHardwareEngraving={imageHardwareEngraving} imageAdditionalImage={imageAdditionalImage}
            />
        </div>
    )
}

export default Bag
