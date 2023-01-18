import styled from 'styled-components';

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

export const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;

export const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
