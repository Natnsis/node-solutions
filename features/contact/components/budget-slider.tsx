type BudgetSliderProps = {
  value: number;
  onChange: (value: number) => void;
};

export function BudgetSlider({ value, onChange }: BudgetSliderProps) {
  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-foreground">
        Project Budget
      </label>

      <p className="mb-4 text-sm leading-6 text-muted-foreground">
        Give us a rough estimate so we can recommend the right solution scope.
      </p>

      <div className="rounded-2xl border border-border bg-background p-5 shadow-card">
        <input
          type="range"
          min="1000"
          max="20000"
          step="1000"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full accent-[var(--primary)]"
        />

        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground sm:text-sm">
          <span>$1K</span>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-medium text-primary">
            ${value.toLocaleString()}
          </span>
          <span>$20K+</span>
        </div>
      </div>
    </div>
  );
}