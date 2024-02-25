import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { Field } from "formik";
import { FC } from "react";

export type InputProps = {
  label: string;
  fieldKey: string;
  showLabel?: boolean;
} & ChakraInputProps;

export const Input: FC<InputProps> = ({
  label,
  fieldKey,
  showLabel = false,
  ...inputProps
}) => {
  return (
    <Field name={fieldKey}>
      {({ field, form }: any) => (
        <FormControl isInvalid={form.errors.email && form.touched.email}>
          {showLabel && <FormLabel htmlFor={fieldKey}>Email</FormLabel>}
          <ChakraInput
            {...field}
            placeholder={inputProps.placeholder || label}
            {...inputProps}
          />
          <FormErrorMessage>{form.errors.email}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default Input;
