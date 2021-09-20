import React, { useState } from 'react'
import UploadFrontImage from './eyewear/UploadFrontImage'
import UploadLogoImage from './eyewear/UploadLogoImage'
import UploadFileArmEngravings from './eyewear/UploadFileArmEngravings'
import UploadFileSerialNumber from './eyewear/UploadFileSerialNumber'
import UploadFileScrews from './eyewear/UploadFileScrews'
import UploadFileLensEngraving from './eyewear/UploadFileLensEngraving'
import UploadFileAdditionalImage from './eyewear/UploadFileAdditionalImage'

function Eyewear({ taskId, clientId, setFeatured, images, setImages }) {
    const [imageFront, setImageFront] = useState('');
    const [imageLogo, setImageLogo] = useState('');
    const [imageArmEngravings, setImageArmEngravings] = useState('')
    const [imageSerialNumber, setImageSerialNumber] = useState('')
    const [imageScrews, setImageScrews] = useState('')
    const [imageLensEngraving, setImageLensEngraving] = useState('')
    const [imageAdditionalImage, setImageAdditionalImage] = useState('')
    return (
        <div className="row">
            <UploadFrontImage
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setFeatured={setFeatured} setImageFront={setImageFront} setImageLogo={setImageLogo}
                imageFront={imageFront} imageLogo={imageLogo} imageArmEngravings={imageArmEngravings} imageSerialNumber={imageSerialNumber} imageScrews={imageScrews} imageLensEngraving={imageLensEngraving} imageAdditionalImage={imageAdditionalImage} />
            <UploadLogoImage
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageLogo={setImageLogo}
                imageFront={imageFront} imageLogo={imageLogo} imageArmEngravings={imageArmEngravings} imageSerialNumber={imageSerialNumber} imageScrews={imageScrews} imageLensEngraving={imageLensEngraving} imageAdditionalImage={imageAdditionalImage}
            />
            <UploadFileArmEngravings
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageArmEngravings={setImageArmEngravings}
                imageFront={imageFront} imageLogo={imageLogo} imageArmEngravings={imageArmEngravings} imageSerialNumber={imageSerialNumber} imageScrews={imageScrews} imageLensEngraving={imageLensEngraving} imageAdditionalImage={imageAdditionalImage}
            />
            <UploadFileSerialNumber
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageSerialNumber={setImageSerialNumber}
                imageFront={imageFront} imageLogo={imageLogo} imageArmEngravings={imageArmEngravings} imageSerialNumber={imageSerialNumber} imageScrews={imageScrews} imageLensEngraving={imageLensEngraving} imageAdditionalImage={imageAdditionalImage}
            />
            <UploadFileScrews
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageScrews={setImageScrews}
                imageFront={imageFront} imageLogo={imageLogo} imageArmEngravings={imageArmEngravings} imageSerialNumber={imageSerialNumber} imageScrews={imageScrews} imageLensEngraving={imageLensEngraving} imageAdditionalImage={imageAdditionalImage}
            />

            <UploadFileLensEngraving
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageLensEngraving={setImageLensEngraving}
                imageFront={imageFront} imageLogo={imageLogo} imageArmEngravings={imageArmEngravings} imageSerialNumber={imageSerialNumber} imageScrews={imageScrews} imageLensEngraving={imageLensEngraving} imageAdditionalImage={imageAdditionalImage}
            />
            <UploadFileAdditionalImage
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageAdditionalImage={setImageAdditionalImage}
                imageFront={imageFront} imageLogo={imageLogo} imageArmEngravings={imageArmEngravings} imageSerialNumber={imageSerialNumber} imageScrews={imageScrews} imageLensEngraving={imageLensEngraving} imageAdditionalImage={imageAdditionalImage}
            />
        </div>
    )
}

export default Eyewear
