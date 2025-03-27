import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full px-10 border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">EL</span>
          </div>
          <span className="font-bold">EquiLoad</span>
        </div>

        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Features
          </Link>
          {/* <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Pricing
          </Link> */}
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Documentation
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Blog
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-end">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} EquiLoad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

