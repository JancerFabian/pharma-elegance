import { Pill, Heart, Truck, Clock, Stethoscope, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  { icon: Pill, title: "Medicamentos", description: "Amplio catálogo de medicamentos genéricos y de marca con los mejores precios." },
  { icon: Heart, title: "Salud y Bienestar", description: "Productos de cuidado personal, vitaminas y suplementos para toda la familia." },
  { icon: Truck, title: "Envío a Domicilio", description: "Recibe tus medicamentos en la puerta de tu casa de forma rápida y segura." },
  { icon: Clock, title: "Atención 24/7", description: "Servicio de guardia disponible las 24 horas, los 7 días de la semana." },
  { icon: Stethoscope, title: "Asesoría Farmacéutica", description: "Consulta gratuita con nuestros farmacéuticos certificados." },
  { icon: ShieldCheck, title: "Productos Certificados", description: "Todos nuestros productos cuentan con registro sanitario y garantía de calidad." },
];

const ServicesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="servicios" className="section-gradient py-24">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="mb-2 inline-block font-body text-sm font-semibold uppercase tracking-widest text-primary">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Todo lo que necesitas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-muted-foreground">
            Ofrecemos una amplia gama de servicios farmacéuticos pensados para tu comodidad y bienestar.
          </p>
        </div>

        <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: gridVisible ? `${i * 100}ms` : "0ms" }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
