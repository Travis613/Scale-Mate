const dateObject = new Date();

export function computeDate() {
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();

  return `${month}/${day}/${year}`;
}

export function computeTime() {
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();

  if (minutes < 10) {
    return `${hours}:0${minutes}`;
  } else {
    return `${hours}:${minutes}`;
  }
}
