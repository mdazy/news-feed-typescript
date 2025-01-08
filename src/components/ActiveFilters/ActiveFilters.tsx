import { Tag } from "../ui/Tag";

export const ActiveFilters = ({ filter }: { filter: string }) => {
  if (!filter) {
    return null;
  }

  return (
    <div>
        <Tag
          name={filter}
          showIcon
          onClick={() => {
            console.log("clicked tag")
          }}
        />
    </div>
  );
};
