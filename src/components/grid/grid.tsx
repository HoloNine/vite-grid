import { ReactNode, useEffect, useMemo, useState } from "react";
import { GridContext } from "../contexts/grid-context";

import { GridType } from "../types/grid";

import "./grid.css";

type GridProps = {
  columns: number;
  rows: number;
  gap?: number;
  children: ReactNode;
};

/**
 * Renders a grid component with the specified columns and rows.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number} props.columns - The number of columns in the grid.
 * @param {number} props.rows - The number of rows in the grid.
 * @param {ReactNode} props.children - The child components to render within the grid.
 * @returns {JSX.Element} The rendered grid component.
 */
const Grid = ({ columns, rows, gap = 0, children }: GridProps) => {
  const [grid, setGrid] = useState<GridType | null>(null);

  const memoizedGrid = useMemo(
    () => ({ columns, rows, gap }),
    [columns, rows, gap]
  );

  useEffect(() => {
    setGrid(memoizedGrid);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memoizedGrid]);

  return (
    <GridContext.Provider value={{ grid, setGrid }}>
      <div className="grid">{children}</div>
    </GridContext.Provider>
  );
};

export default Grid;
