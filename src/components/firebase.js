import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyAjxoaf_kEQgqb8RThXx__mfEgFG4gzk6E",
  authDomain: "todoapplication-5a24a.firebaseapp.com",
  databaseURL: "https://todoapplication-5a24a-default-rtdb.firebaseio.com",
  projectId: "todoapplication-5a24a",
  storageBucket: "todoapplication-5a24a.appspot.com",
  messagingSenderId: "43994274018",
  appId: "1:43994274018:web:d366c366950666faf126bb",
  measurementId: "G-3QL5RPZ207"
});

const db = firebaseapp.firestore();

export default db;
