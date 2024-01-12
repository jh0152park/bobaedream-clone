import {
    Center,
    FormControl,
    HStack,
    Input,
    Textarea,
    VStack,
} from "@chakra-ui/react";

export default function Post() {
    return (
        <VStack w="100%" h="85vh">
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
                />
            </FormControl>
        </VStack>
    );
}
