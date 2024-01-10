import { Text } from "@chakra-ui/react";

export default function SidebarText({ title }: { title: string }) {
    return (
        <Text fontSize="11px" _hover={{ cursor: "pointer", color: "red" }}>
            {title}
        </Text>
    );
}
