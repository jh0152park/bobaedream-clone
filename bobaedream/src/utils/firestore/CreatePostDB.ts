import { addDoc, collection } from "firebase/firestore";
import { FirebaseDB } from "../../Firebase";

export async function createPostDB(
    author: string,
    createdAt: string,
    title: string,
    content: string
) {
    await addDoc(collection(FirebaseDB, "posts"), {
        author: author,
        postedAt: createdAt,
        createdAt: Date.now(),
        title: title,
        content: content,
        view: 0,
        like: 0,
        comments: [],
    });
}
