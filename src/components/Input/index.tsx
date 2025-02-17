import { Container, Label, InputContainer, MessageError } from "./StyledInput";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name?: string;
  label?: string;
  message?: string;
  width?: string;
  error?: boolean;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  message,
  width = "100%",
  error = false,
  required = false,
  ...rest
}) => {
  return (
    <Container width={width}>
      <Label required={required}>{label}</Label>
      <InputContainer error={error}>
        <input {...rest} />
      </InputContainer>
      <MessageError>{message}</MessageError>
    </Container>
  );
};

export default Input;
