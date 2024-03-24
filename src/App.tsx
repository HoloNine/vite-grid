import { useState } from "react";
import { Grid } from "./components/grid";
import { Mesh } from "./components/mesh";

const App = () => {
  const [columns, setColumns] = useState(6);
  const [rows, setRows] = useState(3);
  const [gap, setGap] = useState(0);

  return (
    <main>
      <section className="inputs">
        <div>
          <label htmlFor="columns">Columns</label>
          <input
            id="columns"
            className="columns"
            type="number"
            min={0}
            max={12}
            defaultValue={columns}
            onChange={(event) => setColumns(Number(event.currentTarget.value))}
          />
        </div>
        <div>
          <label htmlFor="rows">Rows</label>
          <input
            id="rows"
            className="rows"
            type="number"
            min={0}
            max={12}
            defaultValue={rows}
            onChange={(event) => setRows(Number(event.currentTarget.value))}
          />
        </div>
        <div>
          <label htmlFor="rows">Gap</label>
          <input
            id="gap"
            className="gap"
            type="number"
            min={0}
            defaultValue={gap}
            onChange={(event) => setGap(Number(event.currentTarget.value))}
          />
        </div>
      </section>
      <Grid columns={columns} rows={rows} gap={gap}>
        <Mesh />
      </Grid>
    </main>
  );
};

export default App;
