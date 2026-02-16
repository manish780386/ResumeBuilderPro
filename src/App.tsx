import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Templates from "./pages/Templates";
import Pricing from "./pages/Pricing";
import ATSChecker from "./pages/ATSChecker";
import TemplateBuilder from "./pages/TemplateBuilder";
import Template1ModernBlue from "./pages/Template1ModernBlue";
import Template2ProfessionalGray from "./pages/Template2ProfessionalGray";
import Template3CreativeOrange from "./pages/Template3CreativeOrange";
import Template4MinimalWhite from "./pages/Template4MinimalWhite";
import Template5CorporateBlack from "./pages/Template5CorporateBlack";
import TemplateElegantPurple from "./pages/TemplateElegantPurple";
import Template7ATSClean from "./pages/Template7ATSClean";
import Template8SimpleClassic from "./pages/Template8SimpleClassic";
import Template9BoldDesigner from "./pages/Template9BoldDesigner";
import History from "./pages/History";











export default function App() {
  return (



    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />


        <Route path="/templates" element={<Templates />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/ats-checker" element={<ATSChecker />} />
        <Route path="/builder/template/:id" element={<TemplateBuilder />} />
        <Route path="/builder/template/1" element={<Template1ModernBlue />} />
        <Route path="/builder/template/2" element={<Template2ProfessionalGray />} />
        <Route path="/builder/template/3" element={<Template3CreativeOrange />} />
        <Route path="/builder/template/4" element={<Template4MinimalWhite />} />
        <Route path="/builder/template/5" element={<Template5CorporateBlack />} />
        <Route path="/builder/template/6" element={<TemplateElegantPurple />} />
        <Route path="/builder/template/7" element={<Template7ATSClean />} />
        <Route path="/builder/template/8" element={<Template8SimpleClassic />} />
        <Route path="/builder/template/9" element={<Template9BoldDesigner />} />

        <Route path="/history" element={<History />} />

      </Routes>
      <Footer />
    </BrowserRouter>



  );
}
