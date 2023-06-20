// import { IRocket } from '../../../shared/api/types';

// interface TableRowProps {
//   rockets: IRocket[];
// }

// const TableRow = ({ rockets }: TableRowProps) => {
//   return (
//     //   {filteredRockets.map((rocket: IRocket) => (
//     // <tr key={rocket.id}>
//     //   <td>{rocket.rocket_name}</td>
//     //   <td>{rocket.diameter.meters} m</td>
//     //   <td>{rocket.height.meters} m</td>
//     //   <td>{rocket.mass.kg} kg</td>
//     //   <td>${rocket.cost_per_launch}</td>
//     // </tr>
//     // ))}
//     <>Trali vali</>
//   );
// };

// export default TableRow;

// import { useState, useEffect } from 'react';
// import { API } from '../../../shared/api';
// import { IRocket } from '../../../shared/api/types';

// interface TableRowProps {
//   rockets: IRocket[];
// }

// const TableRow = ({ rockets }: TableRowProps) => {
//   return (
//     <tbody>
//       {rockets.map((rocket) => (
//         <tr key={rocket.id}>
//           <td>{rocket.rocket_name}</td>
//           <td>{rocket.diameter.meters} m</td>
//           <td>{rocket.height.meters} m</td>
//           <td>{rocket.mass.kg} kg</td>
//           <td>${rocket.cost_per_launch}</td>
//         </tr>
//       ))}
//     </tbody>
//   );
// };

// export default TableRow;

// import { useState, useEffect } from 'react';
// import { API } from '../../../shared/api';
// import { IRocket } from '../../../shared/api/types';
// // import SearchInput from '../SearchInput';

// interface TableRowProps {
//   rocket: IRocket;
// }

// const TableRow = ({ rocket }: TableRowProps) => {
//   const [fetchedRockets, setFetchedRockets] = useState<IRocket[]>([]);

//   //fetch the rockets
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

//   return (
//     <tbody>
//       <tr key={rocket.id}>
//         <td>{rocket.rocket_name}</td>
//         <td>{rocket.diameter.meters} m</td>
//         <td>{rocket.height.meters} m</td>
//         <td>{rocket.mass.kg} kg</td>
//         <td>${rocket.cost_per_launch}</td>
//       </tr>
//     </tbody>
//   );
// };

// export default TableRow;

// const TableRow = ({ rocket }: TableRowProps) => {
//   const [fetchedRockets, setFetchedRockets] = useState<IRocket[]>([]);

//   //fetch the rockets
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

//   return (
//   <tbody> (rocket: IRocket) => (
//     <tr key={rocket.id}>
//       <td>{rocket.rocket_name}</td>
//       <td>{rocket.diameter.meters} m</td>
//       <td>{rocket.height.meters} m</td>
//       <td>{rocket.mass.kg} kg</td>
//       <td>${rocket.cost_per_launch}</td>
//     </tr>

//   );
//   </tbody>)
// };

// export default TableRow;

// interface TableRowProps {
//   rocket: IRocket[];
// }

// const TableRow = ({ rocket }: TableRowProps) => {
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

//   return (
//     <tbody>
//       {fetchedRockets.map((fetchedRocket) => (
//         <tr key={fetchedRocket.id}>
//           <td>{fetchedRocket.rocket_name}</td>
//           <td>{fetchedRocket.diameter.meters} m</td>
//           <td>{fetchedRocket.height.meters} m</td>
//           <td>{fetchedRocket.mass.kg} kg</td>
//           <td>${fetchedRocket.cost_per_launch}</td>
//         </tr>
//       ))}
//     </tbody>
//   );
// };

// export default TableRow;

// atoms/TableRow.js

// const TableRow = ({ rocket }: any) => {
//   return (
//     <tr>
//       <td>{rocket.rocket_name}</td>
//       <td>{rocket.diameter.meters} m</td>
//       <td>{rocket.height.meters} m</td>
//       <td>{rocket.mass.kg} kg</td>
//       <td>${rocket.cost_per_launch}</td>
//     </tr>
//   );
// };

// export default TableRow;

import { IRocket } from '../../../shared/api/types';

// interface TableRowProps {
//   rocket: IRocket[];
// }

interface TableRowProps {
  rocket: IRocket;
}

const TableRow: React.FC<TableRowProps> = ({ rocket }) => {
  if (!rocket) {
    return (
      <tr>
        <td colSpan={5}>No rocket data available</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{rocket.rocket_name}</td>
      <td>{rocket.diameter.meters} m</td>
      <td>{rocket.height.meters} m</td>
      <td>{rocket.mass.kg} kg</td>
      <td>${rocket.cost_per_launch}</td>
    </tr>
  );
};

export default TableRow;

// import { useState, useEffect } from 'react';
// import { API } from '../../../shared/api';
// import { IRocket } from '../../../shared/api/types';

// interface TableRowProps {
//   rocket: IRocket;
// }

// const TableRow = ({ rocket }: TableRowProps) => {
//   const [fetchedRockets, setFetchedRockets] = useState<IRocket[]>([]);

//   // Fetch the rockets on component mount
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

//   // Render the table row
//   return (
//     <tbody>
//       {fetchedRockets.map((fetchedRocket) => (
//         <tr key={fetchedRocket.id}>
//           <td>{fetchedRocket.rocket_name}</td>
//           <td>{fetchedRocket.diameter.meters} m</td>
//           <td>{fetchedRocket.height.meters} m</td>
//           <td>{fetchedRocket.mass.kg} kg</td>
//           <td>${fetchedRocket.cost_per_launch}</td>
//         </tr>
//       ))}
//     </tbody>
//   );
// };

// export default TableRow;
