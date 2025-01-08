import { ActiveFilters } from "./ActiveFilters/ActiveFilters";
import { Search } from "./Search";

export const Header = () => (
  <div className="Header" style={{ display: "flex", padding: "1em" }}>
    <ActiveFilters filter="business" />
    <Search />
  </div>
);
