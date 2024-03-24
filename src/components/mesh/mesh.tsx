import { useContext, useEffect, useState } from "react";
import { GridContext } from "../contexts/grid-context";

import "./mesh.css";

const meshStyles = (columns: number, rows: number, gap: number) => {
  return {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gap: `${gap}px`,
  };
};

type CellLines = {
  startRow: number;
  endRow: number;
  startColumn: number;
  endColumn: number;
};

const calculateCellLines = (
  row: number,
  column: number,
  rowIncrement = 1,
  columnIncrement = 1
): CellLines => {
  return {
    startRow: row + rowIncrement,
    endRow: row + 2 * rowIncrement,
    startColumn: column + columnIncrement,
    endColumn: column + 2 * columnIncrement,
  };
};

const Mesh = () => {
  const { grid } = useContext(GridContext);

  const [meshColumns, setMeshColumns] = useState<number>(1);
  const [meshRows, setMeshRows] = useState<number>(1);
  const [meshGap, setMeshGap] = useState<number>(0);

  useEffect(() => {
    if (grid) {
      setMeshColumns(grid.columns);
      setMeshRows(grid.rows);
      setMeshGap(grid.gap);
    }
  }, [grid]);

  useEffect(() => {
    const cellCoordinates = [];
    for (let row = 0; row < meshRows; row++) {
      for (let column = 0; column < meshColumns; column++) {
        cellCoordinates.push(calculateCellLines(row, column));
      }
    }

    console.log(cellCoordinates);
  }, [meshColumns, meshRows]);

  return (
    <div
      className={"mesh"}
      style={{ ...meshStyles(meshColumns, meshRows, meshGap) }}
    >
      Mesh
    </div>
  );
};

export default Mesh;
