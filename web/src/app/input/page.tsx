// app/dashboard/page.tsx (Real-Time Server Monitoring)
"use client";
import { useEffect, useState } from "react";
import { create } from "zustand";

interface ServerData {
  url: string;
  connections: number;
}

const useServerStore = create<{ servers: string[]; strategy: string }>(
  (set) => ({
    servers: [],
    strategy: "round-robin",
  })
);

export default function Dashboard() {
  const { servers, strategy } = useServerStore();
  const [serverStats, setServerStats] = useState<ServerData[]>([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000");
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.servers) {
        setServerStats(data.servers);
      }
    };
    return () => ws.close();
  }, []);

  return (
    <div className="p-6 max-w-lg mx-auto ">
      <h1 className="text-2xl font-bold mb-4">Server Load Dashboard</h1>
      <h2 className="text-lg">Current Strategy: {strategy}</h2>
      <ul className="mt-4">
        {serverStats.map((server, index) => (
          <li key={index} className="border-b py-2 flex justify-between">
            <span>{server.url}</span>
            <span>Connections: {server.connections}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
