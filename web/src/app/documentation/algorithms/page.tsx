import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AlgorithmsPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Load Balancing Algorithms</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Explore the different algorithms available in EquiLoad and learn when to use each one.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Overview</h2>
        <p>
          EquiLoad offers a variety of load balancing algorithms to distribute traffic across your backend servers. Each
          algorithm has its own strengths and is suited for different use cases.
        </p>
        <p>
          You can either select an algorithm manually based on your requirements or use our AI to recommend the best
          algorithm for your specific use case.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Algorithm Comparison</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Algorithm</TableHead>
              <TableHead>Best For</TableHead>
              <TableHead>Considerations</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Round Robin</TableCell>
              <TableCell>Simple, evenly distributed traffic</TableCell>
              <TableCell>Doesn't account for server capacity or load</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Weighted Round Robin</TableCell>
              <TableCell>Servers with different capacities</TableCell>
              <TableCell>Requires manual weight configuration</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Least Connections</TableCell>
              <TableCell>Varying request complexity/duration</TableCell>
              <TableCell>May not be ideal for short-lived connections</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Weighted Least Connections</TableCell>
              <TableCell>Different server capacities with varying request duration</TableCell>
              <TableCell>Combines weights with connection counting</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">IP Hash</TableCell>
              <TableCell>Session persistence requirements</TableCell>
              <TableCell>Same client always goes to same server</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">URL Hash</TableCell>
              <TableCell>Content-based routing</TableCell>
              <TableCell>Same URL always goes to same server</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Least Response Time</TableCell>
              <TableCell>Performance-sensitive applications</TableCell>
              <TableCell>Requires active monitoring</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">ML-Based Prediction</TableCell>
              <TableCell>Complex environments with multiple metrics</TableCell>
              <TableCell>Uses machine learning to optimize server selection</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Detailed Algorithm Descriptions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="round-robin">
            <AccordionTrigger>Round Robin</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                The Round Robin algorithm distributes requests sequentially to each server in the pool. After reaching
                the last server, it starts again from the first one.
              </p>
              <h4 className="font-medium">How it works:</h4>
              <ol className="ml-6 list-decimal space-y-2">
                <li>Request 1 goes to Server A</li>
                <li>Request 2 goes to Server B</li>
                <li>Request 3 goes to Server C</li>
                <li>Request 4 goes back to Server A</li>
                <li>And so on...</li>
              </ol>
              <h4 className="font-medium">Best used when:</h4>
              <ul className="ml-6 list-disc space-y-2">
                <li>All servers have similar capacity and specifications</li>
                <li>Requests generally require similar processing time</li>
                <li>You need a simple, easy-to-implement solution</li>
              </ul>
              <h4 className="font-medium">Limitations:</h4>
              <ul className="ml-6 list-disc space-y-2">
                <li>Doesn't account for server load or capacity differences</li>
                <li>No session persistence by default</li>
                <li>May lead to uneven distribution if request processing times vary significantly</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="weighted-round-robin">
            <AccordionTrigger>Weighted Round Robin</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                The Weighted Round Robin algorithm is a variation of Round Robin that assigns a weight to each server
                based on its capacity. Servers with higher weights receive more requests proportionally.
              </p>
              <h4 className="font-medium">How it works:</h4>
              <p>
                If Server A has weight 3, Server B has weight 2, and Server C has weight 1, the distribution would be:
              </p>
              <ol className="ml-6 list-decimal space-y-2">
                <li>Request 1 goes to Server A</li>
                <li>Request 2 goes to Server A</li>
                <li>Request 3 goes to Server A</li>
                <li>Request 4 goes to Server B</li>
                <li>Request 5 goes to Server B</li>
                <li>Request 6 goes to Server C</li>
                <li>Then the cycle repeats</li>
              </ol>
              <h4 className="font-medium">Best used when:</h4>
              <ul className="ml-6 list-disc space-y-2">
                <li>Servers have different capacities or processing power</li>
                <li>You want to control the distribution ratio</li>
                <li>You need a simple solution that accounts for server differences</li>
              </ul>
              <h4 className="font-medium">Limitations:</h4>
              <ul className="ml-6 list-disc space-y-2">
                <li>Requires manual weight configuration</li>
                <li>Doesn't adapt to changing server conditions</li>
                <li>No session persistence by default</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="least-connections">
            <AccordionTrigger>Least Connections</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                The Least Connections algorithm directs traffic to the server with the fewest active connections. This
                helps distribute load more evenly, especially when request processing times vary.
              </p>
              <h4 className="font-medium">How it works:</h4>
              <ol className="ml-6 list-decimal space-y-2">
                <li>Load balancer tracks the number of active connections to each server</li>
                <li>New request comes in</li>
                <li>Load balancer identifies the server with the fewest active connections</li>
                <li>Request is sent to that server</li>
              </ol>
              <h4 className="font-medium">Best used when:</h4>
              <ul className="ml-6 list-disc space-y-2">
                <li>Request processing times vary significantly</li>
                <li>Long-lived connections are common</li>
                <li>You want to prevent any single server from becoming overwhelmed</li>
              </ul>
              <h4 className="font-medium">Limitations:</h4>
              <ul className="ml-6 list-disc space-y-2">
                <li>Doesn't account for server capacity differences</li>
                <li>May not be ideal for very short-lived connections</li>
                <li>No session persistence by default</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="ip-hash">
            <AccordionTrigger>IP Hash</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                The IP Hash algorithm uses the client's IP address to determine which server to send the request to.
                This ensures that requests from the same client always go to the same server.
              </p>
              <h4 className="font-medium">How it works:</h4>
              <ol className="ml-6 list-decimal space-y-2">
                <li>Client makes a request</li>
                <li>Load balancer hashes the client's IP address</li>
                <li>The hash value is used to select a server</li>
                <li>Future requests from the same IP go to the same server</li>
              </ol>
              <h4 className="font-medium">Best used when:</h4>
              <ul className="ml-6 list-disc space-y-2">
                <li>Session persistence is required</li>
                <li>Applications maintain state on the server</li>
                <li>You need a simple way to implement sticky sessions</li>
              </ul>
              <h4 className="font-medium">Limitations:</h4>
              <ul className="ml-6 list-disc space-y-2">
                <li>Can lead to uneven distribution if traffic patterns are skewed</li>
                <li>Doesn't adapt to changing server conditions</li>
                <li>May cause issues with clients behind shared IP addresses (NAT)</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="ml-based">
            <AccordionTrigger>ML-Based Prediction</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p>
                The ML-Based Prediction algorithm uses machine learning to predict the optimal server for each request
                based on multiple metrics including CPU usage, memory, active connections, and response time.
              </p>
              <h4 className="font-medium">How it works:</h4>
              <ol className="ml-6 list-decimal space-y-2">
                <li>The system continuously collects metrics from all servers</li>
                <li>The ML model processes these metrics to learn patterns</li>
                <li>When a new request arrives, the model predicts which server will provide the best performance</li>
                <li>The request is routed to the predicted optimal server</li>
                <li>The model continues to learn and improve based on actual performance</li>
              </ol>
              <h4 className="font-medium">Best used when:</h4>
              <ul className="ml-6 list-disc space-y-2">
                <li>You have complex, dynamic infrastructure</li>
                <li>Server performance varies based on multiple factors</li>
                <li>You want to optimize for specific metrics (e.g., response time)</li>
                <li>You need adaptive load balancing that improves over time</li>
              </ul>
              <h4 className="font-medium">Limitations:</h4>
              <ul className="ml-6 list-disc space-y-2">
                <li>Requires more setup and configuration</li>
                <li>May have a learning period before reaching optimal performance</li>
                <li>More resource-intensive than simpler algorithms</li>
              </ul>
              <div className="mt-4">
                <Link href="/docs/ml-predictions" className="text-sm text-primary hover:underline">
                  Learn more about ML-Based Predictions →
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">
          Choosing the Right Algorithm
        </h2>
        <p>
          Selecting the right load balancing algorithm depends on your specific requirements and infrastructure. Here
          are some guidelines to help you choose:
        </p>
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">For simple, evenly distributed workloads:</h3>
            <p className="mt-2 text-muted-foreground">
              Use <strong>Round Robin</strong> or <strong>Weighted Round Robin</strong> if your servers have different
              capacities.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">For varying request complexity or duration:</h3>
            <p className="mt-2 text-muted-foreground">
              Use <strong>Least Connections</strong> or <strong>Weighted Least Connections</strong> to prevent any
              server from becoming overwhelmed.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">For applications requiring session persistence:</h3>
            <p className="mt-2 text-muted-foreground">
              Use <strong>IP Hash</strong> or <strong>Cookie-Based</strong> methods to ensure clients are consistently
              routed to the same server.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">For complex, dynamic environments:</h3>
            <p className="mt-2 text-muted-foreground">
              Use <strong>ML-Based Prediction</strong> to optimize server selection based on multiple metrics and adapt
              to changing conditions.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-muted p-6">
          <h3 className="text-xl font-semibold">Need Help Choosing?</h3>
          <p className="mt-2">
            Our AI can recommend the best algorithm based on your specific use case. Simply describe your requirements
            and traffic patterns, and get a personalized recommendation.
          </p>
          <div className="mt-4">
            <Button asChild>
              <Link href="/docs/ai-recommendations">Try AI Recommendations</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/documentation/getting-started">← Getting Started</Link>
        </Button>
        <Button asChild>
          <Link href="/documentation/ai-recommendations">Next: AI Recommendations →</Link>
        </Button>
      </div>
    </div>
  )
}

