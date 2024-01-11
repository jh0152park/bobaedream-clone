import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";
import { FirebaseApp } from "./Firebase";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: white;
    color: black;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
  }

  * {
    text-decoration: none;
    box-sizing: border-box;
  }
`;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <>
        <GlobalStyle />
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </>
);
