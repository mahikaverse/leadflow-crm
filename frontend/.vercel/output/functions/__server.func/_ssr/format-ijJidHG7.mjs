function formatDate(iso) {
  if (!iso || Number.isNaN(new Date(iso).getTime())) return "Not scheduled";
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
function formatDateTime(iso) {
  if (!iso || Number.isNaN(new Date(iso).getTime())) return "Unknown";
  return new Date(iso).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}
function timeAgo(iso) {
  if (!iso || Number.isNaN(new Date(iso).getTime())) return "Unknown";
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 6e4);
  if (m < 1) return "just now";
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d ago`;
  return formatDate(iso);
}
function formatCurrency(n) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Number.isFinite(n) ? n : 0);
}
function daysFromNow(iso) {
  if (!iso || Number.isNaN(new Date(iso).getTime())) return Number.POSITIVE_INFINITY;
  return Math.ceil((new Date(iso).getTime() - Date.now()) / 864e5);
}
export {
  formatDate as a,
  formatDateTime as b,
  daysFromNow as d,
  formatCurrency as f,
  timeAgo as t
};
