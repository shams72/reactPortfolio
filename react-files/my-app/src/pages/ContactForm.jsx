import  { useState } from "react";
import space from "../assets/space2.jpg"
import { Snackbar, Alert } from "@mui/material";
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import resume from "../assets/Lebenslauf.pdf"



const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [open, setOpen] = useState(false);  

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    try {
      const formFields = new FormData();
      formFields.append('entry.650640414', formData.name); 
      formFields.append('entry.263452189', formData.email); 
      formFields.append('entry.1132895996', formData.message); 

      // Send data to Google Form via POST request
      const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdHjyUB31ddAqSS_TK12YL2dsrj0GZrUbpu3HNzOqs017zsJg/formResponse', {
        method: 'POST',
        body: formFields,
      });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setOpen(true);
      } 
    } catch (error) {
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setOpen(true);
    }
  };

  return (
      <div
        style={{     
          height: "100vh",
          width: "100%",   
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url('"+ space + "')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          gap:"10px"
        }}
      >
      <div
          style={{
            flex: 1,
            paddingRight: '0', 
            maxWidth: '800px',
            width: '100%',
            height: 'auto',
            marginLeft:"80px",
            marginBottom: '80px',
          }}
        >
        <Paper elevation={3} sx={{background: "rgba(222, 221, 228, 0.96)", p: 4, textAlign: "center", height: "90%",width:"85%"  }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Contact Me
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, borderRadius: 2,}}>
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              sx={{ mb: 1 }}
            />
            <TextField
              fullWidth
              label="Your Email"
              name="email"
              variant="outlined"
              type="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Your Message"
              name="message"
              variant="outlined"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}

              sx={{ mb: 3 }}
            />
            <Button variant="contained" color="primary" type="submit"  sx={{ background: 'linear-gradient(90deg,rgb(89, 12, 231),rgb(14, 236, 62))'}} fullWidth>
              Send Message
            </Button>
            <Snackbar
              open={open}
              autoHideDuration={3000} // Duration in ms before it disappears
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }} // Position of the snackbar
            >
              <Alert onClose={handleClose} severity="success">
                Message sent!
              </Alert>
            </Snackbar>
          </Box>
        </Paper>
      </div>

      {/* Right Side - Contact Details */}
      <Box
        sx={{         
          width: "100%",
          maxWidth: "700px", // Fixed max width to keep it small
          pl: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(243, 243, 239, 0.79)",
          p: 4,
          borderRadius: 2,
          height: "auto",
          marginRight: "30px",
          textAlign: "center",
          marginBottom: "70px",
          boxSizing: "border-box",
        }}
      >

        <Typography variant="h5" fontWeight="bold">
          Get in Touch
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Email: <strong>shamsmohammed726@gmail.com</strong>
        </Typography>
        <Button
          variant="contained"
          size="large"
          endIcon={<DownloadIcon />}
          href={resume}
          download
           sx={{ 
            background: 'linear-gradient(90deg,rgb(231, 111, 12),rgb(202, 13, 101))', 
            color: '#fff',
            borderRadius: '20px',
            textTransform: 'none',
            fontWeight: 'bold',
            paddingX: 3,
            marginY: 2.5,
            paddingY: 1.5,
            boxShadow: 3,
            '&:hover': {
              background: 'linear-gradient(90deg,rgb(89, 12, 231),rgb(14, 236, 62))', 
              boxShadow: 6,
              transform: 'scale(1.05)',
              transition: '0.3s ease',
            },
          }}
        >
          Download My Resume (German)
        </Button>

        <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 4 }}>
          © Shams Kabir — All rights reserved. Built with ❤️ using React.js 
        </Typography>
      </Box>
    </div>
  );
};

export default ContactForm;
