"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Plus, Trash2 } from "lucide-react"

export function ServerInput() {
  const [servers, setServers] = useState<string[]>([""])
  const [algorithm, setAlgorithm] = useState<string>("round-robin")

  const addServer = () => {
    setServers([...servers, ""])
  }

  const removeServer = (index: number) => {
    if (servers.length > 1) {
      const newServers = [...servers]
      newServers.splice(index, 1)
      setServers(newServers)
    }
  }

  const updateServer = (index: number, value: string) => {
    const newServers = [...servers]
    newServers[index] = value
    setServers(newServers)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the submission, such as sending to your API
    console.log(
      "Servers:",
      servers.filter((s) => s.trim() !== ""),
    )
    console.log("Algorithm:", algorithm)
    alert("Load balancer configuration submitted!")
  }

  return (
    <section id="get-started" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Start Balancing Your Load</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Enter your server URLs below and choose your preferred load balancing algorithm. We'll handle the rest.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-2xl py-8">
          <Card>
            <CardHeader>
              <CardTitle>Configure Your Load Balancer</CardTitle>
              <CardDescription>Add the servers you want to balance traffic between</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Load Balancing Algorithm
                  </label>
                  <Select value={algorithm} onValueChange={setAlgorithm}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select algorithm" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="round-robin">Round Robin</SelectItem>
                      <SelectItem value="least-connections">Least Connections</SelectItem>
                      <SelectItem value="ip-hash">IP Hash</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Server URLs
                  </label>
                  <div className="space-y-2">
                    {servers.map((server, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Input
                          placeholder="https://your-server-url.com"
                          value={server}
                          onChange={(e) => updateServer(index, e.target.value)}
                          required={index === 0}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => removeServer(index)}
                          disabled={servers.length === 1}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove server</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button type="button" variant="outline" size="sm" className="mt-2" onClick={addServer}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Server
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full">
                  Create Load Balancer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

