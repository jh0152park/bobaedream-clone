import { VStack } from "@chakra-ui/react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect } from "react";
import { FirebaseDB } from "../../Firebase";

export default function Timeline() {
    useEffect(() => {
        async function fetchPosts() {
            const postQuery = query(
                collection(FirebaseDB, "posts"),
                orderBy("createdAt", "asc")
            );

            await onSnapshot(postQuery, (snapshot) => {
                snapshot.docs.map((doc) => {
                    console.log(doc);
                });
            });
        }
    }, []);

    return <VStack w="100%" h="100%" bgColor="gray"></VStack>;
}
