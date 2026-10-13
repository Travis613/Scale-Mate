export const computeDateAndTime = () => {
  const dateObject = new Date();

  function computeTime() {
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();

    if (minutes < 10) {
      return `${hours}:0${minutes}`;
    } else {
      return `${hours}:${minutes}`;
    }
  }

  function computeDate() {
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();

    return `${month}/${day}/${year}`;
  }

  return {
    computeDate,
    computeTime,
  };
};
