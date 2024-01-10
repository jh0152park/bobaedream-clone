import { HStack, Text, VStack } from "@chakra-ui/react";
import SidebarText from "./SidebarText";

export default function ReferenceBox() {
    return (
        <VStack w="100%" h="200px" bgColor="white" px="10px" pt="15px">
            <VStack
                w="100%"
                h="100%"
                borderBottom="1px solid rgba(0, 0, 0, 0.3)"
                alignItems="flex-start"
            >
                <Text fontWeight="bold" fontSize="14px">
                    자료실
                </Text>
                <HStack mt="10px" spacing="20px">
                    <VStack alignItems="flex-start">
                        <SidebarText title={"유머게시판"} />
                        <SidebarText title={"교통사고/블박"} />
                        <SidebarText title={"국산차게시판"} />
                        <SidebarText title={"수입차게시판"} />
                        <SidebarText title={"내차사진"} />
                        <SidebarText title={"직찍/특종발견"} />
                        <SidebarText title={"자동차사진/동영상"} />
                    </VStack>
                    <VStack alignItems="flex-start">
                        <SidebarText title={"레이싱모델"} />
                        <SidebarText title={"자유사진/동영상"} />
                        <SidebarText title={"군사/무기"} />
                        <SidebarText title={"트럭/버스/중기"} />
                        <SidebarText title={"항공/해운/철도"} />
                        <SidebarText title={"올드카/추억거리"} />
                        <SidebarText title={"장착시공사진"} />
                    </VStack>
                </HStack>
            </VStack>
        </VStack>
    );
}
