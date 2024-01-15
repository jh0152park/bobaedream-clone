import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Notfound from "./screens/Notfound";
import Main from "./screens/Main";
import Layout from "./screens/Loyout";
import SignIn from "./screens/SignIn";
import Post from "./screens/Post";
import Detail from "./screens/Detail";

/**
 * 투두 리스트
 * 타임라인 포스트 그리기
 * 각 포스트 마다 고유 아이디로 갖고 오는거 확인하기
 */
const route = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Notfound />,
        children: [
            {
                path: "",
                element: <Main />,
            },
            {
                path: "post",
                element: <Post />,
            },
            {
                path: "detail",
                element: <Detail />,
            },
        ],
    },
    {
        path: "/signin",
        element: <SignIn />,
        errorElement: <Notfound />,
    },
]);

function App() {
    return <RouterProvider router={route}></RouterProvider>;
}

export default App;
