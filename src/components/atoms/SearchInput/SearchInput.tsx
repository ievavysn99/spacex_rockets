// // import { useEffect, useState } from 'react';
// // import { IRocket } from '../../../shared/api/types';
// // import { API } from '../../../shared/api';

// // const SearchInput = () => {
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
// //       <input
// //         type='text'
// //         placeholder='Search rockets'
// //         value={searchTerm}
// //         onChange={handleSearchInputChange}
// //       />
// //       {filteredRockets.map((rocket) => (
// //         <tr key={rocket.id}>
// //           <td>{rocket.rocket_name}</td>
// //           <td>{rocket.diameter.meters} m</td>
// //           <td>{rocket.height.meters} m</td>
// //           <td>{rocket.mass.kg} kg</td>
// //           <td>${rocket.cost_per_launch}</td>
// //         </tr>
// //       ))}
// //     </div>
// //   );
// // };

// // export default SearchInput;

// import { useEffect, useState } from 'react';
// import { IRocket } from '../../../shared/api/types';
// import { API } from '../../../shared/api';

// interface SearchInputProps {
//   onFilteredRocketsChange: (rockets: IRocket[]) => void;
// }

// const SearchInput = ({ onFilteredRocketsChange }: SearchInputProps) => {
//   const [rockets, setRockets] = useState<IRocket[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchRockets = async () => {
//       try {
//         const rocketsData: IRocket[] = await API.getRockets();
//         setRockets(rocketsData);
//       } catch (error) {
//         console.error('Error fetching rockets:', error);
//       }
//     };

//     fetchRockets();
//   }, []);

//   const filteredRockets = rockets.filter((rocket) =>
//     rocket.rocket_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleSearchInputChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setSearchTerm(event.target.value);
//   };

//   useEffect(() => {
//     onFilteredRocketsChange(filteredRockets);
//   }, [filteredRockets, onFilteredRocketsChange]);

//   return (
//     <div>
//       <input
//         type='text'
//         placeholder='Search rockets'
//         value={searchTerm}
//         onChange={handleSearchInputChange}
//       />
//     </div>
//   );
// };

// export default SearchInput;

// useEffect(() => {
//   const fetchRockets = async () => {
//     try {
//       const rocketsData: IRocket[] = await API.getRockets();
//       setRockets(rocketsData);
//     } catch (error) {
//       console.error('Error fetching rockets:', error);
//     }
//   };

//   fetchRockets();
// }, []);

// useEffect(() => {
//   const filteredRockets = rockets.filter((rocket) =>
//     rocket.rocket_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   onFilteredRocketsChange(filteredRockets);
// }, [searchTerm, rockets, onFilteredRocketsChange]);

// useEffect(() => {
//   const filteredRockets = rockets.filter((rocket) =>
//     rocket.rocket_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   onFilteredRocketsChange(filteredRockets);
// }, [searchTerm, onFilteredRocketsChange]);

//import { API } from '../../../shared/api';

// import { useState } from 'react';

// const SearchInput = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearchInputChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         type='text'
//         placeholder='Search rockets'
//         value={searchTerm}
//         onChange={handleSearchInputChange}
//       />
//     </div>
//   );
// };

// export default SearchInput;

// import { useState } from 'react';

// const SearchInput = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearchInputChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const value = event.target.value;
//     setSearchTerm(value);
//     console.log(value); // Log the input value to the console
//   };

//   return (
//     <div>
//       <input
//         type='text'
//         placeholder='Search rockets'
//         value={searchTerm}
//         onChange={handleSearchInputChange}
//       />
//     </div>
//   );
// };

// export default SearchInput;

// atoms/SearchInput.js

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
