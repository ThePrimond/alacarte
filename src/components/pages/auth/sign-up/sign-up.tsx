import { FC } from "react";
import { Form, Input } from "../../..";
import { Button } from "@chakra-ui/react";

export type SignUpProps = object;

export const SignUp: FC<SignUpProps> = () => {
  return (
    <Form
      initialValues={{ email: "", password: "" }}
      onSubmit={(v) => console.log(v)}>
      <Input label='Email' fieldKey='email' type='email' />
      <Input label='Password' fieldKey='password' type='password' />
      <Button type='submit'>Sign Up</Button>
    </Form>
  );
};

export default SignUp;
