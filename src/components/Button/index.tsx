import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonStyled } from "./StyledButton";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  width?: string;
  heigth?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  width = "100%",
  heigth = "52px",
  ...rest
}) => {
  return (
    <ButtonStyled width={width} heigth={heigth} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
