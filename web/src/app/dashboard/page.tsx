"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Activity,
  Server,
  BarChart3,
  RefreshCw,
  Settings,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Zap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";

interface ServerInfo {
  url: string;
  connections: number;
}

export default function DashboardPage() {
  const [servers, setServers] = useState<ServerInfo[]>([]);
  const [currentStrategy, setCurrentStrategy] = useState<string>("");
  const [lastResponse, setLastResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFastLoading, setIsFastLoading] = useState<boolean>(false);
  const [fastRequestStatus, setFastRequestStatus] = useState<string>("");
  const [totalConnections, setTotalConnections] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000");

    ws.onopen = () => {
      console.log("WebSocket Connected");
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.servers) {
        setServers(data.servers);
        calculateTotalConnections(data.servers);
      }
      if (data.strategy) setCurrentStrategy(data.strategy);
    };

    ws.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    fetchConfig();

    return () => ws.close();
  }, []);

  const fetchConfig = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/current-config");
      const data = await response.json();
      setServers(data.servers);
      setCurrentStrategy(data.strategy);
      calculateTotalConnections(data.servers);
    } catch (error) {
      console.error("Error fetching config:", error);
    }
  };

  const calculateTotalConnections = (serverList: ServerInfo[]) => {
    const total = serverList.reduce(
      (sum, server) => sum + server.connections,
      0
    );
    setTotalConnections(total);
  };

  const sendRequest = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3000/balance-request", {
        method: "GET",
      });
      const result = await response.text();
      setLastResponse(result);
    } catch (error) {
      console.error("Error sending request:", error);
      setLastResponse("Error sending request");
    } finally {
      setIsLoading(false);
    }
  };

  const sendFastRequests = async () => {
    setIsFastLoading(true);
    setFastRequestStatus("Sending 50 requests...");
    const totalRequests = 50; // Reduced from 100 for speed
    const concurrencyLimit = 10; // Reduced from 20 for smoother execution
    const requestPromises: Promise<void>[] = [];

    const sendBatch = async (start: number, end: number) => {
      const batch = Array.from(
        { length: end - start },
        (_, i) => start + i
      ).map(() =>
        fetch("http://localhost:3000/balance-request", { method: "GET" })
          .then((res) => res.text())
          .catch((err) => console.error("Fast request error:", err))
      );
      await Promise.all(batch);
      // Small delay between batches to avoid overwhelming the server
      await new Promise((resolve) => setTimeout(resolve, 100));
    };

    try {
      for (let i = 0; i < totalRequests; i += concurrencyLimit) {
        const end = Math.min(i + concurrencyLimit, totalRequests);
        await sendBatch(i, end);
      }
      setFastRequestStatus("Successfully sent 50 requests!");
    } catch (error) {
      console.error("Error in fast requests:", error);
      setFastRequestStatus("Error sending fast requests");
    } finally {
      setIsFastLoading(false);
    }
  };

  const getStrategyDescription = () => {
    switch (currentStrategy) {
      case "round-robin":
        return "Distributes requests sequentially across all servers in rotation.";
      case "least-connection":
        return "Routes requests to the server with the fewest active connections.";
      case "ip-hashing":
        return "Routes requests from the same client IP to the same server.";
      default:
        return "Distributes traffic across multiple servers.";
    }
  };

  const getServerLoadColor = (connections: number) => {
    if (connections === 0) return "bg-green-500";
    if (connections < 3) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getServerLoadPercentage = (connections: number) => {
    return Math.min(connections * 10, 100); // Assuming 10 connections is 100% load
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Load Balancer Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Monitor and manage your distributed server infrastructure
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={fetchConfig} size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button onClick={() => router.push("/input")} size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Reconfigure
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="servers">Servers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Strategy
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="capitalize">
                    {currentStrategy.replace("-", " ")}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {getStrategyDescription()}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Servers
                </CardTitle>
                <Server className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{servers.length}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {servers.filter((s) => s.connections === 0).length} idle,{" "}
                  {servers.filter((s) => s.connections > 0).length} active
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Connections
                </CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalConnections}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Across all servers
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Test Your Load Balancer</CardTitle>
              <CardDescription>
                Send requests to see how they’re distributed across your servers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={sendRequest}
                  variant="outline"
                  className="flex-1"
                  disabled={isLoading || isFastLoading}
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Test Request
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
                <Button
                  onClick={sendFastRequests}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white"
                  disabled={isLoading || isFastLoading}
                >
                  {isFastLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Fast Requests (50)
                      <Zap className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-4">
              {lastResponse && (
                <div className="w-full">
                  <h3 className="text-sm font-medium mb-2">
                    Last Single Response:
                  </h3>
                  <Alert>
                    <AlertTitle>Server Response</AlertTitle>
                    <AlertDescription className="font-mono text-sm">
                      {lastResponse}
                    </AlertDescription>
                  </Alert>
                </div>
              )}
              {fastRequestStatus && (
                <div className="w-full">
                  <h3 className="text-sm font-medium mb-2">
                    Fast Requests Status:
                  </h3>
                  <Alert
                    variant={
                      fastRequestStatus.includes("Error")
                        ? "destructive"
                        : "default"
                    }
                  >
                    <AlertTitle>Batch Response</AlertTitle>
                    <AlertDescription>{fastRequestStatus}</AlertDescription>
                  </Alert>
                </div>
              )}
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="servers" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {servers.map((server, index) => (
              <Card key={server.url} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-base">
                      Server {index + 1}
                    </CardTitle>
                    {server.connections === 0 ? (
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        <CheckCircle2 className="h-3 w-3 mr-1" /> Idle
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="bg-amber-50 text-amber-700 border-amber-200"
                      >
                        <Activity className="h-3 w-3 mr-1" /> Active
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="truncate" title={server.url}>
                    {server.url}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Connections</span>
                      <span className="font-medium">{server.connections}</span>
                    </div>
                    <Progress
                      value={getServerLoadPercentage(server.connections)}
                      className="h-2"
                      indicatorClassName={getServerLoadColor(
                        server.connections
                      )}
                    />
                  </div>
                </CardContent>
                <div
                  className={`h-1 w-full ${getServerLoadColor(
                    server.connections
                  )}`}
                ></div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
