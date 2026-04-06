import { CheckCircle2, AlertCircle } from "lucide-react";

type ToastProps = {
  title: string;
  description?: string;
  variant?: "success" | "error";
};

export function Toast({
  title,
  description,
  variant = "success",
}: ToastProps) {
  const isSuccess = variant === "success";

  return (
    <div
      className={`rounded-2xl border p-4 shadow-card backdrop-blur-md transition ${
        isSuccess
          ? "border-green-500/20 bg-green-500/10"
          : "border-red-500/20 bg-red-500/10"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`mt-0.5 ${
            isSuccess ? "text-green-500" : "text-red-500"
          }`}
        >
          {isSuccess ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">{title}</p>
          {description ? (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}