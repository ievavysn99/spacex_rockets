import Title from '../../atoms/Title';
import ResultCounter from '../../atoms/ResultCounter';
import SearchInput from '../../atoms/SearchInput';

const TitleSearchBar = () => {
  return (
    <div>
      <Title></Title>
      <ResultCounter></ResultCounter>
      <SearchInput></SearchInput>
    </div>
  );
};

export default TitleSearchBar;
