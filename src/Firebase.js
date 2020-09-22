// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQt9h9nfBJQsNyIJ6FSj2K8WJO89iPaQo",
  authDomain: "twitter-clone-a9f31.firebaseapp.com",
  databaseURL: "https://twitter-clone-a9f31.firebaseio.com",
  projectId: "twitter-clone-a9f31",
  storageBucket: "twitter-clone-a9f31.appspot.com",
  messagingSenderId: "304632380237",
  appId: "1:304632380237:web:4d9ae865516634bf1fd504",
  measurementId: "G-CTB4NQK744",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
