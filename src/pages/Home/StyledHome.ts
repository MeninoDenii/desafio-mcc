import styled from "styled-components";

export const Container = styled.div`
  padding: 0 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  background: #282c34;
  color: white;
  padding: 10px;
  text-align: left;
  border: 1px solid #444;
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
