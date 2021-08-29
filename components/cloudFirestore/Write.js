import firebase from 'firebase/app';

import 'firebase/firestore';
const firestore = firebase.firestore();

const WriteToCloudFirestore = ({collection, doc}) => {
    const sendData = () => {
        try{
            firestore.collection(collection).doc(doc).
        }catch(error){
            console.error(error);
        }
    }
}