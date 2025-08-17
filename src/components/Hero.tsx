import { Button } from "@/components/ui/button";
import heroPizza from "@/assets/hero-pizza.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Mais do que pizza</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Oferecemos experiência
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg">
              Ingredientes frescos, receitas tradicionais e uma paixão pela
              perfeição. Aproveite a sensação que nossas pizzas trazem a cada
              mordida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                target="_blank"
                href="https://instadelivery.com.br/telepizzaraizdeminas"
              >
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  Pedir online
                </Button>
              </a>
              <a
                target="_blank"
                href="https://instadelivery.com.br/telepizzaraizdeminas"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  Ver Menu
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Fresco todos os dias</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Receita de família</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Entrega rápida</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroPizza}
                alt="Delicious authentic Italian pizza with fresh ingredients"
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
