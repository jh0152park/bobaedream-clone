import { Box, Text, VStack } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export default function Detail() {
    const location = useLocation();
    const postInfo = { ...location.state };

    return (
        <VStack w="100%" h="85vh">
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
