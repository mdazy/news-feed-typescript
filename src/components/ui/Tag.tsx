import { FaRegTimesCircle } from 'react-icons/fa';

export const Tag = ({ name, onClick, showIcon }: { name: string, onClick: () => void, showIcon?: boolean }) => (
  <span
    style={{ marginRight: "1em", cursor: 'pointer', border: "solid 1px #bbb", borderRadius: 8, padding: "4px", background: "#ddd"}}
    onClick={onClick}
  >
    {name}
    { showIcon && <FaRegTimesCircle/> }
  </span>
);
