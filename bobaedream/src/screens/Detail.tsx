import {
    Box,
    Button,
    Center,
    HStack,
    Text,
    Textarea,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { FirebaseAuth, FirebaseDB } from "../Firebase";
import { IPorps } from "../components/Main/PrintPostTitle";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import Comment from "../components/Main/Comment";

export default function Detail() {
    const navigate = useNavigate();
    const location = useLocation();
    const user = FirebaseAuth.currentUser;
    const postInfo: IPorps = { ...location.state };
    const toast = useToast();
    const [comment, setComment] = useState("");

    function onGoBackClick() {
        navigate(-1);
    }

    function onEditClick() {
        if (
            user?.displayName === postInfo.author ||
            user?.displayName === "운영자"
        ) {
            navigate("/edit", {
                state: {
                    id: postInfo.id,
                    title: postInfo.title,
                    content: postInfo.content,
                },
            });
        } else {
            alert("글을 작성한 사람만 수정할 수 있습니다.");
        }
    }

    async function onDeleteClick() {
        if (
            user?.displayName === postInfo.author ||
            user?.displayName === "운영자"
        ) {
            if (window.confirm("Are you sure you want to delete?")) {
                await deleteDoc(doc(FirebaseDB, "posts", postInfo.id));
                toast({
                    status: "success",
                    title: "게시글 삭제 성공",
                });
                navigate("/");
            }
        } else {
            alert("글을 작성한 사람만 삭제할 수 있습니다.");
        }
    }

    async function onCommentClick() {
        const postRef = doc(FirebaseDB, "posts", postInfo.id);
        await updateDoc(postRef, {
            comments: [
                ...postInfo.comments,
                { author: user?.displayName, comment },
            ],
        });

        toast({
            status: "success",
            title: "댓글 달기 성공",
        });

        navigate("/");
    }

    return (
        <VStack w="100%" h="85vh" alignItems="flex-start">
            <HStack>
                <Center
                    border="1px solid rgba(0, 0, 0, 0.5)"
                    borderRadius="5px"
                    p="5px"
                    _hover={{ cursor: "pointer" }}
                    onClick={onGoBackClick}
                >
                    뒤로가기
                </Center>
                <Center
                    border="1px solid rgba(0, 0, 0, 0.5)"
                    borderRadius="5px"
                    p="5px"
                    _hover={{ cursor: "pointer" }}
                    onClick={onEditClick}
                >
                    수정하기
                </Center>
                <Center
                    border="1px solid rgba(0, 0, 0, 0.5)"
                    borderRadius="5px"
                    p="5px"
                    _hover={{ cursor: "pointer" }}
                    onClick={onDeleteClick}
                >
                    삭제하기
                </Center>
            </HStack>
            <Box
                w="100%"
                h="30px"
                border="1px solid rgba(0, 0, 0, 0.5)"
                p="6px"
            >
                <Text>{postInfo.title}</Text>
            </Box>
            <Box
                w="100%"
                h="500px"
                overflowY="scroll"
                border="1px solid rgba(0, 0, 0, 0.5)"
                p="6px"
            >
                <Text>{postInfo.content}</Text>
            </Box>
            <HStack w="100%" h="100px">
                <Textarea
                    w="90%"
                    h="100%"
                    fontSize="15px"
                    color="black"
                    placeholder="댓글달기"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    _placeholder={{ color: "black", fontsize: "15px" }}
                />
                <Button
                    w="10%"
                    h="100%"
                    border="1px solid rgba(0, 0, 0, 0.5)"
                    borderRadius="5px"
                    onClick={onCommentClick}
                >
                    등록하기
                </Button>
            </HStack>

            {postInfo.comments.map((comment: any) => (
                <Comment author={comment.author} comment={comment.comment} />
            ))}
        </VStack>
    );
}
