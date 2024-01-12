import {
    Center,
    HStack,
    Heading,
    Text,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { IsUserLogin } from "../../ProjectCommon";
import { useNavigate } from "react-router-dom";

export default function TopMenu() {
    const toast = useToast();
    const navigate = useNavigate();
    const isUserLogin = useRecoilValue(IsUserLogin);

    function onWriteButtonClic() {
        if (!isUserLogin) {
            toast({
                status: "error",
                title: "로그인이 필요합니다",
                description: "로그인한 사용자만 글쓰기가 가능합니다.",
            });
            return;
        }
        navigate("/post");
    }

    return (
        <VStack w="100%" h="60px" alignItems="flex-start">
            <Text fontWeight="bold" fontSize="20px">
                국산차게시판
            </Text>
            <HStack w="100%" alignItems="center" justifyContent="space-between">
                <Text fontSize="12px">[공지] 보배드럼 커뮤니티 운영정책</Text>
                <Center
                    w="50px"
                    h="25px"
                    fontSize="12px"
                    fontWeight="bold"
                    border="1px solid rgba(0, 0, 0, 0.2)"
                    borderRadius="3px"
                    bgColor="#F5F5F5"
                    _hover={{ cursor: "pointer" }}
                    onClick={onWriteButtonClic}
                >
                    글쓰기
                </Center>
            </HStack>
        </VStack>
    );
}
