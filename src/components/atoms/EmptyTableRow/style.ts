import { styled } from 'styled-components';

export const StyledRow = styled.div`
  background-color: #fff;
  border-bottom: 3px solid #f5f5f6;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  color: #676c7e;
  font-size: 14px;
  font-weight: 400px;

  div {
    padding: 18px;
    text-align: left;
  }
`;
