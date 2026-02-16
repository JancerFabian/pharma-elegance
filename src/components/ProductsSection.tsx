import { Star } from "lucide-react";

const products = [
  {
    name: "Vitamina C 1000mg",
    category: "Vitaminas",
    price: "$12.99",
    rating: 4.8,
    emoji: "🍊",
  },
  {
    name: "Omega 3 Fish Oil",
    category: "Suplementos",
    price: "$18.50",
    rating: 4.9,
    emoji: "🐟",
  },
  {
    name: "Crema Hidratante",
    category: "Cuidado Personal",
    price: "$9.99",
    rating: 4.7,
    emoji: "🧴",
  },
  {
    name: "Multivitamínico Familiar",
    category: "Vitaminas",
    price: "$15.99",
    rating: 4.6,
    emoji: "💊",
  },
];

const ProductsSection = () => {
  return (
    <section id="productos" className="section-gradient py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="mb-2 inline-block font-body text-sm font-semibold uppercase tracking-widest text-primary">
            Productos Destacados
          </span>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Los más vendidos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-muted-foreground">
            Descubre nuestros productos más populares, seleccionados por nuestros expertos para tu bienestar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-48 items-center justify-center bg-secondary">
                <span className="text-7xl transition-transform duration-300 group-hover:scale-110">
                  {product.emoji}
                </span>
              </div>
              <div className="p-6">
                <span className="mb-1 inline-block font-body text-xs font-medium uppercase tracking-wider text-primary">
                  {product.category}
                </span>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-body text-xl font-bold text-primary">
                    {product.price}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-body text-sm text-muted-foreground">
                      {product.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
