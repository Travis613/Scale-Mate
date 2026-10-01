const dateObject = new Date();

export function computeDate() {
  const day = dateObject.getDay();
  const month = dateObject.getMonth();
  const year = dateObject.getFullYear();

  return `${day}/${month}/${year}`;
}

export function computeTime() {
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();

  return `${hours}:${minutes}`;
}
