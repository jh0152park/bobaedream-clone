import {
    Box,
    Button,
    Center,
    FormControl,
    HStack,
    Heading,
    Image,
    Input,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CreateAccount } from "../utils/accounts/CreateAccount";
import { SignInAccount } from "../utils/accounts/SignInAccount";
import { useSetRecoilState } from "recoil";
import { IsUserLogin } from "../ProjectCommon";

export default function SignIn() {
    const image =
        "https://images.unsplash.com/photo-1650741064255-69aec2144873?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const [signup, setSignup] = useState(false);
    const setIsUserLogin = useSetRecoilState(IsUserLogin);

    async function onSubmit(data: FieldValues) {
        console.log(data);
        if (!data.id) {
            alert("아이디를 입력해 주세요");
            return;
        }
        if (!data.pw) {
            alert("비밀번호를 입력해 주세요");
            return;
        }

        if (signup) {
            if (await CreateAccount(data.id, data.pw, data.name)) {
                navigate("/");
            }
        } else {
            if (await SignInAccount(data.id, data.pw)) {
                setIsUserLogin(true);
                navigate("/");
            }
        }
    }

    function toggleSignup() {
        setSignup((prev) => !prev);
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
                                {signup && (
                                    <Input
                                        id="username_input"
                                        placeholder="닉네임"
                                        type="text"
                                        borderRadius="none"
                                        borderTop="none"
                                        bgColor="white"
                                        {...register("name", {
                                            required: true,
                                        })}
                                    />
                                )}
                            </FormControl>
                            <Center
                                bgColor="#0A5AAF"
                                color="white"
                                w="100%"
                                minH="40px"
                                maxH="40px"
                                borderRadius="none"
                                mt={signup ? "0px" : "40px"}
                                as="button"
                                fontWeight="bold"
                            >
                                로그인
                            </Center>
                            <Box
                                _hover={{
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                }}
                                onClick={toggleSignup}
                            >
                                <Text fontSize="11px">
                                    회원가입 / 로그인하기
                                </Text>
                            </Box>
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
