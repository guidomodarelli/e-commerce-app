export function uniqId() {
  const hash1 = Math.random().toString(16).slice(-12);
  const hash2 = Math.random().toString(16).slice(-12);
  const hash3 = Math.random().toString(16).slice(-12);
  return `${hash1}-${hash2}-${hash3}`;
}
