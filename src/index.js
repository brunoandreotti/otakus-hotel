import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "./styles/Theme";

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={ theme }>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
);

