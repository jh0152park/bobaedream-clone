import { Text, VStack } from "@chakra-ui/react";

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
            </VStack>
        </VStack>
    );
}
