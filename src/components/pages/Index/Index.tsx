import { useEffect, useState } from 'react';
import TitleSearchBar from '../../molecules/TitleSearchBar';
import Table from '../../molecules/Table';
import { API } from '../../../shared/api';
import { IRocket } from '../../../shared/api/types';
import { StyledBody, StyledSection } from './style';

const Index = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredRockets, setFilteredRockets] = useState<IRocket[]>([]);
  const [fetchedRockets, setFetchedRockets] = useState<IRocket[]>([]);

  useEffect(() => {
    const fetchRockets = async () => {
      try {
        const rocketsData: IRocket[] = await API.getRockets();
        setFetchedRockets(rocketsData);
        setFilteredRockets(rocketsData);
      } catch (error) {
        console.error('Error fetching rockets:', error);
      }
    };

    fetchRockets();
  }, []);

  const handleSearchChange = (value: string) => {
    if (typeof value === 'string') {
      setSearchValue(value);

      console.log(value);
      // Filter the rockets based on the search value
      const filteredData = fetchedRockets.filter((rocket) =>
        rocket.rocket_name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredRockets(filteredData);
    }
  };

  return (
    <StyledBody>
      <StyledSection>
        <TitleSearchBar
          count={filteredRockets.length}
          searchValue={searchValue}
          onSearchChange={handleSearchChange}
        />
        <Table rockets={filteredRockets} />
      </StyledSection>
    </StyledBody>
  );
};

export default Index;
