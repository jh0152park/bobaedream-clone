import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FirebaseAuth, FirebaseDB } from "../../Firebase";
import {
    CreateUserAllNameDB,
    CreateUserDB,
    IsExistUserName,
} from "../firestore/CreateUserDB";

export async function CreateAccount(
    email: string,
    password: string,
    nickname: string
) {
    try {
        const exist = await IsExistUserName(nickname);

        if (exist) {
            alert("사용중인 닉네임 입니다.");
            return false;
        }

        let today = new Date();
        let year = today.getFullYear();
        let month = ("0" + (today.getMonth() + 1)).slice(-2);
        let day = ("0" + today.getDate()).slice(-2);
        let dateString = year + "-" + month + "-" + day;

        const credential = await createUserWithEmailAndPassword(
            FirebaseAuth,
            email,
            password
        );
        if (credential) {
            const user = credential.user;

            await updateProfile(user, {
                displayName: nickname,
            });
            CreateUserAllNameDB(nickname);
            CreateUserDB(email, password, nickname, dateString, user.uid);
        }

        return true;
    } catch (err: any) {
        const message = err.message;
        alert(message);
        return false;
    }
}
