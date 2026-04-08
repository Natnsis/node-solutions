type ServiceOption = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

type ServiceInterestSelectorProps = {
  options: ReadonlyArray<ServiceOption>; // ✅ accept readonly
  selected: string[]; // ✅ should store slugs
  onToggle: (value: string) => void; // value = slug
  onSelectAll: () => void;
  onClearAll: () => void;
  error?: string;
};

export function ServiceInterestSelector({
  options,
  selected,
  onToggle,
  onSelectAll,
  onClearAll,
  error,
}: ServiceInterestSelectorProps) {
  const allSelected =
    options.length > 0 && options.every((opt) => selected.includes(opt.slug));

  return (
    <div>
      <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <label className="block text-sm font-medium text-foreground">
            What services are you interested in?
          </label>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Select one or more services so we can understand your goals and guide
            you with the right solution.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {!allSelected ? (
            <button
              type="button"
              onClick={onSelectAll}
              className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              Select All
            </button>
          ) : (
            <button
              type="button"
              onClick={onClearAll}
              className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {options.map((item) => {
          const isSelected = selected.includes(item.slug); // ✅ use slug

          return (
            <button
              key={item.slug}
              type="button"
              onClick={() => onToggle(item.slug)} // ✅ toggle slug
              className={`group relative overflow-hidden rounded-2xl border text-left transition-all duration-300 ${
                isSelected
                  ? "border-primary shadow-glow"
                  : "border-border hover:border-primary/40"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-black/65" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/80" />
              {isSelected && <div className="absolute inset-0 bg-primary/10" />}
              <div className="absolute inset-0 border border-white/8 bg-white/[0.02]" />

              <div className="relative flex min-h-[180px] flex-col justify-between p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="max-w-[85%]">
                    <h3
                      className={`text-base font-semibold transition ${
                        isSelected ? "text-primary" : "text-white"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/75">
                      {item.description}
                    </p>
                  </div>

                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs font-bold transition ${
                      isSelected
                        ? "border-primary bg-primary text-[var(--color-primary-foreground)]"
                        : "border-white/15 bg-black/20 text-transparent group-hover:text-white/50"
                    }`}
                  >
                    ✓
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/55">
                    Select Service
                  </p>

                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] transition ${
                      isSelected
                        ? "bg-primary text-[var(--color-primary-foreground)]"
                        : "border border-white/10 bg-white/5 text-white/70"
                    }`}
                  >
                    {isSelected ? "Selected" : "Available"}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {error ? <p className="mt-3 text-sm text-red-500">{error}</p> : null}
    </div>
  );
}