import { fetchWeights } from "@/services/weightServices";
import type { Weight } from "@/types/weight";
import { useEffect, useState } from "react";

export function ViewWeights() {
  const [weights, setWeights] = useState<Weight[]>([]);

  useEffect(
    () => () => {
      async function loadWeights() {
        const results = await fetchWeights();
        setWeights(results);
      }
      loadWeights();
    },
    [],
  );

  return <></>;
}
