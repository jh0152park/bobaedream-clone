import {
    Box,
    Button,
    Center,
    FormControl,
    HStack,
    Heading,
    Image,
    Input,
    VStack,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const image =
        "https://images.unsplash.com/photo-1650741064255-69aec2144873?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();

    function onSubmit(data: FieldValues) {
        console.log(data);
        if (!data.id) {
            alert("아이디를 입력해 주세요");
            return;
        }
        if (!data.pw) {
            alert("비밀번호를 입력해 주세요");
            return;
        }
    }

    return (
        <Center w="100%" h="100vh">
            <VStack w="630px" h="300px" alignItems="flex-start" mt="-500px">
                <Box
                    _hover={{ cursor: "pointer" }}
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <Heading color="#0A5AAF">보배드럼</Heading>
                </Box>
                <Center
                    p="30px"
                    border="1px solid rgba(0, 0, 0, 0.3)"
                    borderTop="15px solid #0A5AAF"
                    borderBottom="5px solid #0A5AAF"
                >
                    <HStack as="form" onSubmit={handleSubmit(onSubmit)}>
                        <VStack
                            w="315px"
                            h="215px"
                            border="1px solid rgba(0, 0, 0, 0.3)"
                            bgColor="#F5F5F5"
                            p="20px"
                        >
                            <FormControl>
                                <Input
                                    id="email_input"
                                    placeholder="이메일"
                                    type="email"
                                    borderRadius="none"
                                    bgColor="white"
                                    {...register("id")}
                                />
                                <Input
                                    id="password_input"
                                    placeholder="비밀번호"
                                    type="password"
                                    borderRadius="none"
                                    borderTop="none"
                                    bgColor="white"
                                    {...register("pw")}
                                />
                            </FormControl>
                            <Center
                                bgColor="#0A5AAF"
                                color="white"
                                w="100%"
                                h="100px"
                                borderRadius="none"
                                mt="50px"
                                as="button"
                                fontWeight="bold"
                            >
                                로그인
                            </Center>
                        </VStack>

                        <Box
                            w="245px"
                            h="215px"
                            border="1px solid rgba(0, 0, 0, 0.3)"
                        >
                            <Image
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                src={image}
                            />
                        </Box>
                    </HStack>
                </Center>
            </VStack>
        </Center>
    );
}
