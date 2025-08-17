const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-foreground">Nossa </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              História
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                😍
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                Paixão
              </h3>
              <p className="text-muted-foreground">
                Preparando pizza autêntica com paixão, tradição e sabor em cada
                fatia.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                ❤️
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                Aprovação
              </h3>
              <p className="text-muted-foreground">
                Cada fatia é feita com dedicação e ingredientes de qualidade,
                garantindo a satisfação de todos os clientes.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                😋
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                Perfeição
              </h3>
              <p className="text-muted-foreground">
                Qualidade em cada ingrediente, perfeição em cada pizza.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20">
            <p className="text-lg text-foreground italic">
              "Eu nunca comi uma pizza tão saborosa! A massa é leve e crocante,
              os ingredientes super frescos e dá pra sentir que cada detalhe é
              feito com muito cuidado. Chegou quentinha e no tempo certo. Com
              certeza virei cliente fiel."
            </p>
            <p className="text-primary font-semibold mt-4">
              - Marco Rossini, Owner & Head Chef
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
