import { useEffect, useState } from 'react';
import { IRocket } from '../../../shared/api/types';
import { API } from '../../../shared/api';

const SearchInput = () => {
  const [rockets, setRockets] = useState<IRocket[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRockets = async () => {
      try {
        const rocketsData: IRocket[] = await API.getRockets();
        setRockets(rocketsData);
      } catch (error) {
        console.error('Error fetching rockets:', error);
      }
    };

    fetchRockets();
  }, []);

  const filteredRockets = rockets.filter((rocket) =>
    rocket.rocket_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Search rockets'
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      {filteredRockets.map((rocket) => (
        <tr key={rocket.id}>
          <td>{rocket.rocket_name}</td>
          <td>{rocket.diameter.meters} m</td>
          <td>{rocket.height.meters} m</td>
          <td>{rocket.mass.kg} kg</td>
          <td>${rocket.cost_per_launch}</td>
        </tr>
      ))}
    </div>
  );
};

export default SearchInput;

// interface ISearchInputProps {
//   searchTerm: string;
//   onSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const SearchInput = ({
//   searchTerm,
//   onSearchInputChange,
// }: ISearchInputProps) => {
//   return (
//     <div>
//       <input
//         type='text'
//         placeholder='Search rockets'
//         value={searchTerm}
//         onChange={onSearchInputChange}
//       />
//     </div>
//   );
// };

// export default SearchInput;
