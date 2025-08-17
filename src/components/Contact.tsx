import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-foreground">Entre em </span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                contato
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Pronto para saborear uma autêntica pizza? Estamos aqui para atendê-lo!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-xl shadow-md border border-border">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  Localização
                </h3>
                <p className="text-muted-foreground">
                  São Francisco de Paula<br />
                  Minas Gerais<br />
                  Delivery e retirada
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-md border border-border">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground flex items-center gap-3">
                  <span className="text-2xl">🕒</span>
                 Horários
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Segunda - Terça: 17:00 - 20:00</p>
                  <p>Sexta - Sábado: 17:00 - 22:00</p>
                  <p>Domingo: 18:00 - 23:00</p>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-md border border-border">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  Contato
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Telefone: <a href="wa.me/3799115-8901"></a></p>
                  <p>Instagram: <a target="_blank" href="https://www.instagram.com/raizdeminas5?igsh=MXNidHRvaGpxM2RrdA==">@raizdeminas</a></p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Pedir Agora</h3>
              <div className="space-y-4">
                <Button variant="hero" size="lg" className="w-full py-6 text-lg">
                  🍕 Pedir por delivery
                </Button>
                <Button variant="outline" size="lg" className="w-full py-6 text-lg">
                  📞 Ligar para pedir
                </Button>
                <Button variant="secondary" size="lg" className="w-full py-6 text-lg">
                  🏪 Reservar retirada
                </Button>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg">
                <p className="text-sm text-center text-muted-foreground">
                  <strong>Entregas longas</strong> sujeito à taxas
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