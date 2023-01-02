
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import  "firebase/compat/auth"

const config = {
    apiKey: "AIzaSyAUrO9SbaqhCfAO7kxAJYwrXOcSYVPM-Cw",
    authDomain: "flames-clothing-db.firebaseapp.com",
    projectId: "flames-clothing-db",
    storageBucket: "flames-clothing-db.appspot.com",
    messagingSenderId: "411327669093",
    appId: "1:411327669093:web:1dfac588105133c117f78c",
    measurementId: "G-FBQHCRYDLD"
  };

   firebase.initializeApp(config);

  export const auth = firebase.auth();

   export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
