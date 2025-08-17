import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
              R
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              Raiz de Minas
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </a>
            <a
              href="#menu"
              className="text-foreground hover:text-primary transition-colors"
            >
              Menu
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contatos
            </a>
          </div>

          <a
            target="_blank"
            href="https://instadelivery.com.br/telepizzaraizdeminas"
          >
            <Button variant="warm" size="lg">
              Pedir agora
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
