import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import LoginForm from "./loginform/LoginForm";
import Singup from "./signupform/Singup";
import ErrorPage from "./ErrorPage";
import Info from "./Componenet/Info";
import About from "./Componenet/About";
import Forgotpass from "./loginform/Forgotpass";

import Home from "./Componenet/Home";
import Contactus from "./Componenet/Contactus";
import Otp from "./Componenet/Otp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Singup />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="forgotpass" element={<Forgotpass />} />
          <Route path="/info" element={<Info />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/contactus" element={<Contactus />} />
          <Route path="/about/contactus/otpverification" element={<Otp />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
