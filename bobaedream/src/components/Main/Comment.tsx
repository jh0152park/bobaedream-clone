import { Text, VStack } from "@chakra-ui/react";

interface IProps {
    author: string;
    comment: string;
}

export default function Comment({ author, comment }: IProps) {
    return (
        <VStack
            w="100%"
            minH="100px"
            alignItems="flex-start"
            p="10px"
            overflowY="scroll"
            border="1px solid rgba(0, 0, 0, 0.5)"
        >
            <Text>작성자: {author}</Text>
            <Text>{comment}</Text>
        </VStack>
    );
}
