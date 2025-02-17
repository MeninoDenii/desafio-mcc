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

export const Mobile = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-height: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 10px;
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

export const ContainerPagination = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: block;
    width: 100%;
  }
`;
