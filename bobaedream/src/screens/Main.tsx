import { Center, HStack, Heading, VStack } from "@chakra-ui/react";
import Sidebar from "../components/Sidebars/Sidebar";
import { FirebaseAuth } from "../Firebase";
import TopMenu from "../components/Main/TopMenu";
import Timeline from "../components/Main/Timeline";
import { useEffect } from "react";

export default function Main() {
    const user = FirebaseAuth.currentUser;

    return (
        <HStack w="100%" h="150vh">
            <Sidebar />
            <VStack w="100%" h="100%">
                <TopMenu />
                <Timeline />
            </VStack>
        </HStack>
    );
}
