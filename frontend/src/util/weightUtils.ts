export function computeDateAndTime() {
  const dateObject = new Date();

  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();
  const date = `${month}/${day}/${year}`;

  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const time = `${hours}:${minutes < 10 ? 0 : ""}${minutes}`;

  return {
    date,
    time,
  };
}
