import { VStack } from "@chakra-ui/react";
import LoginBox from "./LoginBox";
import ReferenceBox from "./ReferenceBox";

export default function Sidebar() {
    return (
        <VStack
            w="210px"
            h="100%"
            bgColor="#F5F5F5"
            border="1px solid rgba(0, 0, 0, 0.3)"
            alignItems="flex-start"
            spacing={0}
        >
            <LoginBox />
            <ReferenceBox />
        </VStack>
    );
}
