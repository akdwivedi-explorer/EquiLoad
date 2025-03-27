import { BarChart3, RefreshCw, Shield, Zap, Server, Settings } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Powerful Load Balancing Made Simple
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our load balancer provides enterprise-grade features with minimal configuration, helping you optimize
              performance and ensure reliability.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-start space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <RefreshCw className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Round Robin Algorithm</h3>
              <p className="text-muted-foreground">
                Distribute incoming traffic evenly across all servers in sequential order, ensuring balanced resource
                utilization.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Least Connection Method</h3>
              <p className="text-muted-foreground">
                Automatically direct new requests to servers with the fewest active connections, optimizing response
                times.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Health Checks</h3>
              <p className="text-muted-foreground">
                Automatically detect and route around server failures with configurable health monitoring.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">High Performance</h3>
              <p className="text-muted-foreground">
                Engineered for speed with minimal overhead, ensuring your applications remain responsive under load.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Server className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Scalability</h3>
              <p className="text-muted-foreground">
                Easily add or remove servers from your pool without disrupting service, allowing your infrastructure to
                grow with your needs.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start space-y-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Settings className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Simple Configuration</h3>
              <p className="text-muted-foreground">
                Get started in minutes with our intuitive interface and minimal configuration requirements. No complex
                setup needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

