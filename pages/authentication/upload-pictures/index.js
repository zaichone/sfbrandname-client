import Head from 'next/head'
import Link from 'next/link';
import PagtTitle from '../../../components/layout/PageTitle';
import cover from '../../../assets/account/cover.png';
import Two from '../../../assets/2.png';
import InfoIcon from '@material-ui/icons/Info';

import SymmetricalDiv from '../../../components/layout/SymmetricalDiv';

import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';

import { auth, firestore, storage } from "../../../src/config/firebase";
import useAuth from '../../../src/hooks/auth';

const categories = ['Watches', 'Bag', 'Clothing', 'Jewelry', 'Shoes'];

function UploadPicutres() {
    const [taskId,setTaskId] = useState();
    const [clientId,setClientId] = useState();
    const [imageAttatch, setImageAttatch] = useState({});
    const [owner] = useState('ADMIN');
    const [images, setImages] = useState([])
    const [imageFront, setImageFront] = useState('')
    const [imageLogo, setImageLogo] = useState('')
    const [imageArmEngravings, setImageArmEngravings] = useState('')
    const [imageSerialNumber, setImageSerialNumber] = useState('')
    const [imageScrews, setImageScrews] = useState('')
    const [imageLensEngraving, setImageLensEngraving] = useState('')
    const [imageAdditionalImage, setImageAdditionalImage] = useState('')
    const [featured, setFeatured] = useState();
    const router = useRouter();
    //const { taskId } = router.query;
    console.log("🚀 ~ file: index.js ~ line 34 ~ UploadPicutres ~ taskId", taskId)

    useEffect(() => {
        const _clientId = window.localStorage.getItem('clientId');
        setClientId(_clientId);
        
        const _taskId = window.localStorage.getItem('taskId');
        setTaskId(_taskId); 
    },[]);
    function goNext(){
        const taskRef = firestore.collection('tasks').doc(taskId);
        taskRef.update({
            images: images,
            featured:featured
            },{ merge: true})
            .then(() => {}).catch((error) => {});
        router.push('/authentication/almost-done/')
    }

    async function uploadFileFront(){
        let storageRef = storage.ref("/authen");
        let file = document.getElementById("filesFront").files[0];
        const ts = Number(new Date())
        const uploadName = `${clientId}_${ts}_${file.name}`
        let thisRef = storageRef.child(uploadName);
        await thisRef.put(file).then(function(snapshot) {
            snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log("🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL", downloadURL)
                setImageFront({
                    taskId: taskId,
                    clientId: clientId,
                    label:'Front',
                    imageURL: downloadURL,
                    timestamp:new Date().getTime()
                });
                setImages([imageFront,imageLogo,imageArmEngravings,imageSerialNumber,imageScrews,imageLensEngraving,imageAdditionalImage]);
                setFeatured(downloadURL);
            });
        })
    }
    async function uploadFileLogo(){
        let storageRef = storage.ref("/authen");
        let file = document.getElementById("filesLogo").files[0];
        const ts = Number(new Date())
        const uploadName = `${clientId}_${ts}_${file.name}`
        let thisRef = storageRef.child(uploadName);
        await thisRef.put(file).then(function(snapshot) {
            snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log("🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL", downloadURL)
                setImageLogo({
                    taskId: taskId,
                    clientId: clientId,
                    label:'Logo / Made In',
                    imageURL: downloadURL,
                    timestamp:new Date().getTime()
                });
                setImages([imageFront,imageLogo,imageArmEngravings,imageSerialNumber,imageScrews,imageLensEngraving,imageAdditionalImage]);
                setFeatured(downloadURL);
            });
        })
    }
    async function uploadFileArmEngravings(){
        let storageRef = storage.ref("/authen");
        let file = document.getElementById("filesArmEngravings").files[0];
        const ts = Number(new Date())
        const uploadName = `${clientId}_${ts}_${file.name}`
        let thisRef = storageRef.child(uploadName);
        await thisRef.put(file).then(function(snapshot) {
            snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log("🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL", downloadURL)
                setImageArmEngravings({
                    taskId: taskId,
                    clientId: clientId,
                    label:'Arm Engravings',
                    imageURL: downloadURL,
                    timestamp:new Date().getTime()
                });
                setImages([imageFront,imageLogo,imageArmEngravings,imageSerialNumber,imageScrews,imageLensEngraving,imageAdditionalImage]);
                setFeatured(downloadURL);
            });
        })
    }
    async function uploadFileSerialNumber(){
        let storageRef = storage.ref("/authen");
        let file = document.getElementById("filesSerialNumber").files[0];
        const ts = Number(new Date())
        const uploadName = `${clientId}_${ts}_${file.name}`
        let thisRef = storageRef.child(uploadName);
        await thisRef.put(file).then(function(snapshot) {
            snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log("🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL", downloadURL)
                setImageSerialNumber({
                    taskId: taskId,
                    clientId: clientId,
                    label:'Serial Number',
                    imageURL: downloadURL,
                    timestamp:new Date().getTime()
                });
                setImages([imageFront,imageLogo,imageArmEngravings,imageSerialNumber,imageScrews,imageLensEngraving,imageAdditionalImage]);
                setFeatured(downloadURL);
            });
        })
    }
    async function uploadFileScrews(){
        let storageRef = storage.ref("/authen");
        let file = document.getElementById("filesScrews").files[0];
        const ts = Number(new Date())
        const uploadName = `${clientId}_${ts}_${file.name}`
        let thisRef = storageRef.child(uploadName);
        await thisRef.put(file).then(function(snapshot) {
            snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log("🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL", downloadURL)
                setImageScrews({
                    taskId: taskId,
                    clientId: clientId,
                    label:'Screws',
                    imageURL: downloadURL,
                    timestamp:new Date().getTime()
                });
                setImages([imageFront,imageLogo,imageArmEngravings,imageSerialNumber,imageScrews,imageLensEngraving,imageAdditionalImage]);
                setFeatured(downloadURL);
            });
        })
    }
    async function uploadFileLensEngraving(){
        let storageRef = storage.ref("/authen");
        let file = document.getElementById("filesLensEngraving").files[0];
        const ts = Number(new Date())
        const uploadName = `${clientId}_${ts}_${file.name}`
        let thisRef = storageRef.child(uploadName);
        await thisRef.put(file).then(function(snapshot) {
            snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log("🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL", downloadURL)
                setImageLensEngraving({
                    taskId: taskId,
                    clientId: clientId,
                    label:'Lens Engraving',
                    imageURL: downloadURL,
                    timestamp:new Date().getTime()
                });
                setImages([imageFront,imageLogo,imageArmEngravings,imageSerialNumber,imageScrews,imageLensEngraving,imageAdditionalImage]);
                setFeatured(downloadURL);
            });
        })
    }
    async function uploadFileAdditionalImage(){
        let storageRef = storage.ref("/authen");
        let file = document.getElementById("filesAdditionalImage").files[0];
        const ts = Number(new Date())
        const uploadName = `${clientId}_${ts}_${file.name}`
        let thisRef = storageRef.child(uploadName);
        await thisRef.put(file).then(function(snapshot) {
            snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log("🚀 ~ file: index.js ~ line 44 ~ snapshot.ref.getDownloadURL ~ downloadURL", downloadURL)
                setImageAdditionalImage({
                    taskId: taskId,
                    clientId: clientId,
                    label:'Additional Image (Optional)',
                    imageURL: downloadURL,
                    timestamp:new Date().getTime()
                });
                setImages([imageFront,imageLogo,imageArmEngravings,imageSerialNumber,imageScrews,imageLensEngraving,imageAdditionalImage]);
                setFeatured(downloadURL);
            });
        })
    }
    console.log('images', images)
    return (
        <div>
            <Head>
                <title>SF Brandname - Authentication - Upload Pictures</title>
                <meta name="description" content="มองหาร้านแบรนด์เนมมือสองที่ให้ราคาดี ของแท้ คุณภาพสวย ต้องที่ SF Brandname เท่านั้น เราให้บริการแบบครบวงจร ตั้งแต่ขายสินค้า รับซื้อ และทำสปากระเป๋า" />
                <meta name="keyword" content="ร้านแบรนด์เนมมือสอง ราคาดี, ร้านรับซื้อขายของแบรนด์เนมมือสอง, ร้านรับซื้อกระเป๋าแบรนด์เนมมือสอง, ร้านรับซื้อฝากขายแบรนด์เนมแท้, ร้านรับซื้อและฝากขายแบรนด์เนม, ร้านรับซื้อและฝากขายแบรนด์เนม มือสอง, ร้านรับซื้อ-ฝากขายกระเป๋าแบรนด์เนม, ร้านฝากขายกระเป๋าแบรนด์เนม, ร้านขายสินค้าแบรนด์เนมมือสอง ให้ราคาสูง, ร้านจำนำกระเป๋าแบรนด์เนม
"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="page-authenticate">
                <PagtTitle title="Authentications" bg={cover} />
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-3 col-md-3 col-xxl-2 gx-0">
                                <div className="sidebar">
                                    <div className="card">
                                        <h2>Upload Pictures</h2>
                                        <p>Give us some pictures. </p>
                                        <img src={Two.src} className="img-fluid" alt="" />
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-sm-9 col-md-9 col-xxl-10">
                                <div className="details">
                                    <p>Please note: all images are required. Click to upload or drag & drop to each example image.<Link href="/image-guideline/">Image Guideline</Link></p>
                                    
                                        <div className="row">
                                            <div className="col-4 text-center mt-5">
                                                <h3>Front</h3>
                                                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center image-box mt-5" 
                                                onClick={()=> document.getElementById("filesFront").click() }
                                                style={{backgroundImage:`url(${imageFront?.imageURL})`}}
                                                >
                                                   <i>Click to Add Image</i>
                                                   <input style={{display:"none"}} type="file" onChange={uploadFileFront} id="filesFront" name="filesFront[]" multiple />
                                                </SymmetricalDiv>
                                            </div>
                                            <div className="col-4 text-center mt-5">
                                                <h3>Logo</h3>
                                                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center image-box mt-5"
                                                onClick={()=> document.getElementById("filesLogo").click() }
                                                style={{backgroundImage:`url(${imageLogo?.imageURL})`}}
                                                >
                                                   <i>Click to Add Image</i>
                                                   <input style={{display:"none"}} type="file" onChange={uploadFileLogo} id="filesLogo" name="filesLogo[]" multiple />
                                                </SymmetricalDiv>
                                            </div>
                                            <div className="col-4 text-center mt-5">
                                                <h3>Made In Tag</h3>
                                                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center image-box mt-5"
                                                onClick={()=> document.getElementById("filesArmEngravings").click() }
                                                style={{backgroundImage:`url(${imageArmEngravings?.imageURL})`}}
                                                >
                                                   <i>Click to Add Image</i>
                                                   <input style={{display:"none"}} type="file" onChange={uploadFileArmEngravings} id="filesArmEngravings" name="filesArmEngravings[]" multiple />
                                                </SymmetricalDiv>
                                            </div>
                                            <div className="col-4 text-center mt-5">
                                                <h3>Serial Number / Date Code</h3>
                                                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center image-box mt-5"
                                                onClick={()=> document.getElementById("filesSerialNumber").click() }
                                                style={{backgroundImage:`url(${imageSerialNumber?.imageURL})`}}
                                                >
                                                   <i>Click to Add Image</i>
                                                   <input style={{display:"none"}} type="file" onChange={uploadFileSerialNumber} id="filesSerialNumber" name="filesSerialNumber[]" multiple />
                                                </SymmetricalDiv>
                                            </div>
                                            <div className="col-4 text-center mt-5">
                                                <h3>Hardware Engraving</h3>
                                                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center image-box mt-5"
                                                onClick={()=> document.getElementById("filesScrews").click() }
                                                style={{backgroundImage:`url(${imageScrews?.imageURL})`}}
                                                >
                                                   <i>Click to Add Image</i>
                                                   <input style={{display:"none"}} type="file" onChange={uploadFileScrews} id="filesScrews" name="filesScrews[]" multiple />
                                                </SymmetricalDiv>
                                            </div>
                                            <div className="col-4 text-center mt-5">
                                                <h3>Additional Image (Optional)</h3>
                                                <SymmetricalDiv className="d-flex flex-column align-items-center justify-content-center image-box mt-5"
                                                onClick={()=> document.getElementById("filesLensEngraving").click() }
                                                style={{backgroundImage:`url(${imageLensEngraving?.imageURL})`}}
                                                >
                                                   <i>Click to Add Image</i>
                                                   <input style={{display:"none"}} type="file" onChange={uploadFileLensEngraving} id="filesLensEngraving" name="filesEngraving[]" multiple />
                                                </SymmetricalDiv>
                                            </div>
                                            
                                            <div className="col-12 mb-3 mt-5">
                                            <button onClick={goNext}>Next</button>
                                        </div>
                                            
                                        </div>
                                        
                                        
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default UploadPicutres
