import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import  { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalSyles';
import GlobalContext from './context/app/GlobalContext';

function App() {
  const {progress,setProgress}=GlobalContext()
  const theme={
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media:{
      mobile: "786px",
      tab: "998px"
    }
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Router>
    <LoadingBar
        color='rgb(98 84 243)'
        progress={progress}
        height={3}
        onLoaderFinished={() => setProgress(0)}
      />

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
    </ThemeProvider>
    </>
  );
}

export default App;
