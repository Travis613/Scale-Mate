import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddWeight } from "./components/custom/pages/addWeight";
import { ViewWeights } from "./components/custom/pages/viewWeights";
import Header from "./components/custom/simple/header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/add" element={<AddWeight />} />
        <Route path="/" element={<ViewWeights />} />
      </Routes>
    </BrowserRouter>
  );
}
