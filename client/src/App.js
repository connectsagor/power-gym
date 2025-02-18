import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import OurClasses from "./components/OurClasses/OurClasses";
import ClassDetails from "./components/ClassDetails/ClassDetails";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/classes" element={<OurClasses />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/class-details" element={<ClassDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
