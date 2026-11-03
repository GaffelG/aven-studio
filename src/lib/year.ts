/** Current year, cached so it can be used in prerendered components. */
export async function getCurrentYear(): Promise<number> {
  "use cache";
  return new Date().getFullYear();
}
