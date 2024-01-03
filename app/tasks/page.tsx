import { Card } from "@tremor/react";

export default function Tasks() {
  return (
    <div className="flex h-full flex-row justify-between gap-2 bg-gray-900 p-2">
      {["TODO", "IN PROGRESS", "REVIEW", "DONE"].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center gap-4 p-1">
          <div>{item}</div>
          {[
            { name: "Todo 1", desc: "Todo desc", time: "Time" },
            { name: "Todo 2", desc: "Todo desc 2", time: "Time 2" },
            { name: "Todo 3", desc: "Todo desc 3", time: "Time 3" },
          ].map((item, idx) => (
            <Card key={idx}>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <span>{item.time}</span>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
}
