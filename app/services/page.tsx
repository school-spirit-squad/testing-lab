import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Our Services</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            We offer a variety of services to meet your needs:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>End-to-end testing solutions</li>
            <li>Automated testing frameworks</li>
            <li>Quality assurance consulting</li>
            <li>Test strategy development</li>
            <li>Performance testing</li>
          </ul>
          <p>
            Contact us to learn more about how we can help with your testing
            needs.
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
