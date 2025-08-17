import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pizza.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pizza-brown/80 via-pizza-brown/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Authentic
              <span className="block text-pizza-gold">Italian Pizza</span>
              <span className="block text-lg lg:text-xl font-normal text-primary-foreground/90 mt-4">
                Made with love, served with passion
              </span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 max-w-lg">
              Experience the true taste of Italy with our traditional wood-fired pizzas, 
              crafted with the finest ingredients and time-honored recipes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Order Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-pizza-brown">
                View Menu
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-hero rounded-full blur-2xl opacity-30 animate-float"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};