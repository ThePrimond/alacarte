import { FC } from "react";
import { Button } from "@chakra-ui/react";
import { Form, Input } from "../../../atoms";

export type LoginProps = object;

export const Login: FC<LoginProps> = () => {
  return (
    <Form
      initialValues={{ email: "", password: "" }}
      onSubmit={(v) => console.log(v)}>
      <Input label='Email' fieldKey='email' type='email' />
      <Input label='Password' fieldKey='password' type='password' />
      <Button type='submit'>Log In</Button>
    </Form>
  );
};

export default Login;
