// // // import Title from '../../atoms/Title';
// // // import ResultCounter from '../../atoms/ResultCounter';
// // // import SearchInput from '../../atoms/SearchInput';

// // // const TitleSearchBar = () => {
// // //   return (
// // //     <div>
// // //       <Title></Title>
// // //       <ResultCounter></ResultCounter>
// // //       <SearchInput></SearchInput>
// // //     </div>
// // //   );
// // // };

// // // export default TitleSearchBar;

// // import { useEffect, useState } from 'react';
// // import { IRocket } from '../../../shared/api/types';
// // import { API } from '../../../shared/api';
// // import SearchInput from '../../atoms/SearchInput';
// // import ResultCounter from '../../atoms/ResultCounter';
// // import Title from '../../atoms/Title';

// // const TitleSearchBar = () => {
// //   const [rockets, setRockets] = useState<IRocket[]>([]);
// //   const [searchTerm, setSearchTerm] = useState('');

// //   useEffect(() => {
// //     const fetchRockets = async () => {
// //       try {
// //         const rocketsData: IRocket[] = await API.getRockets();
// //         setRockets(rocketsData);
// //       } catch (error) {
// //         console.error('Error fetching rockets:', error);
// //       }
// //     };

// //     fetchRockets();
// //   }, []);

// //   const filteredRockets = rockets.filter((rocket) =>
// //     rocket.rocket_name.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   const handleSearchInputChange = (
// //     event: React.ChangeEvent<HTMLInputElement>
// //   ) => {
// //     setSearchTerm(event.target.value);
// //   };

// //   return (
// //     <div>
// //       <Title></Title>
// //       <SearchInput
// //         searchTerm={searchTerm}
// //         onSearchInputChange={handleSearchInputChange}
// //       />
// //       <ResultCounter />
// //     </div>
// //   );
// // };

// // export default TitleSearchBar;

// import { useState } from 'react';
// import SearchInput from '../../atoms/SearchInput';
// import ResultCounter from '../../atoms/ResultCounter';
// import Title from '../../atoms/Title';
// import { IRocket } from '../../../shared/api/types';

// interface TitleSearchBarProps {
//   rockets: IRocket[];
// }

// const TitleSearchBar = ({ rockets }: TitleSearchBarProps) => {
//   const [_filteredRockets, setFilteredRockets] = useState<IRocket[]>(rockets);

//   const handleFilteredRocketsChange = (filteredRockets: IRocket[]) => {
//     setFilteredRockets(filteredRockets);
//   };

//   return (
//     <div>
//       <Title></Title>
//       {/* <SearchInput onFilteredRocketsChange={handleFilteredRocketsChange} /> */}
//       <SearchInput></SearchInput>
//       <ResultCounter></ResultCounter>
//     </div>
//   );
// };

// export default TitleSearchBar;

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
