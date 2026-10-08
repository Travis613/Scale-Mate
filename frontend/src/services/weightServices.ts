import { computeDate, computeTime } from "@/util/weightUtils";

export async function logWeight(weight: number, note: string) {
  const data = {
    weight: weight,
    note: note,
    date: computeDate(),
    time: computeTime(),
  };

  try {
    const response = await fetch("http://localhost:8080/api/v1/logWeight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      return `Error: ${response}`;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function fetchWeights() {
  try {
    const response = await fetch("http://localhost:8080/api/v1/viewWeights");
    const data = await response.json();
    if (data !== null) {
      return data;
    }
  } catch (error) {
    console.log("Error");
  }
}
