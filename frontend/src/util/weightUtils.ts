export function computeDateAndTime() {
  const now = new Date();

  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString("en-US", { hour12: true });

  return {
    date,
    time,
  };
}
