import { VStack } from "@chakra-ui/react";
import LoginBox from "./LoginBox";
import ReferenceBox from "./ReferenceBox";
import NoticeBox from "./NoticeBox";
import ETCBox from "./ETCBox";
import ADBox from "./ADBox";
import SNSBox from "./SNSBox";

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
            <NoticeBox />
            <ETCBox />
            <ADBox />
            <SNSBox />
        </VStack>
    );
}
