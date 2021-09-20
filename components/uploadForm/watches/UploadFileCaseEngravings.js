import { auth, firestore, storage } from "../../../src/config/firebase";
import useAuth from '../../../src/hooks/auth';

import { useRouter } from 'next/router';

import SymmetricalDiv from '../../layout/SymmetricalDiv';
import { ContactsOutlined } from '@material-ui/icons';

function UploadFileCaseEngravings({ taskId, clientId, setImageCaseEngravings,  images, setImages, imageFront, imageFace, imageCaseEngravings, imageSerialNumber, imageCrown, imageClasp, imageAdditionalImage }) {
    async function uploadFileCaseEngravings() {
        let storageRef = storage.ref("/authen");
        let file = document.getElementById("filesCaseEngravings").files[0];
        const ts = Number(new Date())
        const uploadName = `${clientId}_${ts}_${file.name}`
        let thisRef = storageRef.child(uploadName);
        await thisRef.put(file).then(function (snapshot) {
            snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log("🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL", downloadURL)
                setImageCaseEngravings({
                    taskId: taskId,
                    clientId: clientId,
                    label: 'Case Engravings',
                    imageURL: downloadURL,
                    timestamp: new Date().getTime()
                });
                setImages([imageFront, imageFace, imageCaseEngravings, imageSerialNumber, imageCrown, imageClasp, imageAdditionalImage]);
                //setFeatured(downloadURL);
            });
        })
    }
    return (
        <div className="col-4 text-center mt-4">
            <h3>Case Engravings</h3>
            <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center image-box"
                onClick={() => document.getElementById("filesCaseEngravings").click()}
                style={{ backgroundImage: `url(${imageCaseEngravings?.imageURL})` }}
            >
                <i>Click to Add Image</i>
                <input style={{ display: "none" }} type="file" onChange={uploadFileCaseEngravings} id="filesCaseEngravings" name="filesCaseEngravings[]" multiple />
            </SymmetricalDiv>
        </div>
    )
}

export default UploadFileCaseEngravings
