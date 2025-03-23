import React, { useState } from "react";
import space from "../assets/space2.jpg"
import { Snackbar, Alert } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { FaXing } from 'react-icons/fa'; // React Icons Xing Icon


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
    }}
  >
      <Box sx={{ flex: 1, pr: 2, minHeight: "50vh", width: "75%", marginLeft: "5vw", marginBottom: "70px" }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: "center", height: "90%",width:"75%"  }}>
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
            <Button variant="contained" color="primary" type="submit" fullWidth>
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
      </Box>

      {/* Right Side - Contact Details */}
      <Box
        sx={{
          flex: 1,
          pl: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(243, 243, 239, 0.79)",
          p: 4,
          borderRadius: 2,
          height: "35%",
          width:"25%",
          marginRight:"30px",
          textAlign: "center",
           marginBottom:"70px"
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Get in Touch
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Email: <strong>shamsmohammed726@gmail.com</strong>
        </Typography>
        <div>
          <a
            href="https://www.linkedin.com/in/shams-mohammed-5a7a372ba/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", cursor: "pointer" }} // Cursor on LinkedIn icon
          >
            <LinkedInIcon style={{ fontSize: 40, color: "blue" }}  />
          </a>
          <a
            href="https://www.xing.com/profile/shams_kabir/web_profiles?expandNeffi=true"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", cursor: "pointer" }} // Cursor on Xing icon
          >
             <FaXing style={{ fontSize: 40, color: "green" }} /> 
          </a>
        </div>


      </Box>
    </div>
  );
};

export default ContactForm;
