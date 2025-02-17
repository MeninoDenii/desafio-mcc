import styled from "styled-components";
import { Link } from "react-router";

export const Container = styled.footer`
  height: 80px;
  background-color: #1e9e6a;
  display: flex;
  align-items: center;
  font-family: "Archivo", sans-serif;
  padding: 0 60px;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  bottom: 0;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  justify-content: flex-start;
`;

export const Title = styled(Link)`
  color: white;
  text-decoration: none;
`;
