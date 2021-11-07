import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyDTVHhNlJr11ZjcwdIQRqgB--hTNZONNtk",
    authDomain: "todo-app-a172d.firebaseapp.com",
    projectId: "todo-app-a172d",
    storageBucket: "todo-app-a172d.appspot.com",
    messagingSenderId: "1042461846677",
    appId: "1:1042461846677:web:264f9f27dca6dc4ddaff9c",
    measurementId: "G-4ZZR89ENS6"
}); 


const db = firebaseapp.firestore();

export default db;