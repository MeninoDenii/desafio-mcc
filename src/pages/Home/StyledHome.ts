import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const Table = styled.table`
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

export const Mobile = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const Card = styled.div`
  width: 340px;
  border: 1px solid #dedede;
  border-radius: 16px;
  display: flex;
  font-family: "Archivo", sans-serif;
  flex-direction: column;
`;

export const HeaderCard = styled.header`
  padding: 16px 24px;
  border-bottom: 1px solid #dedede;
`;

export const TitleCard = styled.h1`
  font-size: 16px;
`;

export const ContentCard = styled.div`
  padding: 16px 24px;
`;

export const InfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InfoTitle = styled.span`
  font-size: 16px;
  color: #656a6e;
`;
export const InfoValue = styled.span`
  color: #222529;
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

const rotation = keyframes`
  0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const LoadingMobile = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #cccccc;
  border-bottom-color: #1e9e6a;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;

export const LoadingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;
