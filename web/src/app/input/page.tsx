import { ServerConfigForm } from "@/components/server-config-form"

export default function InputPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 relative">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-primary/20 via-background to-background"></div>

          {/* Animated connection lines */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Server nodes */}
          <div className="absolute top-[10%] left-[10%] w-16 h-16 rounded-full bg-primary/10 border border-primary/20"></div>
          <div className="absolute top-[20%] right-[15%] w-12 h-12 rounded-full bg-primary/10 border border-primary/20"></div>
          <div className="absolute bottom-[30%] left-[20%] w-14 h-14 rounded-full bg-primary/10 border border-primary/20"></div>
          <div className="absolute bottom-[15%] right-[25%] w-10 h-10 rounded-full bg-primary/10 border border-primary/20"></div>
        </div>

        <div className="container px-4 py-12 md:py-24 relative z-10">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="inline-block rounded-lg bg-primary/10 border border-primary/20 px-3 py-1 text-sm text-primary mb-4">
              Configure Your Load Balancer
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Set Up Your Load Balancing
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Add your backend servers and choose the optimal algorithm to distribute traffic efficiently. Our
              intelligent system will handle the rest.
            </p>
          </div>

          <ServerConfigForm />
        </div>
      </main>

      <footer className="px-10 w-full border-t py-6">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">EL</span>
            </div>
            <span className="font-bold">EquiLoad</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} EquiLoad. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

