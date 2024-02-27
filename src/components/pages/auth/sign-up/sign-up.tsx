import { FC } from "react";
import { Form, Input } from "../../..";
import { Button, Flex, Heading, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { signUp } from "../../../../service/user/user";

export type SignUpProps = object;

const initialSignUpValues = { email: "", password: "" };

export const SignUp: FC<SignUpProps> = () => {
  const toast = useToast();

  const onSignUp = async ({ email, password }: typeof initialSignUpValues) => {
    const err = await signUp(email, password);

    if (err) {
      toast({
        position: "top-right",
        title: "Error occured",
        description: err.response.message,
        status: "error",
        isClosable: true,
      });
    }
  };

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
          SIGN UP
        </Heading>
        <Form
          initialValues={initialSignUpValues}
          gap='20px'
          onSubmit={onSignUp}>
          <Input label='Email' fieldKey='email' type='email' />
          <Input label='Password' fieldKey='password' type='password' />
          <Button type='submit' colorScheme='green'>
            Sign Up
          </Button>
        </Form>
        <Flex justifyContent='end' alignItems='center'>
          <Heading as='h6' size='xs'>
            Existing user? &nbsp;
            <Link style={{ color: "#09f" }} to='../../'>
              Log In &rArr;
            </Link>
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignUp;
