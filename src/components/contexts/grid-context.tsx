import { createContext } from "react";
import { GridType } from "../types/grid";

type GridContextType = {
  grid: GridType | null;
  setGrid: (grid: GridType) => void;
};

/**
 * Context for managing the grid state.
 */
const GridContext = createContext<GridContextType>({
  grid: null,
  setGrid: () => {},
});

export { GridContext };
