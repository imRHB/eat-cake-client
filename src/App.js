import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Landing/Home/Home";
import Cakes from "./Pages/Cakes/Cakes/Cakes";
import CakeDetails from "./Pages/Details/CakeDetails/CakeDetails";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Login from "./Pages/User/Login/Login";
import NotFound from "./Pages/Shared/Error/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import ContactForm from "./Pages/ContactForm/ContactForm";
// import AuthProvider from "./contexts/AuthProvider/AuthProvider";
// import Register from "./Pages/User/Register/Register";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cake" element={<Cakes />} />
          <Route path="/cake/:id" element={<CakeDetails />} />
          <Route path="/contact" element={<ContactForm />} />

          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
