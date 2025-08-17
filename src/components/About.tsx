import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A family tradition passed down through generations, bringing authentic Italian flavors to your table
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-pizza-red">Family Heritage</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our pizzeria began as a small family business in 1952, when Nonna Maria brought her 
                secret recipes from Naples to our local community. Today, we continue her legacy 
                with the same passion and dedication to authentic Italian cuisine.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-pizza-red">Fresh Ingredients</h3>
              <p className="text-muted-foreground leading-relaxed">
                We source only the finest ingredients - San Marzano tomatoes, fresh mozzarella made daily, 
                and herbs grown in our own garden. Every pizza is a celebration of quality and taste.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-pizza-red">Wood-Fired Tradition</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our traditional wood-fired oven, imported directly from Italy, reaches temperatures 
                of 900°F to create that perfect crispy crust and authentic smoky flavor you can't 
                find anywhere else.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 text-center shadow-card-warm border-0 bg-card">
              <div className="text-3xl font-bold text-pizza-red mb-2">70+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </Card>
            
            <Card className="p-6 text-center shadow-card-warm border-0 bg-card">
              <div className="text-3xl font-bold text-pizza-orange mb-2">20+</div>
              <div className="text-muted-foreground">Signature Pizzas</div>
            </Card>
            
            <Card className="p-6 text-center shadow-card-warm border-0 bg-card">
              <div className="text-3xl font-bold text-pizza-gold mb-2">100%</div>
              <div className="text-muted-foreground">Fresh Daily</div>
            </Card>
            
            <Card className="p-6 text-center shadow-card-warm border-0 bg-card">
              <div className="text-3xl font-bold text-pizza-red mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};