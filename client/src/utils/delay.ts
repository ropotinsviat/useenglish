export function delay(ms: number = 2000) {
  return new Promise<void>((res) => setTimeout(() => res(), ms));
}
