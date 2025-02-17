import styled, { keyframes } from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-family: "Archivo", sans-serif;
  overflow-x: hidden;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const Th = styled.th`
  background: #1e9e6a;
  color: white;
  padding: 10px;
  text-align: left;
  border: 1px solid #dedede;
`;

export const Td = styled.td`
  padding: 16px;
  border: 1px solid #ccc;
  text-align: left;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background: #f2f2f2;
  }
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

export const Skeleton = styled.div`
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  background-size: 400% 100%;
  animation: ${shimmer} 1.5s infinite;
  height: 16px;
  border-radius: 4px;
`;
