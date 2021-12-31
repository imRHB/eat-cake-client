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
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./Pages/User/Dashboard/Dashboard/Dashboard";
import Test from "./Pages/Test/Test/Test";
import ManageProducts from "./Pages/User/Dashboard/ManageProducts/ManageProducts";
import ManageOrder from "./Pages/User/Dashboard/ManageOrder/ManageOrder";
import MyOrder from "./Pages/User/Dashboard/MyOrder/MyOrder";
import AddReview from "./Pages/User/Dashboard/AddReview/AddReview";
import AddProduct from "./Pages/User/Dashboard/AddProduct/AddProduct";
import PlaceOrder from "./Pages/Details/PlaceOrder/PlaceOrder";
// import AuthProvider from "./contexts/AuthProvider/AuthProvider";
// import Register from "./Pages/User/Register/Register";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="cake" element={<Cakes />} />
            <Route path="cake/:id" element={<CakeDetails />} />
            <Route path="contact" element={<ContactForm />} />

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="manage-products" element={<ManageProducts />} />
            <Route path="manage-order" element={<ManageOrder />} />
            <Route path="my-order" element={<MyOrder />} />
            <Route path="add-review" element={<AddReview />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="place-order/:cakeId" element={<PlaceOrder />} />

            <Route path="test" element={<Test />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/register" element={<Register />} /> */}

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
