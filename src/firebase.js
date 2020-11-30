import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDdkiCHgT3H-UjzB0H4BHGYJNUqvQi_DdU",
    authDomain: "clone-caffa.firebaseapp.com",
    databaseURL: "https://clone-caffa.firebaseio.com",
    projectId: "clone-caffa",
    storageBucket: "clone-caffa.appspot.com",
    messagingSenderId: "988703000926",
    appId: "1:988703000926:web:d324fd58baefd114e427cf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };