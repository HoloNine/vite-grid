import "./mesh.css";

type MeshProps = {
  columns: number;
  rows: number;
};

const Mesh = ({ columns, rows, ...props }: MeshProps) => {
  return <div className="mesh">Mesh</div>;
};

export default Mesh;
