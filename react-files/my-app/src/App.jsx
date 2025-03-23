import { Container, Box } from "@mui/material";
import Navbar from "./pages/Navbar";
import Greetings from "./pages/Greetings";
import AboutMe from "./pages/AboutMe";
import Timeline from "./pages/Timeline";
import Projects from "./pages/Projects";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <>
      
           <Navbar />
            <div id="greetings"><Greetings /></div>
            <div id="about"><AboutMe /></div>
            <div id="timeline"><Timeline /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><ContactForm/></div>
    </>
  );
}

export default App;
