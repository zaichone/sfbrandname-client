import React, { useState } from 'react'
import UploadFrontImage from './clothing/UploadFrontImage'
import UploadLogoImage from './clothing/UploadLogoImage'
import UploadFileSideSeamTag from './clothing/UploadFileSideSeamTag'
import UploadFileButton from './clothing/UploadFileButton'
import UploadFileZipper from './clothing/UploadFileZipper'
import UploadFileAdditionalImage from './clothing/UploadFileAdditionalImage'

function Clothing({ taskId, clientId, setFeatured, images, setImages }) {
    const [imageFront, setImageFront] = useState('');
    const [imageLogo, setImageLogo] = useState('');
    const [imageSideSeamTag, setImageSideSeamTag] = useState('')
    const [imageButton, setImageButton] = useState('')
    const [imageZipper, setImageZipper] = useState('')
    const [imageAdditionalImage, setImageAdditionalImage] = useState('')
    return (
        <div className="row">
            <UploadFrontImage
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setFeatured={setFeatured} setImageFront={setImageFront} setImageLogo={setImageLogo}
                imageFront={imageFront} imageLogo={imageLogo} imageSideSeamTag={imageSideSeamTag} imageButton={imageButton} imageZipper={imageZipper} imageAdditionalImage={imageAdditionalImage} />
            <UploadLogoImage
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageLogo={setImageLogo}
                imageFront={imageFront} imageLogo={imageLogo} imageSideSeamTag={imageSideSeamTag} imageButton={imageButton} imageZipper={imageZipper} imageAdditionalImage={imageAdditionalImage}
            />
            <UploadFileSideSeamTag
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageSideSeamTag={setImageSideSeamTag}
                imageFront={imageFront} imageLogo={imageLogo} imageSideSeamTag={imageSideSeamTag} imageButton={imageButton} imageZipper={imageZipper} imageAdditionalImage={imageAdditionalImage}
            />
            <UploadFileButton
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageButton={setImageButton}
                imageFront={imageFront} imageLogo={imageLogo} imageSideSeamTag={imageSideSeamTag} imageButton={imageButton} imageZipper={imageZipper} imageAdditionalImage={imageAdditionalImage}
            />
            <UploadFileZipper
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageZipper={setImageZipper}
                imageFront={imageFront} imageLogo={imageLogo} imageSideSeamTag={imageSideSeamTag} imageButton={imageButton} imageZipper={imageZipper} imageAdditionalImage={imageAdditionalImage}
            />
            <UploadFileAdditionalImage
                taskId={taskId} clientId={clientId} images={images} setImages={setImages}
                setImageAdditionalImage={setImageAdditionalImage}
                imageFront={imageFront} imageLogo={imageLogo} imageSideSeamTag={imageSideSeamTag} imageButton={imageButton} imageZipper={imageZipper} imageAdditionalImage={imageAdditionalImage}
            />
        </div>
    )
}

export default Clothing
