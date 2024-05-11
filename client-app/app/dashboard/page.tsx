import DataPages from "./data-pages";

export default function Dashboard() {
  // todo: make responsive
  return (
    <div className=" h-full">
      <h3 className="text-lg">Overview</h3>
      <DataPages />
    </div>
  );
}
