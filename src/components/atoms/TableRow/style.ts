import { styled } from 'styled-components';

export const StyledRow = styled.div`
  background-color: #fff;
  border-bottom: 3px solid #e5e5e5;
  border-radius: 20px;
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
