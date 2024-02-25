import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Login, SignUp } from "./components";

function App() {
  return (
    <ChakraProvider>
      {/* <Login /> */}
      <>
        <Login />
        <SignUp />
      </>
    </ChakraProvider>
  );
}

export default App;
