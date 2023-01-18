import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

export const Input = styled.input`
  width: calc(100% - 24px);
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  border: 1px solid #333333;

  &:focus {
    border: 1px solid #0ea5e9;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;
