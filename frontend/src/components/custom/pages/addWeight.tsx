import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { logWeight } from "@/services/weightServices";
import { useState } from "react";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AddWeight() {
  const [weight, setWeight] = useState(0);
  const [note, setNote] = useState("");

  return (
    <Card className="max-w-lg mx-auto border-0 shadow-lg shadow-blue-100 my-4">
      <CardContent>
        <div className="flex items-center justify-center w-full my-15">
          <input
            type="number"
            step={0.1}
            className="border-0 w-40 text-5xl"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
          <Badge
            variant={"secondary"}
            className="border-blue-300 bg-blue-100 text-blue-700 px-3 py-2 "
          >
            LBS
          </Badge>
        </div>
        <div className="flex flex-col gap-2 py-5">
          <Label>NOTE</Label>
          <Input
            value={note}
            className="py-7"
            onChange={(e) => setNote(e.target.value)}
          />
          <Button
            className="bg-blue-500 hover:bg-blue-400 w-full py-7"
            onClick={() => {
              logWeight(weight, note);
              setWeight(0);
              setNote("");
            }}
          >
            <Check />
            Save Entry
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
