import { Center, HStack, Heading, VStack } from "@chakra-ui/react";
import Sidebar from "../components/Sidebars/Sidebar";
import { FirebaseAuth } from "../Firebase";

export default function Main() {
    return (
        <HStack w="100%" h="150vh">
            <Sidebar />
        </HStack>
    );
}
