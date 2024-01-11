import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { FirebaseAuth } from "../../Firebase";

export default function LogoutBox() {
    const user = FirebaseAuth.currentUser;

    function onLogoutClick() {
        if (window.confirm("Are you sure you want to log out?")) {
            FirebaseAuth.signOut();
            window.location.replace("/");
        }
    }

    return (
        <HStack
            w="100%"
            h="100px"
            alignItems="flex-start"
            spacing={1}
            p="10px"
            borderBottom="1px solid rgba(0, 0, 0, 0.3)"
        >
            <HStack
                spacing={0}
                bgColor="white"
                border="1px solid black"
                mt="13px"
            >
                <VStack w="120px" spacing={0}>
                    <Box
                        w="100%"
                        h="25px"
                        borderBottom="1px solid black"
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-start"
                    >
                        <Text fontSize="12px">{user?.displayName}</Text>
                    </Box>
                    <Box
                        w="100%"
                        h="25px"
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-start"
                    >
                        <Text fontSize="12px">{user?.displayName}</Text>
                    </Box>
                </VStack>
                <Center
                    w="70px"
                    h="50px"
                    borderLeft="1px solid black"
                    as="button"
                    onClick={onLogoutClick}
                >
                    <Text fontWeight="bold" fontSize="12px">
                        로그아웃
                    </Text>
                </Center>
            </HStack>
        </HStack>
    );
}
