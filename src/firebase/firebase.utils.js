import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCt-PN_Nma6zTTdgXLTQZN0rftOpOeitBs",
    authDomain: "crwn-db-d4568.firebaseapp.com",
    projectId: "crwn-db-d4568",
    storageBucket: "crwn-db-d4568.appspot.com",
    messagingSenderId: "965224175807",
    appId: "1:965224175807:web:33051a35d8764a83b68e0a",
    measurementId: "G-RV4QW68KZ2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  }
  
  try {
      await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
      })
  }
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;