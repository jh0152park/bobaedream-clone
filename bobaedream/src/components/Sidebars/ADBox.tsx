import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function ADBox() {
    return (
        <HStack px="10px" py="15px" alignItems="flex-start" spacing="15px">
            <Image
                w="70px"
                h="70px"
                objectFit="cover"
                overflow="hidden"
                src="https://images.unsplash.com/photo-1655198739370-92b21627ca8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <VStack alignItems="flex-start" spacing="5px">
                <Text fontSize="12px" fontWeight="bold">
                    타이어가게
                </Text>
                <Text fontSize="12px">타이어</Text>
                <Text fontSize="12px">010-1234-5678</Text>
            </VStack>
        </HStack>
    );
}
