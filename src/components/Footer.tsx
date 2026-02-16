import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-sm font-bold text-primary-foreground">+</span>
            </div>
            <span className="font-display text-lg font-bold text-foreground">FarmaVida</span>
          </div>
          <p className="flex items-center gap-1 font-body text-sm text-muted-foreground">
            © 2026 FarmaVida. Hecho con <Heart className="h-3.5 w-3.5 fill-destructive text-destructive" /> para tu salud.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
