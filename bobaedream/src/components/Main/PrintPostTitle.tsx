import { HStack, Text } from "@chakra-ui/react";

interface IPorps {
    order: number;
    title: string;
    author: string;
    postedAt: string;
    content: string;
    comments: string[];
}

export default function PrintPostTitle({
    order,
    title,
    author,
    postedAt,
    content,
    comments,
}: IPorps) {
    return (
        <HStack
            w="100%"
            h="30px"
            bgColor="whtie"
            borderBottom="1px solid rgba(0, 0, 0, 0.5)"
            fontSize="12px"
            _hover={{ cursor: "pointer" }}
        >
            <Text w="15%" textAlign="center">
                {order}
            </Text>
            <Text w="50%" textAlign="center">
                {title}
            </Text>
            <Text w="15%" textAlign="center">
                {author}
            </Text>
            <Text w="20%" textAlign="center">
                {postedAt}
            </Text>
        </HStack>
    );
}
