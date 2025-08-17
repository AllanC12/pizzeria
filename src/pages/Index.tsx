import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedPizzas from "@/components/FeaturedPizzas";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <FeaturedPizzas />
      <Contact />
      
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xs">
              R
            </div>
            <span className="text-lg font-semibold text-card-foreground">Raiz de Minas</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 Raiz de Minas. Developed by Ansoft with Lovable.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
