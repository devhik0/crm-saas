import DataPages from "./data-pages";

export default function Dashboard() {
  // todo: make responsive
  return (
    <div className=" h-full p-2">
      <h3 className="text-lg">Overview</h3>
      <DataPages />
    </div>
  );
}
