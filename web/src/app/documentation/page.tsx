import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">EquiLoad Documentation</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Learn how to use EquiLoad to optimize your server infrastructure with AI-powered load balancing.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Learn the basics of EquiLoad and set up your first load balancer.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/documentation/getting-started" className="flex items-center justify-between">
                <span>Read Guide</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Load Balancing Algorithms</CardTitle>
            <CardDescription>Explore the different algorithms available in EquiLoad.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/documentation/algorithms" className="flex items-center justify-between">
                <span>Read Guide</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Recommendations</CardTitle>
            <CardDescription>Learn how our AI helps you choose the right algorithm.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/documentation/ai-recommendations" className="flex items-center justify-between">
                <span>Read Guide</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ML-Based Predictions</CardTitle>
            <CardDescription>Understand how our ML model optimizes server selection.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/documentation/ml-predictions" className="flex items-center justify-between">
                <span>Read Guide</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Popular Guides</h2>
        <div className="grid grid-cols-1 gap-2">
          {[
            { title: "Adding Backend Servers", href: "/docs/adding-servers" },
            { title: "Configuring Health Checks", href: "/docs/health-checks" },
            { title: "Understanding Metrics", href: "/docs/metrics" },
            { title: "API Reference", href: "/docs/api" },
            { title: "Troubleshooting", href: "/docs/troubleshooting" },
          ].map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted"
            >
              <span className="font-medium">{guide.title}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

