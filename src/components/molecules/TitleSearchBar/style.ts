import { styled } from 'styled-components';

export const StyledContainer = styled.section`
  background-color: #ffffff;
  position: relative;
  margin-bottom: 52px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
  padding: 15px;
  border-radius: 8px;
  align-items: center;

  @media (min-width: 724px) {
    padding: 13px 17px 10px 24px;
    grid-template-columns: 2fr 0.8fr 7.2fr;
  }
`;
