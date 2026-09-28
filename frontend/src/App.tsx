import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/custom/pages/login";
import { SignUp } from "./components/custom/pages/sign-up";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
