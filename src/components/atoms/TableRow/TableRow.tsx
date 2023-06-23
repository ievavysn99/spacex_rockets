import { IRocket } from '../../../shared/api/types';
import { StyledRow } from './style';

interface ITableRow {
  rocket: IRocket;
}

const TableRow = ({ rocket }: ITableRow) => {
  const formattedCost = rocket.cost_per_launch.toLocaleString();

  return (
    <StyledRow>
      <div>{rocket.rocket_name}</div>
      <div>{rocket.diameter.meters}m</div>
      <div>{rocket.height.meters}m</div>
      <div>{rocket.mass.kg}kg</div>
      <div>${formattedCost}</div>
    </StyledRow>
  );
};

export default TableRow;
