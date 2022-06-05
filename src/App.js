import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatDetail from "./pages/CatDetail";
import Home from "./pages/Home";
import { store } from "./redux/index"

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat-detail" element={<CatDetail />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
