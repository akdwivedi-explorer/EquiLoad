"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface ServerInfo {
  url: string;
  connections: number;
}

export default function DashboardPage() {
  const [servers, setServers] = useState<ServerInfo[]>([]);
  const [currentStrategy, setCurrentStrategy] = useState<string>("");
  const [lastResponse, setLastResponse] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000");

    ws.onopen = () => {
      console.log("WebSocket Connected");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.servers) setServers(data.servers);
      if (data.strategy) setCurrentStrategy(data.strategy);
    };

    ws.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    // Fetch initial config
    fetch("http://localhost:3000/api/current-config")
      .then((response) => response.json())
      .then((data) => {
        setServers(data.servers);
        setCurrentStrategy(data.strategy);
      })
      .catch((error) => console.error("Error fetching config:", error));

    return () => ws.close();
  }, []);

  const sendRequest = async () => {
    try {
      const response = await fetch("http://localhost:3000/balance-request", {
        method: "GET",
      });
      const result = await response.text();
      setLastResponse(result);
    } catch (error) {
      console.error("Error sending request:", error);
      setLastResponse("Error sending request");
    }
  };

  return (
    <div className="container mx-auto max-w-4xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Load Balancer Dashboard
        </h1>
        <button
          onClick={() => router.push("/input")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Reconfigure
        </button>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-700">
          Current Load Balancing Strategy:
          <span className="ml-2 capitalize">
            {currentStrategy.replace("-", " ")}
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {servers.map((server, index) => (
          <div
            key={server.url}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
          >
            <h3 className="text-lg font-medium mb-2 text-gray-800">
              Server {index + 1}
            </h3>
            <p className="text-gray-600">URL: {server.url}</p>
            <p className="text-gray-600">
              Active Connections:
              <span
                className={`ml-2 ${
                  server.connections > 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                {server.connections}
              </span>
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <button
          onClick={sendRequest}
          className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
        >
          Send Request
        </button>

        {lastResponse && (
          <div className="bg-gray-100 p-4 rounded-md border border-gray-200">
            <h3 className="font-semibold mb-2">Last Response:</h3>
            <p className="text-gray-700">{lastResponse}</p>
          </div>
        )}
      </div>
    </div>
  );
}
