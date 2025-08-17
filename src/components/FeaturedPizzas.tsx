import { Button } from "@/components/ui/button";

const FeaturedPizzas = () => {
  const pizzas = [
    {
      name: "Calabresa",
      description: "Pizza de calabresa com fatias selecionadas, cheddars espalhado uniformemente e massa artesanal",
      price: "R$66,90",
      image: "🍕",
      popular: true
    },
    {
      name: "Bacon com milho",
      description: "Pizza de bacon com milho, bacon crocante selecionado, milho doce distribuído uniformemente",
      price: "R$69,90",
      image: "🍕",
      popular: false
    },
    {
      name: "Frango com Catupiry",
      description: "Pizza de frango com catupiry, frango temperado cuidadosamente, catupiry cremoso espalhado uniformemente",
      price: "R$69,90",
      image: "🍕",
      popular: true
    }
  ];

  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-foreground">Pizzas em </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              destaque
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             Descubra nossas criações mais queridas, cada uma feita com paixão e ingredientes italianos autênticos
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pizzas.map((pizza, index) => (
            <div key={index} className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {pizza.popular && (
                <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-semibold px-4 py-2 text-center">
                  Mais popular
                </div>
              )}
              
              <div className="p-8">
                <div className="text-6xl mb-6 text-center">{pizza.image}</div>
                
                <h3 className="text-2xl font-bold mb-3 text-center text-card-foreground">{pizza.name}</h3>
                
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  {pizza.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-primary">{pizza.price}</span>
                  <Button variant="warm" className="px-6">
                    Adicionar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
           Ver Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPizzas;