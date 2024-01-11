import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

const FirebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();

export async function SignInAccount(email: string, password: string) {
    try {
        const credential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        if (credential) {
            const user = credential.user;
            alert(user.displayName);
        }
        return true;
    } catch (err: any) {
        const message = err.message;
        alert(message);
        return false;
    }
}
