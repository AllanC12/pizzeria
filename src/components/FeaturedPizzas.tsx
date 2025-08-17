import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pizzas = [
  {
    name: "Margherita Classica",
    description: "San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil",
    price: "$18",
    image: "🍕"
  },
  {
    name: "Pepperoni Supreme",
    description: "Spicy pepperoni, mozzarella, tomato sauce, oregano",
    price: "$22",
    image: "🍕"
  },
  {
    name: "Quattro Stagioni",
    description: "Artichokes, ham, mushrooms, olives, mozzarella",
    price: "$25",
    image: "🍕"
  },
  {
    name: "Prosciutto & Arugula",
    description: "Prosciutto di Parma, arugula, cherry tomatoes, parmesan",
    price: "$26",
    image: "🍕"
  }
];

export const FeaturedPizzas = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Signature Pizzas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Handcrafted with traditional techniques and the finest ingredients
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pizzas.map((pizza, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card-warm">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-6xl mb-4 group-hover:animate-float">{pizza.image}</div>
                <h3 className="text-xl font-semibold text-foreground">{pizza.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pizza.description}</p>
                <div className="pt-4">
                  <div className="text-2xl font-bold text-pizza-red mb-4">{pizza.price}</div>
                  <Button variant="warm" className="w-full">
                    Add to Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-pizza-red text-pizza-red hover:bg-pizza-red hover:text-primary-foreground">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};