import React, { useState } from "react";
import a from "../assets/line.jpg"
import { Snackbar, Alert } from "@mui/material";

import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";


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
    <Box sx={{display: "flex", alignItems: "center", background: "black", backgroundImage: "url('"+ a + "')",
            height: "100vh",
        width: "100%",    }}>
  
      <Box sx={{ flex: 1, pr: 2,height: "50%",width:"30px",marginLeft:"5vw"  }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: "center",width:"550px"  }}>
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
          background: "rgba(230, 229, 220, 0.72)",
          p: 4,
          borderRadius: 2,
          height: "35%",
          marginRight:"30px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Get in Touch
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Email: <strong>shamsmohammed726@gmail.com</strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactForm;
