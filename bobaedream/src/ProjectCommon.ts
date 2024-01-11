import { atom } from "recoil";

export const IsUserLogin = atom<boolean>({
    default: false,
    key: "userStatus",
});
