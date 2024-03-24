import { Grid } from "./components/grid";
import { Mesh } from "./components/mesh";

const App = () => {
  return (
    <main>
      <Grid columns={6} rows={6}>
        <Mesh />
      </Grid>
    </main>
  );
};

export default App;
