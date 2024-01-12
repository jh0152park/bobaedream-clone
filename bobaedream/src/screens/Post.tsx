import {
    Center,
    FormControl,
    HStack,
    Input,
    Textarea,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";

export default function Post() {
    const toast = useToast();
    const { register, reset, handleSubmit } = useForm();

    function onSubmit(data: FieldValues) {
        console.log(data);
        if (!data.title) {
            toast({
                status: "error",
                title: "제목을 입력하세요",
                description: "게시글의 제목은 필수입니다.",
                position: "top",
            });
            return;
        }
        if (!data.content) {
            toast({
                status: "error",
                title: "내용을 입력하세요",
                description: "게시글의 내용은 필수입니다.",
                position: "top",
            });
            return;
        }
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
                    placeholder="제목"
                    type="text"
                    _placeholder={{
                        color: "black",
                        fontSize: "15px",
                    }}
                    color="black"
                    fontSize="15px"
                    bgColor="white"
                    {...register("title", { required: false })}
                />
                <Textarea
                    w="100%"
                    h="500px"
                    mt="10px"
                    bgColor="white"
                    borderRadius="none"
                    placeholder="내용"
                    color="black"
                    fontSize="15px"
                    _placeholder={{
                        color: "black",
                        fontSize: "15px",
                    }}
                    {...register("content", { required: false })}
                />
            </FormControl>
        </VStack>
    );
}
