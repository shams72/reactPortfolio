import Navbar from "./pages/Navbar";
import Greetings from "./pages/Greetings";
import AboutMe from "./pages/AboutMe";
import Timeline from "./pages/Timeline";
import Projects from "./pages/Projects";
import ContactForm from "./pages/ContactForm";
import { useMediaQuery, Typography, Box } from '@mui/material';


function App() {
  const isMobile = useMediaQuery('(max-width:7px)');

  const copyToClipboard = () => {

    const link = window.location.href; 
    navigator.clipboard.writeText(link)
      
  };

  

  if (isMobile) {
    return (
      <Box
        sx={{
          p: 4,
          textAlign: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: "column",
          alignItems: 'center',
          justifyContent: 'center',
          color:"white"
        }}
      >
        <Typography variant="h6">
          🚧 This site is currently not fully optimized for mobile devices. <br />
          For the best experience, please visit using a desktop.
        </Typography>
        <Typography variant="body2" onClick={copyToClipboard} sx={{ color: 'blue', cursor: 'pointer' }}>
          Click here to copy the link.
        </Typography>

      </Box>
    );
  }

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
