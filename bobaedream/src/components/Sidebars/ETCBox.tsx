import { HStack, Text, VStack } from "@chakra-ui/react";
import SidebarText from "./SidebarText";

export default function ETCBox() {
    return (
        <VStack w="100%" h="130px" bgColor="white" px="10px" pt="15px">
            <VStack
                w="100%"
                h="100%"
                borderBottom="1px solid rgba(0, 0, 0, 0.3)"
                alignItems="flex-start"
            >
                <Text fontWeight="bold" fontSize="14px">
                    기타
                </Text>
                <HStack
                    w="100%"
                    mt="3px"
                    justifyContent="space-between"
                    pr="15px"
                >
                    <VStack alignItems="flex-start" spacing="10px">
                        <SidebarText title={"이벤트"} />
                        <SidebarText title={"공지사항"} />
                        <SidebarText title={"업체검색"} />
                    </VStack>
                    <VStack alignItems="flex-start" spacing="10px">
                        <SidebarText title={"제안/건의"} />
                        <SidebarText title={"보배드림 이야기"} />
                        <SidebarText title={""} />
                        <SidebarText title={""} />
                    </VStack>
                </HStack>
            </VStack>
        </VStack>
    );
}
