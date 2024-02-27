import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { baseRouter } from "./router";

export const App = () => {
  return (
    <ChakraProvider>
      <RouterProvider router={baseRouter} />
    </ChakraProvider>
  );
};

export default App;
