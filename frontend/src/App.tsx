import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddWeight } from "./components/custom/pages/addWeight";
import { ViewWeights } from "./components/custom/pages/viewWeights";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/add" element={<AddWeight />} />
        <Route path="/view" element={<ViewWeights />} />
      </Routes>
    </BrowserRouter>
  );
}
