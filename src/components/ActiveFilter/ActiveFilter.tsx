import { Tag } from "../ui/Tag";

export const ActiveFilter = ({ filter }: { filter: string }) => {
  if (!filter) {
    return null;
  }

  return (
    <div>
      Currently filtering by:&nbsp;
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
