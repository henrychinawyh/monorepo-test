export async function thinking(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), 1000);
  });
}
