import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "../../Firebase";

export async function SignInAccount(email: string, password: string) {
    try {
        const credential = await signInWithEmailAndPassword(
            FirebaseAuth,
            email,
            password
        );
        if (credential) {
            const user = credential.user;
        }
        return true;
    } catch (err: any) {
        const message = err.message;
        alert(message);
        return false;
    }
}
