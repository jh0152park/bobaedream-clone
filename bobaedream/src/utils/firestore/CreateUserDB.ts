/*

name: ""
Created at: ""
Post: []
Comment: []

*/

import { addDoc, collection, getDocs } from "firebase/firestore";
import { FirebaseDB } from "../../Firebase";

export async function CreateUserDB(
    id: string,
    pw: string,
    name: string,
    createAt: string,
    uid: string
) {
    await addDoc(collection(FirebaseDB, uid), {
        email: id,
        password: pw,
        name: name,
        createAt: createAt,
        post: [],
        comment: [],
    });
}

export async function CreateUserAllNameDB(name: string) {
    await addDoc(collection(FirebaseDB, "username"), {
        name: name,
    });
}

export async function IsExistUserName(name: string) {
    try {
        const querySnapshot = await getDocs(collection(FirebaseDB, "username"));
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            console.log(
                `name from db: ${doc.data()["name"]} / input name: ${name}`
            );
            if (doc.data()["name"] === name) {
                console.log("same name already exists");
                throw new Error("escape loop");
            }
        });
        return false;
    } catch (e) {
        return true;
    }
}
