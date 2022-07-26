import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Services from './components/Services';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
     <Header/>
     
    {/* ----------Router--------- */}
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/services" element={<Services/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
    </Routes>

    <Footer/>
    </Router>
    </>
  );
}

export default App;
