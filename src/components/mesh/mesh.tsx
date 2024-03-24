import { useContext, useEffect, useState } from "react";
import { GridContext } from "../contexts/grid-context";

import "./mesh.css";

const Mesh = () => {
  const { grid } = useContext(GridContext);

  const [meshColumns, setMeshColumns] = useState<number | null>(null);
  const [meshRows, setMeshRows] = useState<number | null>(null);
  const [meshGap, setMeshGap] = useState<number | null>(null);

  useEffect(() => {
    if (grid) {
      setMeshColumns(grid.columns);
      setMeshRows(grid.rows);
      setMeshGap(grid.gap);
    }
  }, [grid]);

  const styles = {
    gridTemplateColumns: `repeat(${meshColumns}, 1fr)`,
    gridTemplateRows: `repeat(${meshRows}, 1fr)`,
    gap: `${meshGap}px`,
  };

  return (
    <div className={"mesh"} style={{ ...styles }}>
      Mesh
    </div>
  );
};

export default Mesh;
