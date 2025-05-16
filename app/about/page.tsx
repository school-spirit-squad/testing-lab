import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">About Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">This is the about page of our demo application.</p>
          <p className="mb-4">We're showcasing how to test navigation and interactions with Playwright.</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
