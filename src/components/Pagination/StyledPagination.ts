import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
  width: 100%;
`;

interface iPageButtonProps {
  active?: boolean;
}

export const PageButton = styled.button<iPageButtonProps>`
  border-radius: 6px;
  height: 40px;
  width: 100%;

  border: 1px solid #dedede;
  background-color: ${({ active }) => (active ? "#1e9e6a" : "#cccc")};
  color: ${({ active }) => (active ? "white" : "black")};
  cursor: pointer;
  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
