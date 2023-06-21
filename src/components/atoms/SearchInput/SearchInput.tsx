import { StyledContainer, StyledFAIcon, StyledInput } from './style';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchInput = ({ onChange }: any) => {
  const handleInputChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <StyledContainer>
      <StyledFAIcon icon={faMagnifyingGlass} />
      <StyledInput
        type='text'
        placeholder='Search'
        onChange={handleInputChange}
      />
    </StyledContainer>
  );
};

export default SearchInput;
