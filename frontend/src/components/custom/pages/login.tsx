import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function Login() {
  const [username, setUsername] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  return (
    <Card className="max-w-md mx-auto my-6">
      <CardHeader className="py-4">
        <CardTitle className="text-3xl">Welcome Back</CardTitle>
        <p className="font-light">Sign in to record and view your progress</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div>
          <Label>Username:</Label>
          <Input
            className="py-6"
            placeholder="Unicorn Wizard"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <Label>Password:</Label>
          <Input
            type="password"
            className="py-6 tracking-[0.25em]"
            placeholder="........"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button size={"lg"} className={"w-full py-6 bg-[#2563eb]"}>
          Sign In <ArrowRight />
        </Button>
      </CardContent>
      <CardFooter className="flex gap-2 justify-center">
        <p>Don't have an account?</p>
        <Link to={"sign up"} className="text-blue-600">
          Sign Up
        </Link>
      </CardFooter>
    </Card>
  );
}
