import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyASTxCTIVeAEcBtrmjVYtbC1AVspAX3lNc",
    authDomain: "fashionng-6bb20.firebaseapp.com",
    projectId: "fashionng-6bb20",
    storageBucket: "fashionng-6bb20.appspot.com",
    messagingSenderId: "211011600190",
    appId: "1:211011600190:web:9a92d579918cebcb41366f",
    measurementId: "G-5XCMD6FD9L"
};

const app = initializeApp(config);

export const auth = getAuth();
export const googleFirestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;
