import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyDENBz-ya8-avPEPosKm-iAcMJOXUNQBKE",
    authDomain: "clone-fca57.firebaseapp.com",
    databaseURL: "https://clone-fca57.firebaseio.com",
    projectId: "clone-fca57",
    storageBucket: "clone-fca57.appspot.com",
    messagingSenderId: "204210190552",
    appId: "1:204210190552:web:2a61af6fb73d26457e3fad"
  };



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};