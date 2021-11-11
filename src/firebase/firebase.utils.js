import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDi-etXAUTVZXoH7E_aTtS9j7rG3iLaNUc",
    authDomain: "crwn-db-8e653.firebaseapp.com",
    projectId: "crwn-db-8e653",
    storageBucket: "crwn-db-8e653.appspot.com",
    messagingSenderId: "401821733127",
    appId: "1:401821733127:web:a5baca4a5ab509502fb5a2",
    measurementId: "G-5LWRTTP3XH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;