import { Check } from "lucide-react";

const features = [
  "Más de 20 años de experiencia",
  "Equipo de farmacéuticos certificados",
  "Precios accesibles y competitivos",
  "Atención personalizada garantizada",
  "Amplio inventario de medicamentos",
  "Ubicación céntrica y accesible",
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left - Stats */}
          <div>
            <span className="mb-2 inline-block font-body text-sm font-semibold uppercase tracking-widest text-primary">
              Sobre Nosotros
            </span>
            <h2 className="mb-6 font-display text-4xl font-bold text-foreground md:text-5xl">
              Tu salud es nuestra{" "}
              <span className="italic text-primary">prioridad</span>
            </h2>
            <p className="mb-8 font-body text-lg leading-relaxed text-muted-foreground">
              En FarmaVida nos dedicamos a ofrecer el mejor servicio farmacéutico
              con atención cercana y profesional. Nuestro equipo está comprometido
              con tu bienestar y el de tu familia.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3.5 w-3.5 text-primary-foreground" />
                  </div>
                  <span className="font-body text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "20+", label: "Años de experiencia" },
              { number: "50K+", label: "Clientes satisfechos" },
              { number: "10K+", label: "Productos disponibles" },
              { number: "24/7", label: "Atención continua" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card p-8 text-center transition-all hover:shadow-md"
              >
                <div className="mb-2 font-display text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="font-body text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
