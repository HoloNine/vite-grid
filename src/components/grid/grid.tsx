import { GridProvider } from "../contexts/grid-context";
import { Mesh } from "../mesh";

import "./grid.css";

const Grid = () => {
  return (
    <GridProvider>
      <div className="grid">
        <Mesh columns={3} rows={3} />
      </div>
    </GridProvider>
  );
};

export default Grid;
