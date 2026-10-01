import { computeDate, computeTime } from "@/util/weightUtils";

export async function logWeight(weight: number, note: string) {
  const data = {
    weight: weight,
    note: note,
    date: computeDate(),
    time: computeTime(),
  };

  const response = await fetch("http://localhost:8080/api/v1/logWeight", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  console.log(response);
}
