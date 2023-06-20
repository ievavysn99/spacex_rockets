import { IRocket } from '../../../shared/api/types';
import TableHeading from '../../atoms/TableHeading';
import TableRow from '../../atoms/TableRow';
import { StyledTable } from './style';

interface TableProps {
  rockets: IRocket[]; // Rename the prop to 'rockets' instead of 'rocket'
}

const Table = ({ rockets }: TableProps) => {
  return (
    <StyledTable>
      <TableHeading />
      <tbody>
        {rockets.map((rocket) => (
          <TableRow rocket={rocket} key={rocket.rocket_id} />
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
