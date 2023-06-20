const SearchInput = ({ onChange }: any) => {
  const handleInputChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <div>
      <input type='text' placeholder='Search' onChange={handleInputChange} />
    </div>
  );
};

export default SearchInput;
