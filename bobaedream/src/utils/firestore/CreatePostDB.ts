import { addDoc, collection } from "firebase/firestore";
import { FirebaseDB } from "../../Firebase";

// created at
// author
// content
// view count
// comment
// id
export async function createPostDB(
    auther: string,
    createdAt: string,
    title: string,
    content: string
) {
    await addDoc(collection(FirebaseDB, "posts"), {
        auther: auther,
        postedAt: createdAt,
        createdAt: Date.now(),
        title: title,
        content: content,
        view: 0,
        like: 0,
        comments: [],
    });
}

// if (attachedFile) {
//     const localinfoRef = ref(
//         storage,
//         `tweets/${user.uid}-${user.displayName}/${doc.id}`
//     );
//     const result = await uploadBytes(localinfoRef, attachedFile);
//     const imageURL = await getDownloadURL(result.ref);
//     await updateDoc(doc, { imageURL: imageURL });
// }
