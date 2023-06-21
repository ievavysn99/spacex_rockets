import { StyledResultCounter } from './style';

const ResultCounter = ({ count }: { count: number }) => {
  return (
    <StyledResultCounter>
      {count} {count === 1 ? 'Result' : 'Results'}
    </StyledResultCounter>
  );
};

export default ResultCounter;
