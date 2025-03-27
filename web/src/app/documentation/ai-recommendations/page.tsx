import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AIRecommendationsPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">AI Algorithm Recommendations</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Learn how EquiLoad's AI helps you choose the optimal load balancing algorithm for your specific use case.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">How It Works</h2>
        <p>
          EquiLoad's AI recommendation system analyzes your requirements and traffic patterns to suggest the most
          suitable load balancing algorithm for your specific use case. This eliminates the guesswork and helps you
          optimize your infrastructure from day one.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>1. Describe Your Needs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Tell our AI about your application, traffic patterns, and specific requirements.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>2. AI Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our AI analyzes your input and matches it against known patterns and best practices.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>3. Get Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Receive algorithm recommendations with detailed explanations of why they're suitable for your case.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Using the AI Recommendation Feature
        </h2>
        <p>
          You can access the AI recommendation feature when setting up a new load balancer or when modifying an existing
          one.
        </p>
        <div className="rounded-lg border">
          <div className="relative h-[400px] w-full">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="AI recommendation interface"
              fill
              className="rounded-t-lg object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-medium">Steps to Get AI Recommendations</h3>
            <ol className="mt-4 ml-6 list-decimal space-y-4">
              <li>
                <p className="font-medium">Navigate to the "Algorithm Selection" section</p>
                <p className="text-muted-foreground">This can be found in the load balancer configuration page.</p>
              </li>
              <li>
                <p className="font-medium">Click on "Get AI Recommendation"</p>
                <p className="text-muted-foreground">This will open the AI recommendation interface.</p>
              </li>
              <li>
                <p className="font-medium">Describe your use case</p>
                <p className="text-muted-foreground">
                  Provide details about your application, traffic patterns, and specific requirements.
                </p>
              </li>
              <li>
                <p className="font-medium">Review and apply the recommendation</p>
                <p className="text-muted-foreground">
                  The AI will provide a recommendation with an explanation. You can apply it directly or modify it as
                  needed.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Example Use Cases</h2>
        <p>Here are some example use cases and the recommendations our AI might provide:</p>
        <Tabs defaultValue="ecommerce" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
            <TabsTrigger value="api">API Service</TabsTrigger>
            <TabsTrigger value="media">Media Streaming</TabsTrigger>
          </TabsList>
          <TabsContent value="ecommerce" className="space-y-4">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-medium">E-commerce Platform</h3>
              <div className="mt-4 rounded-md bg-muted p-4">
                <p className="text-sm italic">
                  "I need a load balancing solution for an e-commerce platform with shopping carts and user sessions.
                  Traffic varies throughout the day, with peaks during promotions."
                </p>
              </div>
              <div className="mt-6">
                <h4 className="font-medium">AI Recommendation:</h4>
                <div className="mt-2 space-y-4">
                  <div className="rounded-md bg-primary/10 p-4">
                    <p className="font-medium text-primary">Primary: IP Hash with Session Persistence</p>
                    <p className="mt-2 text-sm">
                      This algorithm ensures that users are consistently directed to the same server, maintaining their
                      shopping cart and session state. This is crucial for e-commerce platforms where users add items to
                      carts and navigate through multiple pages.
                    </p>
                  </div>
                  <div className="rounded-md bg-muted p-4">
                    <p className="font-medium">Alternative: Cookie-Based Persistence with Least Connections</p>
                    <p className="mt-2 text-sm">
                      If you have users behind shared IPs, cookie-based persistence combined with least connections can
                      provide better distribution while maintaining sessions.
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm">
                      <strong>Additional Recommendation:</strong> Consider enabling the ML-based prediction system to
                      handle traffic spikes during promotions, as it can dynamically adjust based on server load.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="api" className="space-y-4">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-medium">API Service</h3>
              <div className="mt-4 rounded-md bg-muted p-4">
                <p className="text-sm italic">
                  "We have a stateless REST API service with varying request complexity. Some endpoints are more
                  resource-intensive than others. We have servers with different capacities."
                </p>
              </div>
              <div className="mt-6">
                <h4 className="font-medium">AI Recommendation:</h4>
                <div className="mt-2 space-y-4">
                  <div className="rounded-md bg-primary/10 p-4">
                    <p className="font-medium text-primary">Primary: Weighted Least Connections</p>
                    <p className="mt-2 text-sm">
                      This algorithm accounts for both the different capacities of your servers (through weights) and
                      the varying complexity of requests (by tracking connections). It's ideal for API services where
                      request processing times can vary significantly.
                    </p>
                  </div>
                  <div className="rounded-md bg-muted p-4">
                    <p className="font-medium">Alternative: ML-Based Prediction</p>
                    <p className="mt-2 text-sm">
                      For even more optimized distribution, the ML-based prediction system can learn which servers
                      handle specific types of requests more efficiently and route accordingly.
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm">
                      <strong>Additional Recommendation:</strong> Implement request-based health checks that simulate
                      your most common API calls to ensure servers are responding correctly to actual workloads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="media" className="space-y-4">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-medium">Media Streaming Service</h3>
              <div className="mt-4 rounded-md bg-muted p-4">
                <p className="text-sm italic">
                  "We're running a video streaming service with long-lived connections. Users typically stay connected
                  for 30+ minutes. We need to ensure smooth playback and minimal buffering."
                </p>
              </div>
              <div className="mt-6">
                <h4 className="font-medium">AI Recommendation:</h4>
                <div className="mt-2 space-y-4">
                  <div className="rounded-md bg-primary/10 p-4">
                    <p className="font-medium text-primary">Primary: Least Response Time</p>
                    <p className="mt-2 text-sm">
                      This algorithm directs users to the server with the lowest response time, which is crucial for
                      streaming services where latency directly impacts user experience. It ensures users connect to the
                      most responsive server for their location.
                    </p>
                  </div>
                  <div className="rounded-md bg-muted p-4">
                    <p className="font-medium">Alternative: IP Hash with Geographic Distribution</p>
                    <p className="mt-2 text-sm">
                      If you have servers in multiple regions, combining IP hash with geographic distribution can ensure
                      users connect to servers in their region while maintaining session persistence.
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm">
                      <strong>Additional Recommendation:</strong> Enable bandwidth monitoring in your health checks to
                      ensure servers have sufficient capacity for streaming. Also, consider implementing connection
                      draining for maintenance to avoid disrupting active streams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Tips for Getting Better Recommendations
        </h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-lg font-semibold text-primary">1</span>
            </div>
            <div>
              <h3 className="font-medium">Be Specific About Your Application</h3>
              <p className="mt-1 text-muted-foreground">
                Mention the type of application (e-commerce, API, content delivery, etc.), as different applications
                have different load balancing requirements.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-lg font-semibold text-primary">2</span>
            </div>
            <div>
              <h3 className="font-medium">Describe Your Traffic Patterns</h3>
              <p className="mt-1 text-muted-foreground">
                Explain if your traffic is steady, has predictable peaks, or is highly variable. Mention any specific
                patterns like daily spikes or seasonal variations.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-lg font-semibold text-primary">3</span>
            </div>
            <div>
              <h3 className="font-medium">Highlight Special Requirements</h3>
              <p className="mt-1 text-muted-foreground">
                Mention any specific needs like session persistence, geographic distribution, or handling of long-lived
                connections.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <span className="text-lg font-semibold text-primary">4</span>
            </div>
            <div>
              <h3 className="font-medium">Provide Server Information</h3>
              <p className="mt-1 text-muted-foreground">
                If your servers have different capacities or are located in different regions, include this information
                for more accurate recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-muted p-6">
        <h2 className="text-xl font-semibold">Continuous Improvement</h2>
        <p className="mt-2">
          Our AI recommendation system is continuously learning and improving based on user feedback and real-world
          performance data. The more you use it, the better it gets at providing accurate recommendations.
        </p>
        <div className="mt-4">
          <p className="font-medium">Have feedback on the recommendations?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            We'd love to hear your thoughts on how we can improve our AI recommendations. Use the feedback button in the
            dashboard or contact our support team.
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/documentation/algorithms">← Load Balancing Algorithms</Link>
        </Button>
        <Button asChild>
          <Link href="/documentation/ml-predictions">Next: ML-Based Predictions →</Link>
        </Button>
      </div>
    </div>
  )
}

