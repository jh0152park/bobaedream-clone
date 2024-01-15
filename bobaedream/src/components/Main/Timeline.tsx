import { HStack, Text, VStack } from "@chakra-ui/react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FirebaseDB } from "../../Firebase";
import PrintPostTitle from "./PrintPostTitle";

interface IPost {
    author: string;
    postedAt: string;
    createdAt: number;
    title: string;
    content: string;
    view: number;
    like: number;
    comments: string[];
}

export default function Timeline() {
    const [posts, setPosts] = useState<IPost[]>();

    useEffect(() => {
        async function fetchPosts() {
            const postQuery = query(
                collection(FirebaseDB, "posts"),
                orderBy("createdAt", "desc")
            );

            await onSnapshot(postQuery, (snapshot) => {
                const entirePost = snapshot.docs.map((doc) => {
                    // console.log(doc);
                    // console.log(doc.data());
                    const {
                        author,
                        postedAt,
                        createdAt,
                        title,
                        content,
                        view,
                        like,
                        comments,
                    } = doc.data();
                    return {
                        author,
                        postedAt,
                        createdAt,
                        title,
                        content,
                        view,
                        like,
                        comments,
                        id: doc.id,
                    };
                });

                setPosts(entirePost);
            });
        }

        fetchPosts();
    }, []);

    return (
        <VStack w="100%" h="100%" bgColor="white" spacing={0}>
            <HStack
                w="100%"
                h="30px"
                bgColor="whitesmoke"
                borderTop="1px solid rgba(0, 0, 0, 0.5)"
                borderBottom="1px solid rgba(0, 0, 0, 0.5)"
                fontSize="12px"
            >
                <Text w="15%" textAlign="center">
                    번호
                </Text>
                <Text w="50%" textAlign="center">
                    제목
                </Text>
                <Text w="15%" textAlign="center">
                    글쓴이
                </Text>
                <Text w="20%" textAlign="center">
                    등록일
                </Text>
            </HStack>
            {posts?.map((post, index) => (
                <PrintPostTitle
                    order={index + 1}
                    title={post.title}
                    author={post.author}
                    postedAt={post.postedAt}
                    content={post.content}
                    comments={post.comments}
                />
            ))}
        </VStack>
    );
}
