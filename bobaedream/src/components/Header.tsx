import { FaCar } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Center, HStack, Icon, Text, VStack } from "@chakra-ui/react";

export default function Header() {
    return (
        <VStack w="100vw" h="100px" spacing={0}>
            <HStack
                w="100%"
                h="50%"
                px="450px"
                alignItems="center"
                justifyContent="space-between"
            >
                <HStack
                    _hover={{
                        cursor: "pointer",
                    }}
                >
                    <Icon as={FaCar} color="#0A5AAF" w="30px" h="30px" />
                    <Text color="#0A5AAF" fontWeight="bold" fontSize="30px">
                        보배드림
                    </Text>
                </HStack>

                <HStack fontSize="11px">
                    <Text
                        _hover={{
                            cursor: "pointer",
                            textDecoration: "underline",
                        }}
                    >
                        로그인
                    </Text>
                    <Text> | </Text>
                    <Text
                        _hover={{
                            cursor: "pointer",
                            textDecoration: "underline",
                        }}
                    >
                        회원가입
                    </Text>
                    <Text> | </Text>
                    <Text
                        _hover={{
                            cursor: "pointer",
                            textDecoration: "underline",
                        }}
                    >
                        사이버매장 차량등록
                    </Text>
                    <Text> | </Text>
                    <Text
                        _hover={{
                            cursor: "pointer",
                            textDecoration: "underline",
                        }}
                    >
                        고객센터
                    </Text>
                </HStack>
            </HStack>
            <HStack
                w="100%"
                h="50%"
                bgColor="#0A5AAF"
                px="450px"
                justifyContent="space-between"
            >
                <HStack color="white" spacing={4}>
                    <Text
                        fontWeight="bold"
                        _hover={{
                            cursor: "pointer",
                            textDecoration: "underline",
                        }}
                    >
                        사이버매장
                    </Text>
                    <Text
                        fontWeight="bold"
                        _hover={{
                            cursor: "pointer",
                            textDecoration: "underline",
                        }}
                    >
                        국산차
                    </Text>
                    <Text
                        fontWeight="bold"
                        _hover={{
                            cursor: "pointer",
                            textDecoration: "underline",
                        }}
                    >
                        수입차
                    </Text>
                    <Text
                        fontWeight="bold"
                        _hover={{
                            cursor: "pointer",
                            textDecoration: "underline",
                        }}
                    >
                        튜닝카
                    </Text>
                    <Text
                        fontWeight="bold"
                        _hover={{
                            cursor: "pointer",
                            textDecoration: "underline",
                        }}
                    >
                        중고차시세
                    </Text>
                    <Text
                        fontWeight="bold"
                        _hover={{
                            cursor: "pointer",
                            textDecoration: "underline",
                        }}
                    >
                        커뮤니티
                    </Text>
                    <Text
                        fontWeight="bold"
                        _hover={{
                            cursor: "pointer",
                            textDecoration: "underline",
                        }}
                    >
                        내차팔기
                    </Text>
                    <Text
                        fontWeight="bold"
                        _hover={{
                            cursor: "pointer",
                            textDecoration: "underline",
                        }}
                    >
                        오토바이
                    </Text>
                    <Text
                        fontWeight="bold"
                        _hover={{
                            cursor: "pointer",
                            textDecoration: "underline",
                        }}
                    >
                        중고장터
                    </Text>
                    <Text
                        fontWeight="bold"
                        _hover={{
                            cursor: "pointer",
                            textDecoration: "underline",
                        }}
                    >
                        업체검색
                    </Text>
                </HStack>
                <HStack spacing={0}>
                    <Center
                        w="50px"
                        h="50px"
                        borderLeft="1px solid rgba(0, 0, 0, 0.3)"
                        borderRight="1px solid rgba(0, 0, 0, 0.3)"
                        _hover={{ cursor: "pointer" }}
                    >
                        <Icon
                            as={HiMiniMagnifyingGlass}
                            color="white"
                            w="25px"
                            h="25px"
                        />
                    </Center>
                    <Center
                        w="50px"
                        h="50px"
                        borderRight="1px solid rgba(0, 0, 0, 0.3)"
                        _hover={{ cursor: "pointer" }}
                    >
                        <Icon as={FiMenu} color="white" w="25px" h="25px" />
                    </Center>
                </HStack>
            </HStack>
        </VStack>
    );
}
