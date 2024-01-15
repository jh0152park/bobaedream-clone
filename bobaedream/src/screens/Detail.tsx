import { Box, Center, Text, VStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Detail() {
    const navigate = useNavigate();
    const location = useLocation();
    const postInfo = { ...location.state };

    function onGoBackClick() {
        navigate(-1);
    }

    return (
        <VStack w="100%" h="85vh" alignItems="flex-start">
            <Center
                border="1px solid rgba(0, 0, 0, 0.5)"
                borderRadius="5px"
                p="5px"
                _hover={{ cursor: "pointer" }}
                onClick={onGoBackClick}
            >
                뒤로가기
            </Center>
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
        </VStack>
    );
}
