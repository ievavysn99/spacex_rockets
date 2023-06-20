import { IRocket } from '../../../shared/api/types';

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
