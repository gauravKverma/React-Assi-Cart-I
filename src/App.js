import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Banner from './components/Banner';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Faq from './components/Faq';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/faq" element={<Faq/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
