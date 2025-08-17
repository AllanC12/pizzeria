import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedPizzas } from "@/components/FeaturedPizzas";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="menu">
          <FeaturedPizzas />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-pizza-brown text-primary-foreground py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="text-3xl">🍕</div>
            <span className="text-3xl font-bold text-pizza-gold">Nonna Maria's</span>
          </div>
          <p className="text-primary-foreground/80 mb-6">
            Bringing authentic Italian flavors to your neighborhood since 1952
          </p>
          <div className="flex justify-center space-x-6 text-primary-foreground/60">
            <span>© 2024 Nonna Maria's Pizzeria</span>
            <span>•</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;