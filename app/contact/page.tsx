"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Simple validation
    if (!name || !email || !message) {
      setError("Please fill in all fields")
      return
    }

    // In a real app, you would send the form data to a server
    // For this demo, we'll just show a success message
    setSubmitted(true)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <div className="text-center py-4">
              <h3 className="text-lg font-medium mb-2">Thank you for your message!</h3>
              <p>We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} id="contact-form">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" data-testid="name-input" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    data-testid="email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    data-testid="message-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                {error && (
                  <p className="text-red-500" data-testid="error-message">
                    {error}
                  </p>
                )}
              </div>
            </form>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/">Home</Link>
          </Button>
          {!submitted && (
            <Button type="submit" form="contact-form" data-testid="submit-button">
              Send Message
            </Button>
          )}
        </CardFooter>
      </Card>
    </main>
  )
}
