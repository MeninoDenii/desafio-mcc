import styled from "styled-components";

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
