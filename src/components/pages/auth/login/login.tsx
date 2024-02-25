import { FC } from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { Form, Input } from "../../../atoms";
import { Link } from "react-router-dom";

export type LoginProps = object;

export const Login: FC<LoginProps> = () => {
  return (
    <Flex
      h='100vh'
      w='100vw'
      alignItems='center'
      justifyContent='center'
      bg='#fff'>
      <Flex
        minW='350px'
        maxW='25vw'
        flexDirection='column'
        bg='white'
        p='24px'
        borderRadius='16px'
        gap='24px'
        borderWidth='1px'>
        <Heading as='h3' textAlign='center'>
          LOG IN
        </Heading>
        <Form
          gap='20px'
          initialValues={{ email: "", password: "" }}
          onSubmit={(v) => console.log(v)}>
          <Input isRequired label='Email' fieldKey='email' type='email' />
          <Input
            isRequired
            label='Password'
            fieldKey='password'
            type='password'
          />
          <Button colorScheme='blue' type='submit'>
            Log In
          </Button>
        </Form>
        <Flex justifyContent='end' alignItems='center'>
          <Heading as='h6' size='xs'>
            New here? &nbsp;
            <Link style={{ color: "#09f" }} to='/auth/sign-up'>
              Sign Up &rArr;
            </Link>
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
