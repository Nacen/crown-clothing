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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();
  console.log(snapshot);


  // if there is no user data in our database create one
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
