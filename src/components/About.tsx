const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Story
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Generations</h3>
              <p className="text-muted-foreground">
                Three generations of authentic Italian pizza-making tradition, passed down through our family.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                ♥
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Fresh Ingredients</h3>
              <p className="text-muted-foreground">
                We source the finest local and imported ingredients daily to ensure authentic flavors in every bite.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                ★
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Community Love</h3>
              <p className="text-muted-foreground">
                Proudly serving our community with love, passion, and the best pizza in town for over 30 years.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20">
            <p className="text-lg text-foreground italic">
              "Every pizza we make is crafted with the same care and attention as if we were making it for our own family. 
              That's the Bella Pizza promise - authentic taste, every time."
            </p>
            <p className="text-primary font-semibold mt-4">- Marco Rossini, Owner & Head Chef</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;