import styled, { css } from "styled-components";

interface ContainerProps {
  width: string;
}

interface LabelProps {
  required?: boolean;
}

interface InputContainerProps {
  error?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width};
`;

export const Label = styled.label<LabelProps>`
  font-size: 16px;
  color: #222529;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-transform: capitalize;

  ${(props) =>
    props.required &&
    css`
      &::after {
        content: "*";
        color: red;
      }
    `}
`;

export const InputContainer = styled.div<InputContainerProps>`
  border: ${(props) =>
    props.error ? "1px solid #DD0404" : "1px solid #dedede"};
  border-radius: 6px;
  display: flex;
  background-color: #fdfdfd;
  align-items: center;
  margin-top: 8px;
  font-family: "Inter", sans-serif;

  input {
    height: 40px;
    width: 100%;
    border: 0;
    border-radius: 6px;
    outline: 0;
    padding: 0 16px;
    font-size: 16px;
  }

  ::placeholder {
    color: #656a6e;
  }
`;

export const MessageError = styled.span`
  color: #dd0404;
  font-size: 14px;
  margin-top: 8px;
  display: block;
  font-family: "Roboto", sans-serif;
`;
