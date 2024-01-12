import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Notfound from "./screens/Notfound";
import Main from "./screens/Main";
import Layout from "./screens/Loyout";
import SignIn from "./screens/SignIn";
import Post from "./screens/Post";

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
