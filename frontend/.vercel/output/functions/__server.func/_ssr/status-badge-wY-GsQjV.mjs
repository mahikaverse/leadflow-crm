import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./app-layout-RVqOMfVp.mjs";
const styles = {
  New: "bg-info/10 text-info border-info/20",
  Contacted: "bg-warning/15 text-warning-foreground border-warning/30 dark:text-warning",
  Qualified: "bg-accent text-accent-foreground border-primary/20",
  Converted: "bg-success/15 text-success border-success/30",
  Lost: "bg-destructive/10 text-destructive border-destructive/20"
};
function StatusBadge({ status, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        styles[status],
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-current" }),
        status
      ]
    }
  );
}
export {
  StatusBadge as S
};
