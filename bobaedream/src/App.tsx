import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Notfound from "./screens/Notfound";
import Main from "./screens/Main";
import Layout from "./screens/Loyout";

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
        ],
    },
]);

function App() {
    return <RouterProvider router={route}></RouterProvider>;
}

export default App;
