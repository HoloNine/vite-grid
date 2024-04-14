import { useContext, useEffect, useState } from "react";
import { GridContext } from "../contexts/grid-context";

import "./mesh.css";
import { DropTarget } from "../drop-target";

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

  const [gridCoordinates, setGridCoordinates] = useState<CellLines[]>([]);

  useEffect(() => {
    if (grid) {
      const newGridCoordinates: CellLines[] = [];
      for (let row = 0; row < grid.rows; row++) {
        for (let column = 0; column < grid.columns; column++) {
          const cellLines = calculateCellLines(row, column);
          newGridCoordinates.push(cellLines);
        }
      }

      setGridCoordinates(newGridCoordinates);
    }
  }, [grid]);

  return (
    <div
      className={"mesh"}
      style={{
        ...meshStyles(
          grid ? grid.columns : 1,
          grid ? grid.rows : 1,
          grid ? grid.gap : 0
        ),
      }}
    >
      {gridCoordinates.map((cellLines, index) => (
        <DropTarget key={index} />
      ))}
    </div>
  );
};

export default Mesh;
