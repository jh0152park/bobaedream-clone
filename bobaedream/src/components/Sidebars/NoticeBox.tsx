import { HStack, Text, VStack } from "@chakra-ui/react";
import SidebarText from "./SidebarText";

export default function NoticeBox() {
    return (
        <VStack w="100%" h="130px" bgColor="white" px="10px" pt="15px">
            <VStack
                w="100%"
                h="100%"
                borderBottom="1px solid rgba(0, 0, 0, 0.3)"
                alignItems="flex-start"
            >
                <Text fontWeight="bold" fontSize="14px">
                    게시판
                </Text>
                <HStack mt="3px" spacing="20px">
                    <VStack alignItems="flex-start" spacing="10px">
                        <SidebarText title={"베스트글"} />
                        <SidebarText title={"자유게시판"} />
                        <SidebarText title={"정치게시판"} />
                        <SidebarText title={"시승기/배틀/목격담"} />
                    </VStack>
                    <VStack alignItems="flex-start" spacing="10px">
                        <SidebarText title={"유명인의 차"} />
                        <SidebarText title={"🔞성인게시판"} />
                        <SidebarText title={"자동차뉴스"} />
                        <SidebarText title={"협력업체"} />
                    </VStack>
                </HStack>
            </VStack>
        </VStack>
    );
}
