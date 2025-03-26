import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full px-10 py-4 md:py-12 lg:py-12 xl:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Simple Load Balancing for Modern Applications
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Distribute traffic efficiently across your servers with minimal configuration. Optimize performance,
                ensure reliability, and scale with ease.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/input" className="inline-flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#docs">View Documentation</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg bg-muted p-2">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">LB</span>
              </div>
              <div className="absolute top-[30%] left-[20%] w-16 h-16 bg-background rounded-lg border shadow-sm flex items-center justify-center">
                <span className="font-medium text-sm">Server 1</span>
              </div>
              <div className="absolute top-[30%] right-[20%] w-16 h-16 bg-background rounded-lg border shadow-sm flex items-center justify-center">
                <span className="font-medium text-sm">Server 2</span>
              </div>
              <div className="absolute bottom-[30%] left-[20%] w-16 h-16 bg-background rounded-lg border shadow-sm flex items-center justify-center">
                <span className="font-medium text-sm">Server 3</span>
              </div>
              <div className="absolute bottom-[30%] right-[20%] w-16 h-16 bg-background rounded-lg border shadow-sm flex items-center justify-center">
                <span className="font-medium text-sm">Server 4</span>
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="50%"
                  y1="50%"
                  x2="28%"
                  y2="30%"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="text-muted-foreground"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="72%"
                  y2="30%"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="text-muted-foreground"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="28%"
                  y2="70%"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="text-muted-foreground"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="72%"
                  y2="70%"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="text-muted-foreground"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

