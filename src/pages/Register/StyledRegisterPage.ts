import styled from "styled-components";
import { Link } from "react-router";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    position: static;
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 800px;
  border: 1px solid #dedede;
  border-radius: 16px;
  display: inherit;
  flex-direction: column;
  background-color: #fdfdfd;

  @media (max-width: 480px) {
    width: 400px;
  }
`;

export const Title = styled.h1`
  font-family: "Archivo", sans-serif;
  font-size: 32px;
  color: #1a202c;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid #dedede;
  padding: 16px;

  @media (max-width: 480px) {
    padding: 24px;
    font-size: 24px;
    text-align: start;
  }
`;

export const Form = styled.form`
  display: inherit;
  flex-direction: column;
  gap: 16px;
  padding: 32px;

  @media (max-width: 480px) {
    padding: 24px;
  }
`;

export const StyledLink = styled(Link)`
  color: #1e9e6a;
  font-family: "Archivo", sans-serif;
  display: flex;
  justify-content: flex-end;
`;

export const Footer = styled.footer`
  border-top: 1px solid #dedede;
  padding: 32px;

  @media (max-width: 480px) {
    padding: 24px;
  }
`;
