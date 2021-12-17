import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Landing/Home/Home";
import CakeDetails from "./Pages/Details/CakeDetails/CakeDetails";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cakes/:id" element={<CakeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
