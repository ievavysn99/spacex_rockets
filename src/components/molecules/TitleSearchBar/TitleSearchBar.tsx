import ResultCounter from '../../atoms/ResultCounter';
import SearchInput from '../../atoms/SearchInput';
import Title from '../../atoms/Title';
import { StyledContainer } from './style';

const TitleSearchBar = ({ count, onSearchChange }: any) => {
  return (
    <StyledContainer>
      <Title></Title>
      <ResultCounter count={count} />
      <SearchInput onChange={onSearchChange} />
    </StyledContainer>
  );
};

export default TitleSearchBar;
