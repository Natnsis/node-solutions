const brands = ["zapier", "spotify", "zoom", "slack", "amazon", "adobe"];

export function BrandLogos() {
  return (
    <section className="border-b border-border bg-[var(--background-soft)]">
      <div className="container-main py-8">
        <div className="grid grid-cols-2 gap-6 text-center text-sm uppercase tracking-[0.2em] text-muted-foreground sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="opacity-80 transition duration-300 hover:opacity-100 hover:text-white"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}