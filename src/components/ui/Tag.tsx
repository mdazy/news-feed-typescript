import { FaRegTimesCircle } from 'react-icons/fa';

export const Tag = ({ name, onClick, showIcon }: { name: string, onClick: () => void, showIcon?: boolean }) => (
  <span style={{ marginRight: "1em", cursor: 'pointer' }} onClick={onClick}>
    {name}
    { showIcon && <FaRegTimesCircle/> }
  </span>
);
