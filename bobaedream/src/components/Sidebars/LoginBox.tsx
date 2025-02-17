import {
    Center,
    Checkbox,
    FormControl,
    HStack,
    Input,
    Text,
    VStack,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SignInAccount } from "../../utils/account/SignInAccount";
import { useSetRecoilState } from "recoil";
import { IsUserLogin } from "../../ProjectCommon";

export default function LoginBox() {
    const navigate = useNavigate();
    const setIsUserLogin = useSetRecoilState(IsUserLogin);
    const { register, watch, setValue, reset, handleSubmit } = useForm();

    async function onSubmit(data: FieldValues) {
        if (!data.id) {
            alert("아이디를 입력해 주세요");
            return;
        }
        if (!data.pw) {
            alert("비밀번호를 입력해 주세요");
            return;
        }
        if (await SignInAccount(data.id, data.pw)) {
            // window.location.replace("/");
            setIsUserLogin(true);
            reset();
        }
    }

    function onSlignInClick() {
        navigate("/signin");
    }

    return (
        <VStack
            w="100%"
            h="100px"
            alignItems="flex-start"
            spacing={1}
            p="10px"
            borderBottom="1px solid rgba(0, 0, 0, 0.3)"
        >
            <HStack spacing={1} alignItems="center">
                <Checkbox size="sm" colorScheme="blue" borderColor="black" />
                <Text fontSize="11px">로그인 상태 유지</Text>
            </HStack>

            <HStack
                spacing={0}
                bgColor="white"
                as="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <VStack w="120px">
                    <FormControl>
                        <Input
                            h="25px"
                            placeholder="이메일"
                            fontSize="12px"
                            id="sidebar_id_input"
                            type="email"
                            borderRadius="none"
                            _placeholder={{ fontSize: "10px" }}
                            border="none"
                            borderTop="1px solid black"
                            borderLeft="1px solid black"
                            borderRight="1px solid black"
                            {...register("id", { required: false })}
                        />
                        <Input
                            h="25px"
                            fontSize="12px"
                            id="sidebar_pw_input"
                            placeholder="비밀번호"
                            type="password"
                            borderRadius="none"
                            _placeholder={{ fontSize: "10px" }}
                            {...register("pw", { required: false })}
                        />
                    </FormControl>
                </VStack>
                <Center
                    w="70px"
                    h="50px"
                    border="1px solid black"
                    borderLeft="none"
                    as="button"
                >
                    <Text fontWeight="bold" fontSize="12px">
                        로그인
                    </Text>
                </Center>
            </HStack>

            <HStack color="rgba(0, 0, 0, 0.7)" fontSize="11px">
                <Text _hover={{ cursor: "pointer" }}>아이디/비밀번호찾기</Text>
                <Text> | </Text>
                <Text _hover={{ cursor: "pointer" }} onClick={onSlignInClick}>
                    회원가입
                </Text>
            </HStack>
        </VStack>
    );
}
