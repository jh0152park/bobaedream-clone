import {
    Center,
    FormControl,
    HStack,
    Input,
    Textarea,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { FirebaseDB } from "../Firebase";

export default function Edit() {
    const toast = useToast();
    const navigate = useNavigate();
    const location = useLocation();
    const editInfo = { ...location.state };
    const { register, reset, handleSubmit } = useForm();

    const [title, setTitle] = useState(editInfo.title);
    const [content, setContent] = useState(editInfo.content);

    async function onSubmit() {
        if (!title) {
            toast({
                status: "error",
                title: "제목을 입력하세요",
                description: "게시글의 제목은 필수입니다.",
                position: "top",
            });
            return;
        }
        if (!content) {
            toast({
                status: "error",
                title: "내용을 입력하세요",
                description: "게시글의 내용은 필수입니다.",
                position: "top",
            });
            return;
        }

        const postRef = doc(FirebaseDB, "posts", editInfo.id);
        await updateDoc(postRef, { title, content });

        reset();
        navigate("/");
    }

    return (
        <VStack w="100%" h="85vh" as="form" onSubmit={handleSubmit(onSubmit)}>
            <HStack
                w="100%"
                h="50px"
                alignItems="center"
                justifyContent="flex-start"
            >
                <Center
                    fontSize="15px"
                    bgColor="whitesmoke"
                    p="5px"
                    borderRadius="5px"
                    border="1px solid rgba(0, 0, 0, 0.3)"
                    _hover={{ cursor: "pointer" }}
                    as="button"
                >
                    파일첨부
                </Center>
                <Center
                    fontSize="15px"
                    bgColor="whitesmoke"
                    p="5px"
                    borderRadius="5px"
                    border="1px solid rgba(0, 0, 0, 0.3)"
                    _hover={{ cursor: "pointer" }}
                    as="button"
                >
                    게시하기
                </Center>
            </HStack>
            <FormControl w="100%">
                <Input
                    w="100%"
                    h="30px"
                    borderRadius="none"
                    type="text"
                    _placeholder={{
                        color: "black",
                        fontSize: "15px",
                    }}
                    color="black"
                    fontSize="15px"
                    bgColor="white"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                    // {...register("title", { required: false })}
                />
                <Textarea
                    w="100%"
                    h="500px"
                    mt="10px"
                    bgColor="white"
                    borderRadius="none"
                    color="black"
                    fontSize="15px"
                    _placeholder={{
                        color: "black",
                        fontSize: "15px",
                    }}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                    // {...register("content", { required: false })}
                />
            </FormControl>
        </VStack>
    );
}
