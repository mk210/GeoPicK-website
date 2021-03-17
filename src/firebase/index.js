import 'firebase/database';
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

const db = firebase.database();
export default db;
// use -> import db from './firebase' 
// from root to use this db collection