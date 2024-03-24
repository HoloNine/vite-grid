import { createContext, useState, ReactNode } from "react";

type GridType = {
  columns: number;
  rows: number;
};

type GridContextType = {
  grid: GridType | null;
  setGrid: (grid: GridType) => void;
};

type GridProviderProps = {
  children: ReactNode;
};

/**
 * Context for managing the grid state.
 */
const GridContext = createContext<GridContextType>({
  grid: null,
  setGrid: () => {},
});

/**
 * Provides the grid context to its children components.
 *
 * @param {GridProviderProps} props - The props for the GridProvider component.
 * @returns {JSX.Element} The rendered GridProvider component.
 */
const GridProvider = ({ children }: GridProviderProps) => {
  const [grid, setGrid] = useState<GridType | null>(null);

  return (
    <GridContext.Provider value={{ grid, setGrid }}>
      {children}
    </GridContext.Provider>
  );
};

export { GridContext, GridProvider };
