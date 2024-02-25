import { createBrowserRouter } from "react-router-dom";
import { Login, SignUp } from "../../components";

export const baseRouter = createBrowserRouter([
  { path: "/", Component: Login },
  { path: "/auth/sign-up", Component: SignUp },
]);
