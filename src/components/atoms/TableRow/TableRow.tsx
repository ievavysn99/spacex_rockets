import { IRocket } from '../../../shared/api/types';
import { StyledRow } from './style';

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
    <StyledRow>
      <div>{rocket.rocket_name}</div>
      <div>{rocket.diameter.meters} m</div>
      <div>{rocket.height.meters} m</div>
      <div>{rocket.mass.kg} kg</div>
      <div>${rocket.cost_per_launch}</div>
    </StyledRow>
  );
};

export default TableRow;
