import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
    return (
        <>
            <Header />
            <Box px="450px" py="15px">
                <Outlet />
            </Box>
        </>
    );
}
