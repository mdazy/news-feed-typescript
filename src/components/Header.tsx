import { ActiveFilter } from "./ActiveFilter/ActiveFilter";
import { Search } from "./Search";

export const Header = () => (
  <div className="Header" style={{ display: "flex", padding: "1em" }}>
    <ActiveFilter filter="business" />
    <Search />
  </div>
);
