import TableHeading from '../../atoms/TableHeading';
import TableRow from '../../atoms/TableRow';

const Table = () => {
  return (
    <div>
      <TableHeading></TableHeading>
      <TableRow rockets={[]}></TableRow>
    </div>
  );
};

export default Table;
