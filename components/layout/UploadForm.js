import React,{useState} from 'react';

import { auth, firestore, storage } from "../../src/config/firebase";

function UploadForm() {
    const [imageAttatch, setImageAttatch] = useState({});
    const [image, setImage] = useState('')
    const changeHandler = (e) =>{
        let selected = e.target.files[0];
    }
    return (
        <form>
            <input type="file" id="filesFront" onChange={changeHandler}/>
        </form>
    )
}

export default UploadForm
