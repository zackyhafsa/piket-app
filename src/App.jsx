import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DaftarPiket } from "./components/DaftarPiket";
import Navbar from "./components/Navbar";
import "./index.css";
import TambahPiket from "./components/tambahPiket";
import Today from "./components/Today";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Today />}></Route>
        <Route path="/piket" element={<DaftarPiket />}></Route>
        <Route path="add" element={<TambahPiket />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
