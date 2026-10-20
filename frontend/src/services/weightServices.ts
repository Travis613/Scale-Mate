import { computeDateAndTime } from "@/util/weightUtils";

const POSTROUTE = "http://localhost:8080/api/v1/logWeight";
const GETROUTE = "http://localhost:8080/api/v1/viewWeights";

export async function logWeight(weight: number, note: string) {
  const { date, time } = computeDateAndTime();

  const data = {
    weight,
    note,
    date,
    time,
  };

  try {
    const response = await fetch(POSTROUTE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const ERRORMESSAGE = await response.text();
      throw new Error(`error: ${ERRORMESSAGE}`);
    }
  } catch (error) {
    console.error(`Failed to log weight: ${error}`);
    throw new Error(`Error: ${error}`);
  }
}

export async function fetchWeights() {
  try {
    const response = await fetch(GETROUTE);
    const data = await response.json();
    if (data !== null) {
      return data.reverse();
    }
  } catch (error) {
    console.error(`Error fetching weights: ${error}`);
  }
}
