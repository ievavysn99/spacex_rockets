// import { SetStateAction, useEffect, useState } from 'react';
// import TitleSearchBar from '../../molecules/TitleSearchBar';
// import Table from '../../molecules/Table';
// import { API } from '../../../shared/api';
// import { IRocket } from '../../../shared/api/types';

// const Index = () => {
//   const [searchValue, setSearchValue] = useState('');
//   const [filteredRockets, setFilteredRockets] = useState([]);
//   const [fetchedRockets, setFetchedRockets] = useState<IRocket[]>([]);

//   useEffect(() => {
//     const fetchRockets = async () => {
//       try {
//         const rocketsData: IRocket[] = await API.getRockets();
//         setFetchedRockets(rocketsData);
//       } catch (error) {
//         console.error('Error fetching rockets:', error);
//       }
//     };

//     fetchRockets();
//   }, []);

//   const handleSearchChange = (value: SetStateAction<string>) => {
//     setSearchValue(value);

//     // Filter the rockets based on the search value
//     const filteredData = fetchedRockets.filter((rocket) =>
//       rocket.rocket_name.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredRockets(filteredData);
//   };

//   return (
//     <div>
//       <TitleSearchBar
//         count={filteredRockets.length}
//         searchValue={searchValue}
//         onSearchChange={handleSearchChange}
//       />
//       <Table rockets={filteredRockets} />
//     </div>
//   );
// };

// export default Index;
import { SetStateAction, useEffect, useState } from 'react';
import TitleSearchBar from '../../molecules/TitleSearchBar';
import Table from '../../molecules/Table';
import { API } from '../../../shared/api';
import { IRocket } from '../../../shared/api/types';

const Index = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredRockets, setFilteredRockets] = useState<IRocket[]>([]);
  const [fetchedRockets, setFetchedRockets] = useState<IRocket[]>([]);

  useEffect(() => {
    const fetchRockets = async () => {
      try {
        const rocketsData: IRocket[] = await API.getRockets();
        setFetchedRockets(rocketsData);
      } catch (error) {
        console.error('Error fetching rockets:', error);
      }
    };

    fetchRockets();
  }, []);

  const handleSearchChange = (value: SetStateAction<string>) => {
    //   if (typeof value === 'string') {
    //     setSearchValue(value);

    //     // Filter the rockets based on the search value
    //     const filteredData = fetchedRockets.filter((rocket) =>
    //       rocket.rocket_name.toLowerCase().includes(value.toLowerCase())
    //     );
    //     setFilteredRockets(filteredData);
    //   }
    // if (value === '') {
    //   setFilteredRockets(fetchedRockets);
    // } else
    if (typeof value === 'string') {
      if (value === null) {
        setFilteredRockets(fetchedRockets);
      } else {
        setSearchValue(value);

        // Filter the rockets based on the search value
        const filteredData = fetchedRockets.filter((rocket) =>
          rocket.rocket_name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredRockets(filteredData);
      }
    }
  };

  //   const handleSearchChange = (value: SetStateAction<string>) => {
  //     setSearchValue(value);

  //     // Check if the search bar is empty
  //     if (value === '') {
  //       setFilteredRockets(fetchedRockets);
  //     } else {
  //       // Filter the rockets based on the search value
  //       const filteredData = fetchedRockets.filter((rocket) =>
  //         rocket.rocket_name.toLowerCase().includes(value.toLowerCase())
  //       );
  //       setFilteredRockets(filteredData);
  //     }
  //   };

  //   const handleSearchChange = (value: SetStateAction<string>) => {
  //     //  const searchValue = typeof value === 'function' ? value() : value; // Extract the actual value

  //     //  setSearchValue(value);

  //     // Check if the search bar is empty
  //     if (value === '') {
  //       setFilteredRockets(fetchedRockets);
  //     } else {
  //       // Filter the rockets based on the search value
  //       const filteredData = fetchedRockets.filter((rocket) =>
  //         rocket.rocket_name.toLowerCase().includes(value.toLowerCase())
  //       );
  //       setFilteredRockets(filteredData);
  //     }
  //   };

  return (
    <div>
      <TitleSearchBar
        count={filteredRockets.length}
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
      />
      <Table rockets={filteredRockets} />
    </div>
  );
};

export default Index;
