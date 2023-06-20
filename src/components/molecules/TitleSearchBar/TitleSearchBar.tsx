import ResultCounter from '../../atoms/ResultCounter';
import SearchInput from '../../atoms/SearchInput';
import Title from '../../atoms/Title';

const TitleSearchBar = ({ count, searchValue, onSearchChange }: any) => {
  return (
    <div>
      <Title></Title>
      <ResultCounter count={count} />
      <SearchInput onChange={onSearchChange} />
    </div>
  );
};

export default TitleSearchBar;
