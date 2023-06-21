import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledContainer = styled.div`
  background-color: #f5f5fa;
  border-radius: 50px;
  display: flex;
  gap: 13px;
  align-items: center;
  padding: 10px 15px;
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  font-size: 16px;
`;

export const StyledFAIcon = styled(FontAwesomeIcon)`
  font-size: 14px;
  color: #5a71e4;
`;
