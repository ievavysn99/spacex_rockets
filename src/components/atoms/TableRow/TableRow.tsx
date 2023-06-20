import { IRocket } from '../../../shared/api/types';

interface TableRowProps {
  rockets: IRocket[];
}

const TableRow = ({ rockets }: TableRowProps) => {
  return (
    <>
      {rockets.map((rocket) => (
        <tr key={rocket.id}>
          <td>{rocket.rocket_name}</td>
          <td>{rocket.diameter.meters} m</td>
          <td>{rocket.height.meters} m</td>
          <td>{rocket.mass.kg} kg</td>
          <td>${rocket.cost_per_launch}</td>
        </tr>
      ))}
    </>
  );
};

export default TableRow;
