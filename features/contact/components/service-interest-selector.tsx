type ServiceInterestSelectorProps = {
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
};

export function ServiceInterestSelector({
  options,
  selected,
  onToggle,
}: ServiceInterestSelectorProps) {
  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-foreground">
        What are you interested in?
      </label>

      <p className="mb-4 text-sm leading-6 text-muted-foreground">
        Select one or more services so we can better understand your needs.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((item) => {
          const isSelected = selected.includes(item);

          return (
            <button
              key={item}
              type="button"
              onClick={() => onToggle(item)}
              className={`group flex items-center justify-between rounded-2xl border px-4 py-4 text-left transition-all duration-300 ${
                isSelected
                  ? "border-primary bg-primary/10 shadow-glow"
                  : "border-border bg-background hover:border-primary/40 hover:bg-secondary/60"
              }`}
            >
              <div>
                <p
                  className={`text-sm font-medium transition ${
                    isSelected ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Tailored solutions for your business
                </p>
              </div>

              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs font-bold transition ${
                  isSelected
                    ? "border-primary bg-primary text-[var(--color-primary-foreground)]"
                    : "border-border bg-card text-transparent group-hover:text-muted-foreground"
                }`}
              >
                ✓
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}