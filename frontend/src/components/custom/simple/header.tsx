import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b-2 flex justify-between items-center py-2 px-2">
      <div className="flex items-center gap-2">
        <img src="screen.png" className="h-10 w-10" alt="Scale Mate Logo" />
        <h1 className="font-semibold text-2xl">Scale Mate</h1>
      </div>
      <div>
        <Button variant={"link"}>
          <Link to="/">Log Weight</Link>
        </Button>
        <Button variant={"link"}>
          <Link to="/viewWeights">History</Link>
        </Button>
      </div>
    </header>
  );
}
