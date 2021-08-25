import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBBw_MgnoljJRlIyCo1PnmLxTot5vKnnkk",
  authDomain: "react-demo-ecomm-db.firebaseapp.com",
  projectId: "react-demo-ecomm-db",
  storageBucket: "react-demo-ecomm-db.appspot.com",
  messagingSenderId: "1075625175456",
  appId: "1:1075625175456:web:b3d00aad3c64707eb79cc5",
  measurementId: "G-ZFXX43SLZX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
