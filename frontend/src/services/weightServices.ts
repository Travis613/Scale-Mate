import { computeDateAndTime } from "@/util/weightUtils";

const POSTROUTE = "http://localhost:8080/api/v1/logWeight";

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
    // rethrow error
  }
}

export async function fetchWeights() {
  try {
    const response = await fetch("http://localhost:8080/api/v1/viewWeights");
    const data = await response.json();
    if (data !== null) {
      return data.reverse();
    }
  } catch (error) {
    console.log("Error");
  }
}
