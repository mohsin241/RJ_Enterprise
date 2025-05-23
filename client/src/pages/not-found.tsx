import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | R J Enterprise</title>
        <meta name="description" content="The page you are looking for could not be found. Please navigate back to our home page to explore our premium steel products including TMT bars, steel plates, and hot rolled coils." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="min-h-[70vh] w-full flex items-center justify-center bg-neutral-50 py-16">
        <Card className="w-full max-w-md mx-4 shadow-lg">
          <CardContent className="pt-6 pb-6">
            <div className="flex flex-col items-center text-center mb-6">
              <AlertCircle className="h-16 w-16 text-primary mb-4" />
              <h1 className="text-2xl font-bold text-neutral-800 mb-2">Page Not Found</h1>
              <p className="text-neutral-600">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 mt-6">
              <Button asChild className="bg-primary hover:bg-primary-light transition-colors">
                <Link href="/">Return to Home Page</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/#products">Browse Our Products</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
