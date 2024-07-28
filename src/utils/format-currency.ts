export function formatCurrency(currency: number) {
  return Intl.NumberFormat("EN-en", {
    style: "currency",
    currency: "USD",
  }).format(currency);
}
