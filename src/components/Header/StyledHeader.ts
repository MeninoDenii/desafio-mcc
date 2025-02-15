import styled, { keyframes } from "styled-components";

export const Container = styled.header`
  height: 80px;
  background-color: #1e9e6a;
  display: flex;
  align-items: center;
  font-family: "Archivo", sans-serif;
  padding: 0 60px;
  justify-content: space-between;

  @media (max-width: 480px) {
    padding: 0;
  }
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

export const TypingSpan = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1.2em;
  animation: ${typing} 2s steps(30, end), ${blink} 0.8s step-end;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const Logout = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: white;

  @media (max-width: 480px) {
    padding-right: 20px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;

  @media (max-width: 480px) {
    padding-left: 20px;
  }
`;
