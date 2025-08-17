import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🍕</div>
            <span className="text-2xl font-bold text-pizza-red">Nonna Maria's</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-pizza-red transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-pizza-red transition-colors">About</a>
            <a href="#menu" className="text-foreground hover:text-pizza-red transition-colors">Menu</a>
            <a href="#contact" className="text-foreground hover:text-pizza-red transition-colors">Contact</a>
          </div>
          
          <Button variant="warm" className="hidden md:inline-flex">
            Order Now
          </Button>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden">
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-foreground"></div>
              <div className="w-6 h-0.5 bg-foreground"></div>
              <div className="w-6 h-0.5 bg-foreground"></div>
            </div>
          </Button>
        </div>
      </div>
    </nav>
  );
};