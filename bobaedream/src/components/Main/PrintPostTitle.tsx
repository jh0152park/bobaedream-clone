import { HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export interface IPorps {
    order: number;
    title: string;
    author: string;
    postedAt: string;
    content: string;
    comments: string[];
    id: string;
}

export default function PrintPostTitle({
    order,
    title,
    author,
    postedAt,
    content,
    comments,
    id,
}: IPorps) {
    const navigate = useNavigate();

    function onPostClick() {
        navigate("/detail", {
            state: {
                title,
                author,
                content,
                comments,
                id,
            },
        });
    }

    return (
        <HStack
            w="100%"
            h="30px"
            bgColor="whtie"
            borderBottom="1px solid rgba(0, 0, 0, 0.5)"
            fontSize="12px"
            _hover={{ cursor: "pointer" }}
            onClick={onPostClick}
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
