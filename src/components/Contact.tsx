import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-foreground">Get in </span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to taste authentic Italian pizza? We're here to serve you!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-xl shadow-md border border-border">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  Location
                </h3>
                <p className="text-muted-foreground">
                  123 Main Street<br />
                  Little Italy District<br />
                  New York, NY 10013
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-md border border-border">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground flex items-center gap-3">
                  <span className="text-2xl">🕒</span>
                  Hours
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Thursday: 11am - 10pm</p>
                  <p>Friday - Saturday: 11am - 11pm</p>
                  <p>Sunday: 12pm - 9pm</p>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-md border border-border">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  Contact
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Phone: (555) 123-PIZZA</p>
                  <p>Email: hello@bellapizza.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Order Now</h3>
              <div className="space-y-4">
                <Button variant="hero" size="lg" className="w-full py-6 text-lg">
                  🍕 Order for Delivery
                </Button>
                <Button variant="outline" size="lg" className="w-full py-6 text-lg">
                  📞 Call to Order
                </Button>
                <Button variant="secondary" size="lg" className="w-full py-6 text-lg">
                  🏪 Order for Pickup
                </Button>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg">
                <p className="text-sm text-center text-muted-foreground">
                  <strong>Free Delivery</strong> on orders over $25 within 3 miles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;