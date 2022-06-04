import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatDetail from "./pages/CatDetail";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat-detail" element={<CatDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
