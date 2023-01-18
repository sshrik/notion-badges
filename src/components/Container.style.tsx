import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BadgeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const FormContainer = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  background-color: #0ea5e9;
  color: #ffffff;
`;

export const TextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: #333333;
`;
