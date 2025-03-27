import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MLPredictionsPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">ML-Based Predictions</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Learn how EquiLoad's machine learning model optimizes server selection based on real-time metrics.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Overview</h2>
        <p>
          EquiLoad's ML-based prediction system goes beyond traditional load balancing algorithms by using machine
          learning to predict which server will provide the best performance for each request. The system continuously
          monitors server metrics and learns from past performance to make increasingly accurate predictions over time.
        </p>
        <div className="rounded-lg border">
          <div className="relative h-[300px] w-full">
            <Image
              src="/placeholder.svg?height=300&width=800"
              alt="ML prediction system diagram"
              fill
              className="rounded-t-lg object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-medium">Key Benefits</h3>
            <ul className="mt-4 ml-6 list-disc space-y-2">
              <li>
                <span className="font-medium">Optimized Performance:</span>{" "}
                <span className="text-muted-foreground">
                  Routes requests to the server that will provide the best performance based on multiple metrics.
                </span>
              </li>
              <li>
                <span className="font-medium">Adaptive Learning:</span>{" "}
                <span className="text-muted-foreground">
                  Continuously improves over time as it learns from actual server performance.
                </span>
              </li>
              <li>
                <span className="font-medium">Predictive Scaling:</span>{" "}
                <span className="text-muted-foreground">
                  Can anticipate when servers are approaching capacity and adjust routing accordingly.
                </span>
              </li>
              <li>
                <span className="font-medium">Multi-Metric Analysis:</span>{" "}
                <span className="text-muted-foreground">
                  Considers CPU, memory, active connections, and response time together, not just in isolation.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">How It Works</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Data Collection</h3>
              <p className="text-muted-foreground">
                The system continuously collects key metrics from all servers in your pool:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>CPU utilization</li>
                <li>Memory usage</li>
                <li>Number of active connections</li>
                <li>Response time</li>
                <li>Network throughput</li>
                <li>Error rates</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <div className="relative h-[200px] w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Data collection visualization"
                  fill
                  className="rounded object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-4 md:order-2">
              <div className="relative h-[200px] w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Model training visualization"
                  fill
                  className="rounded object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 md:order-1">
              <h3 className="text-lg font-medium">Model Training</h3>
              <p className="text-muted-foreground">
                The collected data is used to train a machine learning model that learns:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Patterns in server performance</li>
                <li>Correlations between metrics</li>
                <li>How different types of requests affect server load</li>
                <li>Optimal server selection based on historical performance</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Prediction and Routing</h3>
              <p className="text-muted-foreground">When a new request arrives, the model:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Analyzes current metrics from all servers</li>
                <li>Predicts which server will provide the best performance</li>
                <li>Routes the request to the predicted optimal server</li>
                <li>Records the actual performance for further learning</li>
              </ul>
            </div>
            <div className="rounded-lg border p-4">
              <div className="relative h-[200px] w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Prediction and routing visualization"
                  fill
                  className="rounded object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-4 md:order-2">
              <div className="relative h-[200px] w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Continuous improvement visualization"
                  fill
                  className="rounded object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 md:order-1">
              <h3 className="text-lg font-medium">Continuous Improvement</h3>
              <p className="text-muted-foreground">The system continuously improves through:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Feedback loops that compare predicted vs. actual performance</li>
                <li>Regular model retraining with new data</li>
                <li>Adaptation to changing server conditions and traffic patterns</li>
                <li>Learning from both successful and suboptimal routing decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Setting Up ML-Based Predictions
        </h2>
        <p>Enabling and configuring ML-based predictions in EquiLoad is straightforward:</p>
        <Tabs defaultValue="enable" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="enable">Enabling</TabsTrigger>
            <TabsTrigger value="configure">Configuring</TabsTrigger>
            <TabsTrigger value="monitor">Monitoring</TabsTrigger>
          </TabsList>
          <TabsContent value="enable" className="space-y-4">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-medium">Enabling ML-Based Predictions</h3>
              <ol className="mt-4 ml-6 list-decimal space-y-4">
                <li>
                  <p className="font-medium">Navigate to your load balancer settings</p>
                  <p className="text-muted-foreground">
                    Go to the EquiLoad dashboard and select the load balancer you want to configure.
                  </p>
                </li>
                <li>
                  <p className="font-medium">Go to the "ML Predictions" tab</p>
                  <p className="text-muted-foreground">You'll find this in the load balancer settings menu.</p>
                </li>
                <li>
                  <p className="font-medium">Toggle "Enable ML-Based Predictions"</p>
                  <p className="text-muted-foreground">
                    This will activate the ML prediction system for your load balancer.
                  </p>
                </li>
                <li>
                  <p className="font-medium">Save your changes</p>
                  <p className="text-muted-foreground">
                    The system will begin collecting data and training the initial model.
                  </p>
                </li>
              </ol>
              <div className="mt-6">
                <p className="text-sm">
                  <strong>Note:</strong> The ML system requires a learning period to reach optimal performance. During
                  this time, it will use a fallback algorithm (usually Least Connections) while collecting data.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="configure" className="space-y-4">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-medium">Configuring ML-Based Predictions</h3>
              <p className="mt-2 text-muted-foreground">
                You can customize how the ML model weighs different metrics and how often it updates:
              </p>
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="font-medium">Metric Importance</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Adjust how much weight the model gives to each metric:
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded-md border p-4">
                      <p className="font-medium">CPU Usage</p>
                      <p className="mt-1 text-sm text-muted-foreground">Default: High (30%)</p>
                      <p className="mt-2 text-xs">
                        Increase for CPU-intensive applications, decrease for I/O-bound applications.
                      </p>
                    </div>
                    <div className="rounded-md border p-4">
                      <p className="font-medium">Memory Usage</p>
                      <p className="mt-1 text-sm text-muted-foreground">Default: Medium (20%)</p>
                      <p className="mt-2 text-xs">Increase for memory-intensive applications with large datasets.</p>
                    </div>
                    <div className="rounded-md border p-4">
                      <p className="font-medium">Active Connections</p>
                      <p className="mt-1 text-sm text-muted-foreground">Default: Medium (20%)</p>
                      <p className="mt-2 text-xs">Increase for applications with many concurrent connections.</p>
                    </div>
                    <div className="rounded-md border p-4">
                      <p className="font-medium">Response Time</p>
                      <p className="mt-1 text-sm text-muted-foreground">Default: High (30%)</p>
                      <p className="mt-2 text-xs">
                        Increase for latency-sensitive applications like real-time services.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Update Frequency</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Configure how often the system updates its predictions:
                  </p>
                  <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-md border p-4">
                      <p className="font-medium">Prediction Interval</p>
                      <p className="mt-1 text-sm text-muted-foreground">Default: 30 seconds</p>
                      <p className="mt-2 text-xs">
                        How often the model makes new predictions. Lower values provide more responsive load balancing
                        but increase computational load.
                      </p>
                    </div>
                    <div className="rounded-md border p-4">
                      <p className="font-medium">Model Retraining</p>
                      <p className="mt-1 text-sm text-muted-foreground">Default: 24 hours</p>
                      <p className="mt-2 text-xs">
                        How often the model is retrained with new data. More frequent retraining helps adapt to changing
                        patterns but uses more resources.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Advanced Settings</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Additional configuration options for advanced users:
                  </p>
                  <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-md border p-4">
                      <p className="font-medium">Fallback Algorithm</p>
                      <p className="mt-1 text-sm text-muted-foreground">Default: Least Connections</p>
                      <p className="mt-2 text-xs">
                        The algorithm to use during the learning period or if the ML system encounters an error.
                      </p>
                    </div>
                    <div className="rounded-md border p-4">
                      <p className="font-medium">Confidence Threshold</p>
                      <p className="mt-1 text-sm text-muted-foreground">Default: 70%</p>
                      <p className="mt-2 text-xs">
                        The minimum confidence level required for the ML model to make a prediction. If below this
                        threshold, the fallback algorithm is used.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="monitor" className="space-y-4">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-medium">Monitoring ML Performance</h3>
              <p className="mt-2 text-muted-foreground">
                EquiLoad provides tools to monitor and evaluate the performance of the ML prediction system:
              </p>
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="font-medium">ML Performance Dashboard</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Access detailed metrics about your ML prediction system:
                  </p>
                  <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-md border p-4">
                      <p className="font-medium">Prediction Accuracy</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        How often the ML model correctly predicts the optimal server.
                      </p>
                    </div>
                    <div className="rounded-md border p-4">
                      <p className="font-medium">Performance Improvement</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Comparison of response times with ML vs. traditional algorithms.
                      </p>
                    </div>
                    <div className="rounded-md border p-4">
                      <p className="font-medium">Learning Progress</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        How the model's accuracy has improved over time.
                      </p>
                    </div>
                    <div className="rounded-md border p-4">
                      <p className="font-medium">Fallback Usage</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        How often the system falls back to the traditional algorithm.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Real-time Monitoring</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    View real-time information about ML-based routing decisions:
                  </p>
                  <div className="mt-4">
                    <div className="relative h-[250px] w-full rounded-lg border">
                      <Image
                        src="/placeholder.svg?height=250&width=700"
                        alt="ML monitoring dashboard"
                        fill
                        className="rounded object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Performance Reports</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Generate detailed reports to analyze ML performance over time:
                  </p>
                  <ul className="mt-4 ml-6 list-disc space-y-2">
                    <li>Daily, weekly, and monthly performance summaries</li>
                    <li>Comparison with traditional algorithms</li>
                    <li>Metric importance analysis</li>
                    <li>Recommendations for optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Use Cases and Benefits</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Dynamic Environments</CardTitle>
              <CardDescription>Ideal for environments with changing workloads</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                The ML system adapts to changing traffic patterns and server conditions, making it perfect for
                applications with variable workloads like e-commerce during sales events.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Complex Applications</CardTitle>
              <CardDescription>Perfect for applications with diverse resource needs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Applications with different types of requests that consume different resources benefit from ML's ability
                to learn which servers handle specific workloads best.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Performance-Critical Services</CardTitle>
              <CardDescription>Optimizes for latency-sensitive applications</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Real-time services, gaming, financial applications, and other latency-sensitive workloads benefit from
                ML's ability to minimize response times.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="rounded-lg bg-muted p-6">
          <h3 className="text-lg font-medium">Measured Benefits</h3>
          <p className="mt-2 text-muted-foreground">Based on customer data, ML-based predictions typically provide:</p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-lg bg-card p-4 text-center">
              <p className="text-3xl font-bold text-primary">15-30%</p>
              <p className="mt-2 text-sm">Improved response times</p>
            </div>
            <div className="rounded-lg bg-card p-4 text-center">
              <p className="text-3xl font-bold text-primary">20-40%</p>
              <p className="mt-2 text-sm">Better resource utilization</p>
            </div>
            <div className="rounded-lg bg-card p-4 text-center">
              <p className="text-3xl font-bold text-primary">25-50%</p>
              <p className="mt-2 text-sm">Reduced error rates</p>
            </div>
            <div className="rounded-lg bg-card p-4 text-center">
              <p className="text-3xl font-bold text-primary">10-25%</p>
              <p className="mt-2 text-sm">Lower infrastructure costs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Best Practices</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-lg font-semibold text-primary">1</span>
            </div>
            <div>
              <h3 className="font-medium">Allow Sufficient Learning Time</h3>
              <p className="mt-1 text-muted-foreground">
                Give the ML system time to learn your traffic patterns. Performance will improve over time as it
                collects more data.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-lg font-semibold text-primary">2</span>
            </div>
            <div>
              <h3 className="font-medium">Customize Metric Importance</h3>
              <p className="mt-1 text-muted-foreground">
                Adjust the importance of different metrics based on your application's specific requirements and
                bottlenecks.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-lg font-semibold text-primary">3</span>
            </div>
            <div>
              <h3 className="font-medium">Monitor and Refine</h3>
              <p className="mt-1 text-muted-foreground">
                Regularly review the ML performance dashboard and make adjustments as needed to optimize performance.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-lg font-semibold text-primary">4</span>
            </div>
            <div>
              <h3 className="font-medium">Combine with Health Checks</h3>
              <p className="mt-1 text-muted-foreground">
                Implement comprehensive health checks to ensure the ML system has accurate data about server health.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-lg font-semibold text-primary">5</span>
            </div>
            <div>
              <h3 className="font-medium">Test During Normal Traffic</h3>
              <p className="mt-1 text-muted-foreground">
                Enable ML-based predictions during normal traffic periods before relying on it during peak times.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-muted p-6">
        <h2 className="text-xl font-semibold">Advanced: Training Custom Models</h2>
        <p className="mt-2">
          For users with specific requirements, EquiLoad allows you to train custom ML models tailored to your unique
          workloads.
        </p>
        <div className="mt-4">
          {/* <Button asChild>
            <Link href="/docs/custom-models">Learn About Custom Models</Link>
          </Button> */}
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/documentation/ai-recommendations">← AI Recommendations</Link>
        </Button>
        {/* <Button asChild>
          <Link href="/docs/custom-models">Next: Training Custom Models →</Link>
        </Button> */}
      </div>
    </div>
  )
}

