import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome to our App</CardTitle>
          <CardDescription>A simple app for Playwright testing</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">This is a demo application to showcase end-to-end testing with Playwright.</p>
          <p className="mb-4">Navigate through the pages and try submitting the contact form.</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild>
            <Link href="/about">About Us</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
