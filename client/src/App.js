import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Segments from "./components/Segments/Segments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Header />}></Route> */}
        <Route path="/" element={<Segments />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
