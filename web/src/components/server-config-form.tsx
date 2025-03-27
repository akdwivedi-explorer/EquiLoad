"use client";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export function ServerConfigForm() {
  const [serverInputs, setServerInputs] = useState<string[]>([""]);
  const [strategy, setStrategy] = useState<string>("round-robin");
  const [activeTab, setActiveTab] = useState<string>("servers");
  const router = useRouter();

  const handleServerChange = (index: number, value: string) => {
    const newInputs = [...serverInputs];
    newInputs[index] = value;
    setServerInputs(newInputs);
  };

  const addServerInput = () => {
    setServerInputs([...serverInputs, ""]);
  };

  const removeServer = (index: number) => {
    if (serverInputs.length === 1) {
      alert("At least one server is required.");
      return;
    }
    setServerInputs(serverInputs.filter((_, i) => i !== index));
  };

  interface HandleAiButtonClickEvent
    extends React.MouseEvent<HTMLButtonElement> {}

  const handleAiButtonClcik = (e: HandleAiButtonClickEvent): void => {
    e.preventDefault();
    router.push("/generate");
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
    <div className="max-w-3xl mx-auto">
      <Card className="border-primary/20 shadow-lg">
        <CardHeader className="bg-primary/5 border-b border-primary/10">
          <CardTitle>Configure Your Load Balancer</CardTitle>
          <CardDescription>
            Add your backend servers and select a load balancing algorithm
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              {serverInputs.map((server, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">
                      Server {index + 1}
                    </label>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeServer(index)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Remove
                    </Button>
                  </div>
                  <Input
                    placeholder="https://your-server.com"
                    value={server}
                    onChange={(e) => handleServerChange(index, e.target.value)}
                    required
                  />
                </div>
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addServerInput}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Another Server
            </Button>
            <div className="flex gap-4">
              <Button
                type="button"
                className="w-1/2 mt-4"
                onClick={() => setActiveTab("algorithm")}
              >
                Select Algorithm
              </Button>
              <Button
                type="button"
                className="w-1/2 mt-4 text-left"
                onClick={handleAiButtonClcik}
              >
                Ask to AI
              </Button>
            </div>
            {activeTab === "algorithm" && (
              <>
                <Select value={strategy} onValueChange={setStrategy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select algorithm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="round-robin">Round Robin</SelectItem>
                    <SelectItem value="least-connections">
                      Least Connections
                    </SelectItem>
                    <SelectItem value="ip-hashing">IP Hash</SelectItem>
                    <SelectItem value="ml-model">ML Based</SelectItem>
                    <SelectItem value="ml-model">ML based</SelectItem>
                  </SelectContent>
                </Select>
                <Button type="submit" className="w-full mt-4">
                  Save Configuration
                </Button>
              </>
            )}
          </div>
        </form>
      </Card>

      <div className="mt-12 relative h-[200px] rounded-lg border border-primary/20 bg-primary/5 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h3 className="font-medium mb-2">Load Balancing Visualization</h3>
            <p className="text-sm text-muted-foreground">
              {strategy === "round-robin"
                ? "Traffic is distributed sequentially across servers"
                : strategy === "least-connections"
                ? "Traffic is sent to servers with fewer active connections"
                : "Traffic from the same client IP always goes to the same server"}
            </p>
          </div>
        </div>

        {/* Animated visualization based on selected algorithm */}
        <div className="absolute inset-0 opacity-20">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Central load balancer */}
            <circle
              cx="400"
              cy="100"
              r="20"
              fill="currentColor"
              className="text-primary"
            />

            {/* Server nodes */}
            <circle
              cx="600"
              cy="50"
              r="15"
              fill="currentColor"
              className="text-primary/70"
            />
            <circle
              cx="600"
              cy="100"
              r="15"
              fill="currentColor"
              className="text-primary/70"
            />
            <circle
              cx="600"
              cy="150"
              r="15"
              fill="currentColor"
              className="text-primary/70"
            />

            {/* Client nodes */}
            <circle
              cx="200"
              cy="50"
              r="10"
              fill="currentColor"
              className="text-primary/70"
            />
            <circle
              cx="200"
              cy="100"
              r="10"
              fill="currentColor"
              className="text-primary/70"
            />
            <circle
              cx="200"
              cy="150"
              r="10"
              fill="currentColor"
              className="text-primary/70"
            />

            {/* Connection lines */}
            <line
              x1="220"
              y1="50"
              x2="380"
              y2="100"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary/50"
            />
            <line
              x1="220"
              y1="100"
              x2="380"
              y2="100"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary/50"
            />
            <line
              x1="220"
              y1="150"
              x2="380"
              y2="100"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary/50"
            />

            <line
              x1="420"
              y1="100"
              x2="580"
              y2="50"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary/50"
            />
            <line
              x1="420"
              y1="100"
              x2="580"
              y2="100"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary/50"
            />
            <line
              x1="420"
              y1="100"
              x2="580"
              y2="150"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary/50"
            />

            {/* Animated dots for traffic */}
            <circle
              cx="300"
              cy="75"
              r="4"
              fill="currentColor"
              className="text-primary"
            >
              <animate
                attributeName="cx"
                from="220"
                to="380"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                from="50"
                to="100"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>

            <circle
              cx="300"
              cy="100"
              r="4"
              fill="currentColor"
              className="text-primary"
            >
              <animate
                attributeName="cx"
                from="220"
                to="380"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>

            <circle
              cx="300"
              cy="125"
              r="4"
              fill="currentColor"
              className="text-primary"
            >
              <animate
                attributeName="cx"
                from="220"
                to="380"
                dur="3.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                from="150"
                to="100"
                dur="3.5s"
                repeatCount="indefinite"
              />
            </circle>

            <circle
              cx="500"
              cy="75"
              r="4"
              fill="currentColor"
              className="text-primary"
            >
              <animate
                attributeName="cx"
                from="420"
                to="580"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                from="100"
                to="50"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>

            <circle
              cx="500"
              cy="100"
              r="4"
              fill="currentColor"
              className="text-primary"
            >
              <animate
                attributeName="cx"
                from="420"
                to="580"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>

            <circle
              cx="500"
              cy="125"
              r="4"
              fill="currentColor"
              className="text-primary"
            >
              <animate
                attributeName="cx"
                from="420"
                to="580"
                dur="4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                from="100"
                to="150"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      </div>
    </div>
  );
}
