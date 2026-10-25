import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddWeight } from "./components/custom/pages/addWeight";
import { ViewWeights } from "./components/custom/pages/viewWeights";
import Header from "./components/custom/simple/header";
import { UpdateWeight } from "./components/custom/pages/updateWeight";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AddWeight />} />
        <Route path="/viewWeights" element={<ViewWeights />} />
        <Route path="/updateWeight" element={<UpdateWeight />} />
      </Routes>
    </BrowserRouter>
  );
}
