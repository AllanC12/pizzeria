import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Visit Our Pizzeria
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Come experience authentic Italian dining in a warm, family-friendly atmosphere
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground">
            <CardContent className="p-8 text-center space-y-4">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-primary-foreground/90">
                123 Little Italy Street<br />
                Downtown District<br />
                City, State 12345
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground">
            <CardContent className="p-8 text-center space-y-4">
              <div className="text-4xl mb-4">🕒</div>
              <h3 className="text-xl font-semibold">Hours</h3>
              <div className="text-primary-foreground/90 space-y-1">
                <p>Monday - Thursday: 11am - 10pm</p>
                <p>Friday - Saturday: 11am - 11pm</p>
                <p>Sunday: 12pm - 9pm</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground">
            <CardContent className="p-8 text-center space-y-4">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold">Contact</h3>
              <div className="text-primary-foreground/90 space-y-2">
                <p>(555) 123-PIZZA</p>
                <p>info@yourpizzeria.com</p>
                <Button variant="outline" className="mt-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-pizza-brown">
                  Make Reservation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-primary-foreground mb-6">Ready to Order?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-primary-foreground text-pizza-brown hover:bg-primary-foreground/90">
              Order Online
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-pizza-brown">
              Call for Delivery
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};