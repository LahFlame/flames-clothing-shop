
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

  export const createUserProfileDocument = async (userAuth,additionalData) => {
    if (!userAuth) //userAuth can be null when we signout and this also triggers a state change
     return;
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const {email,displayName} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,...additionalData
            })
        } catch (error) {
            console.log("error creating user",error.message);
        }
    }
    return userRef;

  }

   firebase.initializeApp(config);

  export const auth = firebase.auth();

   export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
