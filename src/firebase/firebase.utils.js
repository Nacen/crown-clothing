import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBULuQNK5HhGqBehSPJBqPPKCHslsPYnf8",
  authDomain: "crown-clothing-ecommerce-db.firebaseapp.com",
  databaseURL: "https://crown-clothing-ecommerce-db.firebaseio.com",
  projectId: "crown-clothing-ecommerce-db",
  storageBucket: "crown-clothing-ecommerce-db.appspot.com",
  messagingSenderId: "47504550335",
  appId: "1:47504550335:web:eaa99d0b97bf5eb40a990a",
  measurementId: "G-NJ6YYD3T95"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);