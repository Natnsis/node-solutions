type BudgetSliderProps = {
  value: number;
  onChange: (value: number) => void;
  error?: string;
};

export function BudgetSlider({
  value,
  onChange,
  error,
}: BudgetSliderProps) {
  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-foreground">
        Project Budget
      </label>

      <p className="mb-4 text-sm leading-6 text-muted-foreground">
        Choose an estimated budget range in Ethiopian Birr (ETB) so we can
        recommend the right project scope.
      </p>

      <div className="rounded-2xl border border-border bg-background p-5 shadow-card">
        <input
          type="range"
          min="50000"
          max="1000000"
          step="50000"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full accent-[var(--primary)]"
        />

        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground sm:text-sm">
          <span>ETB 50K</span>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-medium text-primary">
            ETB {value.toLocaleString()}
          </span>
          <span>ETB 1M+</span>
        </div>
      </div>

      {error ? <p className="mt-3 text-sm text-red-500">{error}</p> : null}
    </div>
  );
}