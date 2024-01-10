import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function SNSBox() {
    const fb = "https://image.bobaedream.co.kr/renew/images/common_re/face.gif";
    const fbUrl = "https://www.facebook.com/bobaedream";

    const yt =
        "https://image.bobaedream.co.kr/renew/images/common_re/youtube.gif";
    const ytUrl = "https://www.youtube.com/channel/UCLwH6qjWELskt7sGT2b3FOg";

    const tw =
        "https://image.bobaedream.co.kr/renew/images/common_re/twitt.gif";
    const twUrl = "https://twitter.com/bobae_dream";

    const nb =
        "https://image.bobaedream.co.kr/renew/images/common_re/naverblog.gif";
    const nbUrl = "http://blog.naver.com/bobae_dream";

    const ig =
        "https://image.bobaedream.co.kr/renew/images/common_re/insta.gif";
    const igUrl = "https://instagram.com/bobaedream";

    return (
        <VStack
            w="190px"
            h="80px"
            border="1px solid rgba(0, 0, 0, 0.3)"
            ml="10px"
            mt="30px"
        >
            <Box
                w="100%"
                h="25px"
                borderBottom="1px solid rgba(0, 0, 0, 0.3)"
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                pl="10px"
                bgColor="#EAEAF1"
            >
                <Text fontWeight="bold" fontSize="12px">
                    보배드림 SNS
                </Text>
            </Box>
            <HStack
                justifyContent="center"
                alignItems="center"
                pt="3px"
                spacing="3px"
            >
                <a href={fbUrl} target="_blank">
                    <Box w="30px" h="30px" _hover={{ cursor: "pointer" }}>
                        <Image w="100%" h="100%" objectFit="cover" src={fb} />
                    </Box>
                </a>

                <a href={ytUrl} target="_blank">
                    <Box w="30px" h="30px" _hover={{ cursor: "pointer" }}>
                        <Image w="100%" h="100%" objectFit="cover" src={yt} />
                    </Box>
                </a>

                <a href={twUrl} target="_blank">
                    <Box w="30px" h="30px" _hover={{ cursor: "pointer" }}>
                        <Image w="100%" h="100%" objectFit="cover" src={tw} />
                    </Box>
                </a>

                <a href={nbUrl} target="_blank">
                    <Box w="30px" h="30px" _hover={{ cursor: "pointer" }}>
                        <Image w="100%" h="100%" objectFit="cover" src={nb} />
                    </Box>
                </a>

                <a href={igUrl} target="_blank">
                    <Box w="30px" h="30px" _hover={{ cursor: "pointer" }}>
                        <Image w="100%" h="100%" objectFit="cover" src={ig} />
                    </Box>
                </a>
            </HStack>
        </VStack>
    );
}
