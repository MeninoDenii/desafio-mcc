import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonStyled } from "./StyledButton";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  width = "100%",
  ...rest
}) => {
  return (
    <ButtonStyled width={width} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
