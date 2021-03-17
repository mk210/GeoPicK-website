import firebase from 'firebase';
// import '@firebase/messaging';
//import './sign-in screen';
const config = {
    apiKey: "AIzaSyDIvlHZc4WMB_6IibnMOQc-_D9M2noB57w",
    authDomain: "geopick-db.firebaseapp.com",
    databaseURL: "https://geopick-db-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "geopick-db",
    storageBucket: "geopick-db.appspot.com",
    messagingSenderId: "G-XS2DD50LZW",
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const firestore = firebase.firestore();

// use this to get user count from firebase
export async function getUserCount() {
    return (await firestore.collection("users").get()).docs.length
}

// use this to get post count from firebase
export async function getPostCount() {
    return (await firestore.collection("Posts").get()).docs.length
}

export default firestore;
// use -> import db from './firebase' 
// from root to use this db collection