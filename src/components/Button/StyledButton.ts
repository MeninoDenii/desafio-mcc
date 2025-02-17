import styled from "styled-components";

interface ButtonStyledProps {
  width?: string;
  heigth?: string;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  background-color: #1e9e6a;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.heigth || "52px"};
  color: #fff;
  border: 0;
  font-weight: 600;
  font-size: 16px;
  border-radius: 4px;
  font-family: "Archivo", sans-serif;
  cursor: pointer;
  transition: all 0.3s;

  &:disabled {
    background-color: #a0a0a0;
    cursor: not-allowed;
  }

  &:not(:disabled) {
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
