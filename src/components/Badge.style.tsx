import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.div`
  padding: 4px 8px;
  border-radius: 8px 0px 0px 8px;
  font-size: 16px;
  border: 1px solid #333333;
  border-right: none;
  color: #ffffff;
  background-color: #0ea5e9;
`;

export const Value = styled.div`
  padding: 4px 8px;
  border-radius: 0px 8px 8px 0px;
  font-size: 16px;
  border: 1px solid #333333;
  color: #333333
  background-color: #ffffff;
`;
