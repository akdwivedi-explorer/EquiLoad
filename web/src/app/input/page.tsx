"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InputPage() {
  const [serverInputs, setServerInputs] = useState<string[]>([""]);
  const [strategy, setStrategy] = useState<string>("round-robin");
  const router = useRouter();

  const handleServerChange = (index: number, value: string) => {
    const newInputs = [...serverInputs];
    newInputs[index] = value;
    setServerInputs(newInputs);
  };

  const addServerInput = () => {
    setServerInputs([...serverInputs, ""]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const servers = serverInputs.filter((url) => url.trim() !== "");
    if (servers.length === 0) {
      alert("Please add at least one server");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/configure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ servers, strategy }),
      });
      if (response.ok) {
        router.push("/dashboard");
      } else {
        alert("Failed to configure servers");
      }
    } catch (error) {
      console.error("Error submitting configuration:", error);
      alert("Error submitting configuration");
    }
  };

  return (
    <div className="container mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Configure Load Balancer
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Backend Servers
          </label>
          {serverInputs.map((server, index) => (
            <input
              key={index}
              type="text"
              value={server}
              onChange={(e) => handleServerChange(index, e.target.value)}
              placeholder={`Server URL (e.g., http://localhost:400${index})`}
              className="w-full p-2 mb-2 border rounded-md"
            />
          ))}
          <button
            type="button"
            onClick={addServerInput}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Add Server
          </button>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Load Balancing Strategy
          </label>
          <select
            value={strategy}
            onChange={(e) => setStrategy(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="round-robin">Round Robin</option>
            <option value="least-connection">Least Connection</option>
            <option value="ip-hashing">IP Hashing</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Save Configuration
        </button>
      </form>
    </div>
  );
}
