import styled from "styled-components";
import { Link } from "react-router";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
`;

export const RightSide = styled.section`
  width: 50%;
  display: inherit;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const LeftSide = styled.section`
  width: 50%;
  display: inherit;
  align-items: center;
  justify-content: center;
  background-color: #f3fff2;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const ContentRight = styled.div`
  display: inherit;
  flex-direction: column;
`;

export const Redirect = styled.span`
  font-family: "Archivo", sans-serif;
  display: inherit;
  align-items: baseline;
  justify-content: center;
  margin-top: 20px;
  gap: 4px;
`;

export const Title = styled.h1`
  font-family: "Archivo", sans-serif;
  font-size: 32px;
  color: #1a202c;
  font-weight: 600;
`;

export const Subtitle = styled.text`
  font-family: "Archivo", sans-serif;
  font-size: 20px;
  color: #1a202c;
  font-weight: 500;
`;

export const BannerImage = styled.img``;

export const Titles = styled.div`
  display: inherit;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
`;

export const Form = styled.form`
  display: inherit;
  flex-direction: column;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  color: #1e9e6a;
`;
