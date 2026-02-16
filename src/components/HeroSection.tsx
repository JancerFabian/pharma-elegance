import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-pharmacy.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior moderno de farmacia FarmaVida"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-6">
        <div className="max-w-2xl pt-20">
          <span
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-body text-sm font-medium text-primary-foreground opacity-0 animate-fade-up"
          >
            🏥 Tu farmacia de confianza
          </span>
          <h1
            className="mb-6 font-display text-5xl font-bold leading-tight text-primary-foreground opacity-0 animate-fade-up md:text-7xl"
            style={{ animationDelay: "0.15s" }}
          >
            Cuidamos tu{" "}
            <span className="italic">salud</span>
            <br />
            cada día
          </h1>
          <p
            className="mb-8 max-w-lg font-body text-lg leading-relaxed text-primary-foreground/80 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Más de 20 años brindando atención farmacéutica personalizada con los
            mejores productos y el servicio que mereces.
          </p>
          <div
            className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="#contacto"
              className="group flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-body font-semibold text-primary-foreground transition-all hover:gap-3 hover:opacity-90"
            >
              Contáctanos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#servicios"
              className="rounded-lg border border-primary-foreground/30 px-6 py-3 font-body font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Nuestros servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
