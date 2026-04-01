const brands = ["zapier", "spotify", "zoom", "slack", "amazon", "adobe"];

export function BrandLogos() {
  return (
    <section className="border-b border-card-border bg-background-soft">
      <div className="container-main py-8">
        <div className="grid grid-cols-2 gap-6 text-center text-sm uppercase tracking-[0.2em] text-text-muted sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div key={brand} className="opacity-80 transition hover:opacity-100">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}