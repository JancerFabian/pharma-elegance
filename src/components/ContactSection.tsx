import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation<HTMLFormElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Error", description: "Por favor completa todos los campos requeridos.", variant: "destructive" });
      return;
    }
    toast({ title: "¡Mensaje enviado!", description: "Nos pondremos en contacto contigo pronto." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contacto" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="mb-2 inline-block font-body text-sm font-semibold uppercase tracking-widest text-primary">Contacto</span>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">¿Tienes alguna pregunta?</h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-muted-foreground">Estamos aquí para ayudarte. Escríbenos y te responderemos a la brevedad.</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div
            ref={infoRef}
            className={`space-y-6 lg:col-span-2 transition-all duration-700 ${infoVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            {[
              { icon: MapPin, label: "Dirección", value: "Av. Principal #123, Centro" },
              { icon: Phone, label: "Teléfono", value: "809-000-0000" },
              { icon: Mail, label: "Email", value: "info@farmavida.com" },
              { icon: Clock, label: "Horario", value: "Lun - Sáb: 8:00 AM - 10:00 PM" },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`flex items-start gap-4 transition-all duration-500 ${infoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: infoVisible ? `${i * 100}ms` : "0ms" }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-muted-foreground">{item.label}</p>
                  <p className="font-body font-semibold text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`space-y-5 lg:col-span-3 transition-all duration-700 ${formVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-body text-sm font-medium text-foreground">Nombre completo *</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} className="w-full rounded-lg border border-input bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="mb-1.5 block font-body text-sm font-medium text-foreground">Email *</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} className="w-full rounded-lg border border-input bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="tu@email.com" />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block font-body text-sm font-medium text-foreground">Teléfono</label>
              <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={20} className="w-full rounded-lg border border-input bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="809-000-0000" />
            </div>
            <div>
              <label className="mb-1.5 block font-body text-sm font-medium text-foreground">Mensaje *</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} rows={5} className="w-full resize-none rounded-lg border border-input bg-card px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="¿En qué podemos ayudarte?" />
            </div>
            <button type="submit" className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-body font-semibold text-primary-foreground transition-opacity hover:opacity-90">
              <Send className="h-4 w-4" />
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
