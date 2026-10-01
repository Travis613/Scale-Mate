import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddWeight } from "./components/custom/pages/addWeight";
import { ViewWeights } from "./components/custom/pages/viewWeights";
import Header from "./components/custom/simple/header";
import { logWeight } from "./services/weightServices";

export default function App() {
  logWeight(200, "My note");
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
