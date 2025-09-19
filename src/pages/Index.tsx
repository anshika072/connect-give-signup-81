import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Heart className="h-12 w-12 text-primary" fill="currentColor" />
          <span className="text-3xl font-bold text-foreground">ShareCare</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold">Welcome to ShareCare</h1>
        <p className="text-xl text-muted-foreground mb-8">Connect, share resources, and make a difference in your community.</p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
            <Link to="/signup">Get Started</Link>
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
