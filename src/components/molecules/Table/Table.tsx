import { IRocket } from '../../../shared/api/types';
import TableHeading from '../../atoms/TableHeading';
import TableRow from '../../atoms/TableRow';

interface TableProps {
  rockets: IRocket[]; // Rename the prop to 'rockets' instead of 'rocket'
}

const Table = ({ rockets }: TableProps) => {
  return (
    <table>
      <TableHeading />
      <tbody>
        {rockets.map((rocket) => (
          <TableRow rocket={rocket} key={rocket.rocket_id} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
