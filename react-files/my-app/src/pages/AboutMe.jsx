import React from "react";
import { Typography, Paper, Box, Avatar } from "@mui/material";
import pic from "../assets/pic2.jpg"

const AboutMe = () => {
  return (
 
    <Box
      component={Paper}
      elevation={6}
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap:"20px",
        justifyContent: "flex-start",
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflowY:"auto",
       
      }}
    > 
  
  <Box
  component={Paper}
  elevation={6}
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start", // Not center, so content can grow
    height: "auto", // Fixed height to enable scroll
    width: "50%",
    borderRadius: 4,
    marginLeft: "5vw",
    padding: 4,
    background: "rgba(245, 245, 245, 0.9)",
    color: "black",
    textAlign: "left",
    overflowY: "auto", // Scroll inside
    flexShrink: 0, // Important: prevent layout squishing
    "&::-webkit-scrollbar": {
      width: 0,
    },
    scrollbarWidth: "none",
  }}
>

      <Typography variant="h5" fontWeight="bold" mt={3} sx={{ fontSize: '1.4rem', lineHeight: 1.8 }}>
        Hello there,
      </Typography>

      <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
        My name is Shams, and I am currently a Computer Science bachelor's student at Darmstadt University of Applied Sciences, in my sixth semester. Alongside my studies, I work as a Werkstudent in software development and as a student assistant at my university, where I work with Python and Docker containers. 
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
        I originate from Bangladesh, but I spent most of my childhood and school years in Qatar before moving to Germany for university. In my free time, I enjoy capturing moments with my phone. 
      </Typography>

      <Typography variant="h5" fontWeight="bold" mt={3} sx={{ fontSize: '1.4rem', lineHeight: 1.8 }}>
      I’m familiar with:
      </Typography>

        <Box component="ul" sx={{ paddingLeft: 3 }}>
          {[
            "Qt (UI Development)",
            "React with TypeScript/JavaScript (Beginner)",
            "SQL",
            "PHP, HTML, CSS",
            "Python",
            "Docker",
            "Java",
          ].map((skill, index) => (
            <Typography component="li" key={index} variant="body1">
              {skill}
            </Typography>
          ))}
        </Box>

      </Box>

      {/* Right side: Avatar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "30vw", // Adjust the size of the avatar container
          height: "60vh", // Match the height of the left box
          paddingLeft: 2,
        }}
      >
        <Avatar
          alt="My Avatar"
          src={pic}
          sx={{ width: 250, height: 250, borderRadius: "50%" }}
        />
      </Box>
    </Box>
   
  );
};

export default AboutMe;
